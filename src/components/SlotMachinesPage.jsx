import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Header, Footer, AnimatedSection } from './HomePage';

const SlotMachinesPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slotMachines = [
    { name: 'Fortune Dorée', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { name: 'Quinte Flush Royale', image: 'https://images.unsplash.com/photo-1521364577880-a15e92cbff6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Diamant Deluxe', image: 'https://images.unsplash.com/photo-1582656975064-04e9452fc60e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Jackpot Jungle', image: 'https://images.unsplash.com/photo-1590336225155-d7e19a3a954f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Trésors de Pharaon', image: 'https://images.unsplash.com/photo-1520278013317-50b1dfd757cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Galaxie Gagnante', image: 'https://images.unsplash.com/photo-1604028297236-42130c7dcc3a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div className="font-sans text-gray-200 bg-black">
      <Header />
      <Hero />
      <AnimatedSection>
        <SlotMachinesGrid slotMachines={slotMachines} />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturedMachine />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

const Hero = () => (
  <motion.section
    className="min-h-[50vh] flex flex-col justify-center items-center text-center text-white bg-cover bg-center relative px-4 py-20 sm:py-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')`
    }}
  >
    <motion.h1 
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-wide"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      Machines à Sous Premium
    </motion.h1>
    <motion.p 
      className="text-lg sm:text-xl lg:text-2xl mb-12 font-light"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      Découvrez notre collection exclusive de machines à sous
    </motion.p>
  </motion.section>
);

const SlotMachinesGrid = ({ slotMachines }) => (
  <section className="py-20 px-4 sm:px-6 bg-black">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-light mb-12 text-center text-white tracking-wide">Nos Machines à Sous</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {slotMachines.map((machine, index) => (
          <motion.div
            key={machine.name}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={machine.image} alt={machine.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-light mb-2 text-white">{machine.name}</h3>
              <p className="text-gray-400 text-sm">Vivez le frisson de notre machine {machine.name} à la pointe de la technologie.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedMachine = () => (
  <section className="py-20 px-4 sm:px-6 bg-black">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-light mb-16 text-center text-white tracking-wide">Machine Vedette</h2>
      <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-16">
        <div className="w-full lg:w-1/2">
          <motion.img 
            src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="Machine Vedette" 
            className="w-full h-auto rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <motion.h3 
            className="text-3xl font-light mb-6 text-gold-500 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Méga Jackpot Deluxe
          </motion.h3>
          <motion.p 
            className="text-gray-300 mb-8 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Notre machine vedette, Méga Jackpot Deluxe, offre une expérience de jeu inégalée. Avec ses graphismes époustouflants, son système de bonus innovant et ses jackpots progressifs, cette machine est le summum du divertissement et de l'excitation.
          </motion.p>
          <motion.ul 
            className="text-gray-400 space-y-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <li className="flex items-center">
              <span className="text-gold-500 mr-3">&#9733;</span>
              5 rouleaux et 50 lignes de paiement
            </li>
            <li className="flex items-center">
              <span className="text-gold-500 mr-3">&#9733;</span>
              Jackpots progressifs multiples
            </li>
            <li className="flex items-center">
              <span className="text-gold-500 mr-3">&#9733;</span>
              Tours gratuits avec multiplicateurs
            </li>
            <li className="flex items-center">
              <span className="text-gold-500 mr-3">&#9733;</span>
              Fonction de jeu bonus interactive
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  </section>
);

export default SlotMachinesPage;