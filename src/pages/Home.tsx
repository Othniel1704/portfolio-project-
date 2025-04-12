import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  const heroContent = {
    title: "Je suis un développeur junior",
    description: "Un développeur junior passionné par la création d'applications web",
    buttonText: "Découvrez mes projets",
    buttonLink: "/projects",
    //backgroundImage: "/images/my-hero.jpg", // image dans /public/images/
  };

  return (
    <div>
      <Hero
        title={heroContent.title}
        description={heroContent.description}
        buttonText={heroContent.buttonText}
        buttonLink={heroContent.buttonLink}
      />
    </div>
  );
};

export default Home;
