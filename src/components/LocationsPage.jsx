import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header, Footer, AnimatedSection } from './HomePage';

const LocationsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locations = [
    { id: 'elegance-cotiere', name: 'Élégance Côtière', image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 'retraite-montagnarde', name: 'Retraite Montagnarde', image: 'https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'oasis-urbaine', name: 'Oasis Urbaine', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80' },
    { id: 'paradis-tropical', name: 'Paradis Tropical', image: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80' },
    { id: 'splendeur-historique', name: 'Splendeur Historique', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80' },
    { id: 'refuge-alpin', name: 'Refuge Alpin', image: 'https://images.unsplash.com/photo-1714128254266-4db839b492d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div className="font-sans text-gray-200 bg-black">
      <Header />
      <Hero />
      <AnimatedSection>
        <section className="py-20 px-4 sm:px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-light mb-16 text-center text-white tracking-wider">Nos Emplacements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={location.id}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img src={location.image} alt={location.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-light mb-4 text-white">{location.name}</h3>
                    <Link 
                      to={`/locations/${location.id}`}
                      className="inline-block py-2 px-6 bg-gold-500 text-black text-sm uppercase tracking-wider font-light hover:bg-gold-400 transition duration-300"
                    >
                      Découvrir
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
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
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80')`
    }}
  >
    <motion.h1 
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-wide"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      Nos Destinations
    </motion.h1>
    <motion.p 
      className="text-lg sm:text-xl lg:text-2xl mb-12 font-light"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      Découvrez nos établissements de luxe à travers le pays
    </motion.p>
  </motion.section>
);

export default LocationsPage;