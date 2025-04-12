import React from 'react';

const About = () => {
  const description = `
  Passionné par le développement web, je suis un étudiant en BTS SIO à la recherche de nouvelles opportunités. J'ai une solide compréhension des technologies web modernes et je suis constamment à l'affût des dernières tendances.
  `;
  const background = `
  Mon parcours en BTS SIO m'a permis d'acquérir des compétences solides en développement d'applications et en gestion de projets. J'ai travaillé sur divers projets, allant de la création de sites web à la conception d'applications mobiles.
  `;
  const goals = `
  Mon objectif est de continuer à apprendre et à grandir en tant que développeur web. Je souhaite intégrer une entreprise dynamique où je pourrai mettre à profit mes compétences et contribuer à des projets innovants. Je suis particulièrement intéressé par les technologies front-end comme React, mais je suis également curieux d'explorer le back-end avec Node.js et d'autres technologies.
  `;

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">À propos de moi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Description</h3>
              <p className="text-gray-300">
                {description}
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Mon parcours</h3>
              <p className="text-gray-300">
                {background}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Mes objectifs</h3>
              <p className="text-gray-300">
                {goals}
              </p>
            </div>
          </div>
          <div className="md:col-span-1">
            {/* Contenu de la partie droite - à adapter selon vos besoins */}
            <h3 className="text-xl font-semibold text-center mb-6">Mes compétences</h3>

          {/*   <div className="space-y-4">
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;