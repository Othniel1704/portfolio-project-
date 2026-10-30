import { Calendar, CheckCircle, Clock, ExternalLink } from 'lucide-react';

const certifications = [
   
    {
        title: "MOOC Cybersécurité",
        issuer: "ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information)",
        date: "Octobre 2025",
        status: "Obtenu",
        description: "Formation en sécurité informatique : cryptographie, sécurisation des systèmes, et bonnes pratiques",
        icon: <CheckCircle className="w-5 h-5" aria-hidden="true" />,
        fileUrl: "/certif_ANSSI..pdf"
    },
    {
        title: "Introduction à la Cybersécurité",
        issuer: "Cisco Networking Academy",
        date: "Octobre 2025",
        status: "Obtenu",
        description: "Fondamentaux de la cybersécurité, protection des données, et sécurité des réseaux",
        icon: <CheckCircle className="w-5 h-5" aria-hidden="true" />,
        fileUrl: "/Introduction_to_Cybersecurity_certificate_kkonanothniel-gmail-com_19a402e8-8a99-4c74-9794-dd67322d84b4.pdf"
    },
    {
        title: "Prompt Engineering & Programming with OpenAI",
        issuer: "Columbia University (edX)",
        date: "2026",
        status: "En cours",
        description: "Conception de prompts, appels d'API de modèles de langage et intégration de l'IA générative dans des applications",
        icon: <Clock className="w-5 h-5" aria-hidden="true" />,
        fileUrl: ""
    }
];

const Certifications = () => (
  <section aria-labelledby="certif-title">
    <h2 id="certif-title" className="text-3xl font-extrabold tracking-tight text-white mb-8">
      Formations et certifications
    </h2>
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {certifications.map((cert) => {
        const done = cert.status === 'Obtenu';
        return (
          <li key={cert.title} className="surface p-6 flex flex-col">
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className={`p-2.5 rounded-xl ${done ? 'bg-emerald-400/10 text-emerald-300' : 'bg-violet-400/10 text-violet-300'}`}>
                {cert.icon}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                  done ? 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30' : 'bg-violet-400/10 text-violet-300 border-violet-400/30'
                }`}
              >
                {cert.status}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1 leading-snug">{cert.title}</h3>
            <p className="text-sm text-slate-400">{cert.issuer}</p>
            <p className="mt-2 text-sm text-slate-500 inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              {cert.date}
            </p>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">{cert.description}</p>
            {cert.fileUrl && (
              <a
                href={cert.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
              >
                Voir le certificat
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </li>
        );
      })}
    </ul>
  </section>
);

export default Certifications;
