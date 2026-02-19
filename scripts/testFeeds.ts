
import Parser from 'rss-parser';

const RSS_FEEDS = [
    { name: 'OpenAI Newsroom', url: 'https://openai.com/news/rss.xml' },
    { name: 'Anthropic News', url: 'https://www.anthropic.com/index.xml' },
    { name: 'Google AI Updates', url: 'https://blog.google/innovation-and-ai/rss/' },
    { name: 'Mistral AI News', url: 'https://mistral.ai/news/index.xml' },
    { name: 'Replit Blog', url: 'https://blog.replit.com/feed.xml' },
    { name: 'Cursor Blog (Mirror)', url: 'https://any-feeds.com/api/feeds/custom/cmkoaiogm0000lf04qmtirq2g/rss.xml' },
    { name: 'GitHub AI & ML', url: 'https://github.blog/category/ai-and-ml/feed/' }
];

const parser = new Parser();

async function testFeeds() {
    console.log("Testing RSS Feeds...");

    for (const feed of RSS_FEEDS) {
        try {
            console.log(`\nChecking ${feed.name} (${feed.url})...`);
            const feedData = await parser.parseURL(feed.url);
            console.log(`✅ Success! Found ${feedData.items.length} items.`);
            if (feedData.items.length > 0) {
                console.log(`   Latest: ${feedData.items[0].title}`);
                console.log(`   Link: ${feedData.items[0].link}`);
            }
        } catch (error: any) {
            console.error(`❌ Failed: ${error.message}`);
        }
    }
}

testFeeds();
