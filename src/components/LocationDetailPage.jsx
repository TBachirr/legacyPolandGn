import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Header, Footer, AnimatedSection } from "./HomePage";

const LocationDetailPage = () => {
  const { id } = useParams();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locations = [
    {
      id: 'elegance-cotiere',
      name: 'Élégance Côtière',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: "Niché sur la côte pittoresque, notre établissement Élégance Côtière offre une expérience de jeu luxueuse avec une vue imprenable sur l'océan. Profitez de nos salles de jeu modernes, de notre restaurant gastronomique et de notre spa de classe mondiale.",
    },
    {
      id: 'retraite-montagnarde',
      name: 'Retraite Montagnarde',
      image: 'https://images.unsplash.com/photo-1601922046210-99a2a4f0ab6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: "Perché dans les montagnes majestueuses, notre Retraite Montagnarde combine l'excitation du jeu avec la sérénité de la nature. Découvrez nos tables de jeu exclusives, notre chalet confortable et nos activités de plein air.",
    },
    {
      id: 'oasis-urbaine',
      name: 'Oasis Urbaine',
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
      description: "Au cœur de la ville, notre Oasis Urbaine est un havre de paix et de divertissement. Profitez de nos machines à sous dernier cri, de notre bar à cocktails tendance et de notre terrasse sur le toit avec une vue panoramique sur la ville.",
    },
    {
      id: 'paradis-tropical',
      name: 'Paradis Tropical',
      image: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      description: "Plongez dans l'exotisme de notre Paradis Tropical. Entre plages de sable fin et jungle luxuriante, notre casino vous offre une expérience de jeu unique dans un cadre paradisiaque. Profitez de nos tables de jeu en plein air et de nos soirées thématiques tropicales.",
    },
    {
      id: 'splendeur-historique',
      name: 'Splendeur Historique',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
      description: "Revivez l'âge d'or du jeu dans notre établissement Splendeur Historique. Logé dans un palais du 19ème siècle, notre casino allie le charme d'antan aux technologies modernes. Découvrez nos salles de jeu somptueuses et notre service digne des plus grands monarques.",
    },
    {
      id: 'refuge-alpin',
      name: 'Refuge Alpin',
      image: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: "Niché au cœur des Alpes, notre Refuge Alpin offre une expérience de jeu unique à haute altitude. Profitez de nos tables de jeu avec vue sur les sommets enneigés, détendez-vous dans notre spa alpin, et savourez une cuisine de montagne raffinée dans notre restaurant étoilé.",
    },
  ];

  const location = locations.find(loc => loc.id === id);

  if (!location) {
    return <div>Emplacement non trouvé</div>;
  }

  return (
    <div className="font-sans text-gray-200 bg-black">
      <Header />
      <Hero location={location} />
      <AnimatedSection>
        <section className="py-20 px-4 sm:px-6 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-light mb-8 text-center text-white tracking-wide">{location.name}</h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">{location.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-light mb-4 text-gold-500">Nos Installations</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Salles de jeu modernes</li>
                  <li>Restaurant gastronomique</li>
                  <li>Bar à cocktails</li>
                  <li>Spa de luxe</li>
                  <li>Suites élégantes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4 text-gold-500">Horaires d'ouverture</h3>
                <p className="text-gray-300">Lundi - Dimanche : 24h/24</p>
                <p className="text-gray-300 mt-4">* Les horaires peuvent varier pour certaines installations</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      <Footer />
    </div>
  );
};

const Hero = ({ location }) => (
  <motion.section
    className="min-h-[50vh] flex flex-col justify-center items-center text-center text-white bg-cover bg-center relative px-4 py-20 sm:py-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${location.image}")`
    }}
  >
    <motion.h1 
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-wide"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {location.name}
    </motion.h1>
    <motion.p 
      className="text-lg sm:text-xl lg:text-2xl mb-12 font-light"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      Une expérience de jeu unique vous attend
    </motion.p>
  </motion.section>
);

export default LocationDetailPage;