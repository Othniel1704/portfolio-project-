import React from 'react';
import { Award, Calendar, CheckCircle } from 'lucide-react';

const certifications = [
    {
        title: "BTS SIO (Services Informatiques aux Organisations)",
        issuer: "Éducation Nationale",
        date: "En cours - 2025",
        status: "En cours",
        description: "Formation complète en développement d'applications et administration de systèmes",
        icon: <Award className="w-6 h-6" />,
    },
    {
        title: "MOOC Cybersécurité",
        issuer: "ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information)",
        date: "2024",
        status: "Obtenu",
        description: "Formation en sécurité informatique : cryptographie, sécurisation des systèmes, et bonnes pratiques",
        icon: <CheckCircle className="w-6 h-6" />,
    },
    {
        title: "Introduction à la Cybersécurité",
        issuer: "Cisco Networking Academy",
        date: "2024",
        status: "Obtenu",
        description: "Fondamentaux de la cybersécurité, protection des données, et sécurité des réseaux",
        icon: <CheckCircle className="w-6 h-6" />,
    },
    {
        title: "Licence Mathématiques-Informatique",
        issuer: "Université",
        date: "2023",
        status: "Obtenu",
        description: "Fondamentaux de la programmation et des mathématiques appliquées",
        icon: <CheckCircle className="w-6 h-6" />,
    },
];

const Certifications = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                    Formations & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Certifications</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                                    {cert.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                                            {cert.title}
                                        </h4>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cert.status === 'En cours'
                                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                            : 'bg-green-500/10 text-green-400 border border-green-500/20'
                                            }`}>
                                            {cert.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                                    <p className="text-sm text-gray-500 mb-3 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {cert.date}
                                    </p>
                                    <p className="text-sm text-gray-400 leading-relaxed">{cert.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
