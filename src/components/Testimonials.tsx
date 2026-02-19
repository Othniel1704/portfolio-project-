import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Jean Dupont",
        role: "Professeur de Développement Web",
        company: "BTS SIO",
        content: "Othniel fait preuve d'une grande autonomie et d'une réelle passion pour le code. Ses projets démontrent une compréhension solide des concepts et une capacité à apprendre rapidement.",
        avatar: "👨‍🏫",
    },
    {
        name: "Marie Martin",
        role: "Responsable Pédagogique",
        company: "Formation",
        content: "Étudiant sérieux et investi, Othniel se distingue par sa curiosité et son esprit d'équipe. Il n'hésite pas à aider ses camarades et à partager ses connaissances.",
        avatar: "👩‍💼",
    },
];

const Testimonials = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                    Ce qu'on dit de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">moi</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 relative group"
                        >
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors" />

                            <p className="text-gray-300 mb-6 leading-relaxed italic relative z-10">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                    <p className="text-xs text-cyan-400">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
