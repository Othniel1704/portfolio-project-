import { useEffect } from 'react';

const Legal = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Mentions Légales</h1>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                        <h2 className="text-xl font-bold text-cyan-400 mb-4">1. Éditeur du site</h2>
                        <p>
                            Le présent site est édité par <strong>Konan Othniel Kouakou</strong>.<br />
                            Statut : Étudiant en BTS SIO (Services Informatiques aux Organisations).<br />
                            Email : <a href="mailto:kkonanothniel@gmail.com" className="text-cyan-400 hover:underline">kkonanothniel@gmail.com</a>
                        </p>
                    </section>

                    <section className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                        <h2 className="text-xl font-bold text-cyan-400 mb-4">2. Hébergement</h2>
                        <p>
                            Ce site est hébergé par <strong>Netlify</strong>.<br />
                            Adresse : 2325 3rd Street, Suite 215, San Francisco, California 94107, USA.<br />
                            Site web : <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">www.netlify.com</a>
                        </p>
                    </section>

                    <section className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                        <h2 className="text-xl font-bold text-cyan-400 mb-4">3. Propriété Intellectuelle</h2>
                        <p>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                    </section>

                    <section className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                        <h2 className="text-xl font-bold text-cyan-400 mb-4">4. Données Personnelles</h2>
                        <p>
                            Ce site ne collecte aucune donnée personnelle à l'insu de l'utilisateur.
                            Les informations saisies dans le formulaire de contact (nom, email) ne sont utilisées que pour répondre aux demandes et ne sont pas stockées en base de données sans consentement explicite.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Legal;
