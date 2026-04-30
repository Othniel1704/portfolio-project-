import { supabase } from '../lib/supabaseClient';
import OpenAI from "openai";

const RSS_FEEDS = [
    // --- CATEGORY: AI (Frontier Models) ---
    { name: 'OpenAI Newsroom', url: 'https://openai.com/news/rss.xml', category: 'AI' },
    { name: 'Anthropic News', url: 'https://www.anthropic.com/index.xml', category: 'AI' },
    { name: 'Google AI Updates', url: 'https://blog.google/innovation-and-ai/rss/', category: 'AI' },
    { name: 'Mistral AI News', url: 'https://mistral.ai/news/index.xml', category: 'AI' },

    // --- CATEGORY: Vibe Coding & Agentic Dev ---
    { name: 'Replit Blog', url: 'https://blog.replit.com/feed.xml', category: 'Vibe Coding' },
    { name: 'Cursor Blog (Mirror)', url: 'https://any-feeds.com/api/feeds/custom/cmkoaiogm0000lf04qmtirq2g/rss.xml', category: 'Vibe Coding' },
    { name: 'GitHub AI & ML', url: 'https://github.blog/category/ai-and-ml/feed/', category: 'Vibe Coding' }
];

const PROXY_URL = "https://api.allorigins.win/get?url=";

export const fetchAndAnalyzeArticles = async () => {
    console.log("Starting tech watch with native DOMParser...");

    let fetchedItems: any[] = [];

    // 1. Fetch Real RSS Feeds
    for (const feed of RSS_FEEDS) {
        try {
            console.log(`Fetching ${feed.name}...`);
            const response = await fetch(PROXY_URL + encodeURIComponent(feed.url));
            const data = await response.json();

            if (!data.contents) {
                console.warn(`No content for ${feed.name}`);
                continue;
            }

            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data.contents, "text/xml");

            // Try specific RSS/Atom selectors
            let items = Array.from(xmlDoc.querySelectorAll("item"));
            if (items.length === 0) {
                items = Array.from(xmlDoc.querySelectorAll("entry"));
            }

            console.log(`Parsed ${items.length} items from ${feed.name}`);

            for (let i = 0; i < Math.min(items.length, 2); i++) {
                const item = items[i];

                const title = item.querySelector("title")?.textContent || "No Title";

                // Handle different link formats (RSS <link>text</link> vs Atom <link href="..." />)
                const linkNode = item.querySelector("link");
                let link = linkNode?.textContent || "";
                if (!link && linkNode) {
                    link = linkNode.getAttribute("href") || "";
                }

                // Handle content strategies
                const encodedContent = item.getElementsByTagNameNS("*", "encoded")[0]?.textContent; // content:encoded
                const contentText = item.querySelector("content")?.textContent;
                const description = item.querySelector("description")?.textContent;
                const summary = item.querySelector("summary")?.textContent;

                let content = encodedContent || contentText || description || summary || "";

                // Cleanup
                const cleanContent = content.replace(/<[^>]*>?/gm, '').substring(0, 500);

                if (link) {
                    fetchedItems.push({
                        title,
                        link,
                        content: cleanContent,
                        source: feed.name
                    });
                }
            }
        } catch (e) {
            console.error(`Error fetching ${feed.name}:`, e);
        }
    }

    if (fetchedItems.length === 0) {
        console.warn("No items found. Check CORS or Proxy status.");
        return;
    }

    // 2. Initialize OpenAI (Scaleway)
    const apiKey = import.meta.env.VITE_SCALEWAY_API_KEY;
    const baseURL = import.meta.env.VITE_SCALEWAY_BASE_URL;

    let client: OpenAI | null = null;

    if (apiKey && baseURL) {
        client = new OpenAI({ baseURL, apiKey, dangerouslyAllowBrowser: true });
    }

    // 3. Process each item (Analyze & Save)
    for (const item of fetchedItems) {
        try {
            // Check Duplicate
            if (supabase) {
                const { data } = await supabase.from('articles').select('id').eq('link', item.link).maybeSingle();
                if (data) {
                    console.log(`Skipping duplicate: ${item.title}`);
                    continue;
                }
            }

            let analysis;

            if (client) {
                const completion = await client.chat.completions.create({
                    model: "gpt-oss-120b",
                    messages: [
                        { role: "system", content: "You are a helpful assistant that replies in JSON." },
                        {
                            role: "user", content: `
                            Analyze this article (${item.source}):
                            "${item.title}"
                            ${item.content}
                            
                            Output JSON: { "summary": "French summary (max 2 sentences)", "category": "AI" or "Vibe Coding" or "Dev" }
                        `}
                    ],
                    max_tokens: 512,
                    temperature: 0.1,
                });

                const text = completion.choices[0].message.content || "{}";
                try {
                    analysis = JSON.parse(text.replace(/```json|```/g, '').trim());
                } catch (e) {
                    console.error("AI JSON Parse Error", e);
                    analysis = { summary: "Erreur IA", category: "Dev" };
                }
            } else {
                analysis = { summary: "[MOCK] " + item.title, category: 'AI' };
            }

            // Save
            if (supabase) {
                await supabase.from('articles').insert({
                    title: item.title,
                    summary: analysis.summary,
                    link: item.link,
                    source: item.source,
                    category: analysis.category,
                    status: 'draft',
                    date: new Date().toISOString().split('T')[0]
                });
                console.log(`Saved: ${item.title}`);
            }

        } catch (error) {
            console.error("Processing error:", error);
        }
    }
};
