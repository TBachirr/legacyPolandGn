import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Header, Footer, AnimatedSection } from './HomePage';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const AboutPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-200 bg-black">
      <Header />
      <Hero />
      <AnimatedSection><OurStory /></AnimatedSection>
      <AnimatedSection><OurValues /></AnimatedSection>
      <AnimatedSection><TeamSection /></AnimatedSection>
      <AnimatedSection><Achievements /></AnimatedSection>
      <Footer />
    </div>
  );
};

const Hero = () => (
  <motion.section
    className="min-h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center relative px-4 py-20 sm:py-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')`
    }}
  >
    <motion.div 
      className="z-10 max-w-3xl px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Notre Histoire
      </motion.h1>
      <motion.p 
        className="text-lg sm:text-xl lg:text-2xl mb-12 font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Découvrez l'héritage de LegacyPolandGN
      </motion.p>
    </motion.div>
  </motion.section>
);

const OurStory = () => (
  <section className="py-20 px-4 sm:px-6 bg-black">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-light mb-8 text-center text-white tracking-wide">Notre Parcours</h2>
      <div className="space-y-8">
        {[
          { year: "2005", text: "Fondation de LegacyPolandGN avec une vision audacieuse pour redéfinir le divertissement de luxe." },
          { year: "2010", text: "Expansion vers de nouvelles destinations, apportant notre expérience unique à travers le pays." },
          { year: "2015", text: "Introduction de technologies de pointe, établissant de nouvelles normes dans l'industrie du jeu." },
          { year: "2020", text: "Célébration de notre 15e anniversaire et lancement de notre programme de fidélité exclusif." },
          { year: "Aujourd'hui", text: "Continuellement à l'avant-garde de l'innovation, offrant des expériences inégalées à nos clients." },
        ].map((item, index) => (
          <motion.div 
            key={item.year}
            className="flex items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 w-24 text-gold-500 font-light">{item.year}</div>
            <div className="flex-grow pl-8 border-l border-gray-700">
              <p className="text-gray-300">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const OurValues = () => (
  <section className="py-20 px-4 sm:px-6 bg-gray-900">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-light mb-12 text-center text-white tracking-wide">Nos Valeurs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Excellence", description: "Nous visons l'excellence dans chaque aspect de notre service et de nos installations." },
          { title: "Innovation", description: "Nous repoussons constamment les limites pour offrir des expériences uniques et captivantes." },
          { title: "Intégrité", description: "Nous opérons avec la plus grande intégrité, gagnant la confiance de nos clients à chaque interaction." },
        ].map((value, index) => (
          <motion.div
            key={value.title}
            className="bg-black p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-light mb-4 text-gold-500">{value.title}</h3>
            <p className="text-gray-400">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section className="py-20 px-4 sm:px-6 bg-black">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-light mb-12 text-center text-white tracking-wide">Notre Équipe de Direction</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "Sophie Dubois", role: "PDG", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" },
          { name: "Marc Lefebvre", role: "Directeur des Opérations", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
          { name: "Élise Moreau", role: "Directrice Marketing", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
        ].map((member, index) => (
          <motion.div
            key={member.name}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-light mb-2 text-white">{member.name}</h3>
              <p className="text-gold-500">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const AnimatedNumber = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
  };

  const achievements = [
    { number: 15, text: "Années d'Excellence" },
    { number: 10, text: "Destinations de Luxe" },
    { number: 1000000, text: "Clients Satisfaits" },
    { number: 50, text: "Prix de l'Industrie" },
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light mb-12 text-center text-white tracking-wide">Nos Réalisations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.text}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-3xl sm:text-4xl font-light mb-2 text-gold-500">
                {inView ? (
                  achievement.number >= 1000000 ? (
                    <><AnimatedNumber n={achievement.number / 1000000} />M+</>
                  ) : (
                    <><AnimatedNumber n={achievement.number} />{achievement.number > 15 ? '+' : ''}</>
                  )
                ) : (
                  '0'
                )}
              </h3>
              <p className="text-sm text-gray-400">{achievement.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;