import React, { useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('load', scrollToTop);
    return () => window.removeEventListener('load', scrollToTop);
  }, []);

  return (
    <div className="font-sans text-gray-200 bg-black">
      <Header />
      <Hero />
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><FeaturedLocations /></AnimatedSection>
      <AnimatedSection><SlotMachines /></AnimatedSection>
      <AnimatedSection><Testimonials /></AnimatedSection>
      <AnimatedSection><Newsletter /></AnimatedSection>
      <Footer />
    </div>
  );
};

export default HomePage;

const Header = () => (
  <motion.header
    className="bg-black bg-opacity-90 text-white py-4 sm:py-6 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.h1 
      className="text-xl sm:text-2xl font-light tracking-wider text-white mb-4 sm:mb-0"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      LegacyPolandGN
    </motion.h1>
    <nav className="w-full sm:w-auto">
      <ul className="flex flex-wrap justify-center sm:space-x-8">
        {[
          { name: "À propos", path: "/about" },
          { name: "Emplacements", path: "#emplacements" },
          { name: "Machines", path: "#machines" },
          { name: "Contact", path: "#contact" }
        ].map((item, index) => (
          <motion.li key={item.name}
            className="mx-2 sm:mx-0 my-2 sm:my-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {item.path.startsWith('#') ? (
              <a href={item.path} className="text-sm uppercase tracking-wider hover:text-gray-300 transition duration-300">
                {item.name}
              </a>
            ) : (
              <Link to={item.path} className="text-sm uppercase tracking-wider hover:text-gray-300 transition duration-300">
                {item.name}
              </Link>
            )}
          </motion.li>
        ))}
      </ul>
    </nav>
  </motion.header>
);

const Hero = () => (
  <motion.section
    className="min-h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center relative px-4 py-20 sm:py-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://img.freepik.com/free-photo/living-room-with-couch_1048-2488.jpg?t=st=1728425330~exp=1728428930~hmac=c258066c60001e19c2d5ddb88c97277c8ed4d4031307d6eded9e9daa00495c81&w=900')`
    }}
  >
    <motion.div 
      className="z-10 max-w-3xl px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Élevez Votre Expérience de Jeu
      </motion.h2>
      <motion.p 
        className="text-lg sm:text-xl lg:text-2xl mb-12 font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Plongez dans un cadre opulent et un divertissement palpitant
      </motion.p>
      <motion.button
        className="w-full sm:w-auto bg-gold-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gold-400 transition duration-300 uppercase tracking-wider shadow-lg text-sm sm:text-base"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,215,0,0.5)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        Explorez Nos Établissements
      </motion.button>
    </motion.div>
  </motion.section>
);

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="a-propos" className="py-32 px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl font-light mb-20 text-center text-white tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Notre Engagement envers l'Excellence
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Luxe Inégalé", description: "Immergez-vous dans un cadre opulent conçu pour élever votre expérience de jeu." },
            { title: "Technologie de Pointe", description: "Découvrez les dernières innovations en matière de jeu avec nos machines et systèmes à la pointe de la technologie." },
            { title: "Service Exceptionnel", description: "Notre personnel hautement qualifié est dédié à fournir un service personnalisé et attentif à chaque invité." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-light mb-4 text-white">{item.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Chez LegacyPolandGN, nous redéfinissons le jeu de luxe. Nos établissements allient une ambiance sophistiquée à une technologie de pointe, 
            offrant une expérience inégalée pour le joueur exigeant.
          </p>
          <motion.button
            className="py-3 px-8 bg-transparent border border-gold-500 text-gold-500 text-sm uppercase tracking-widest font-light hover:bg-gold-500 hover:text-black transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(212,175,55,0.3)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/about')}
          >
            En Savoir Plus
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedLocations = () => (
  <section id="emplacements" className="py-20 px-4 sm:px-6 bg-black">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-light mb-16 text-center text-white tracking-wider">Destinations Exquises</h2>
      <div className="space-y-16">
        {[
          { name: 'Élégance Côtière', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80' },
          { name: 'Retraite Montagnarde', image: 'https://images.unsplash.com/photo-1518602164578-cd0074062767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
          { name: 'Oasis Urbaine', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
        ].map((location, index) => (
          <motion.div
            key={location.name}
            className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="w-full md:w-3/5 overflow-hidden">
              <motion.img 
                src={location.image} 
                alt={location.name} 
                className="w-full h-[40vh] object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="w-full md:w-2/5 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-white tracking-wide">{location.name}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">Vivez un luxe et une excitation inégalés dans notre établissement {location.name}. Plongez dans un monde d'opulence et de divertissement palpitant.</p>
              <motion.button
                className="inline-block py-2 px-6 bg-transparent border border-gold-500 text-gold-500 text-xs uppercase tracking-widest font-light hover:bg-gold-500 hover:text-black transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(212,175,55,0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                Explorer
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-20">
        <motion.button
          className="py-3 px-8 bg-gold-500 text-black text-sm uppercase tracking-widest font-light hover:bg-transparent hover:text-gold-500 border-2 border-gold-500 transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(212,175,55,0.7)" }}
          whileTap={{ scale: 0.98 }}
        >
          Voir Toutes les Destinations
        </motion.button>
      </div>
    </div>
  </section>
);

const SlotMachines = () => (
  <section id="machines" className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-900">
    <h2 className="text-3xl font-light mb-10 sm:mb-12 text-center text-white tracking-wide">Machines de Jeu Premium</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
      {[
        { name: 'Fortune Dorée', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
        { name: 'Quinte Flush Royale', image: 'https://images.unsplash.com/photo-1521364577880-a15e92cbff6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Diamant Deluxe', image: 'https://images.unsplash.com/photo-1582656975064-04e9452fc60e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      ].map((slot, index) => (
        <motion.div
          key={slot.name}
          className="bg-black rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          whileHover={{ scale: 1.03 }}
        >
          <img src={slot.image} alt={slot.name} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-light mb-2 text-white">{slot.name}</h3>
            <p className="text-gray-400 text-sm">Vivez le frisson de notre machine {slot.name} à la pointe de la technologie.</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Testimonials = () => {
  const testimonials = [
    { 
      name: "James R.", 
      text: `Un mélange inégalé de luxe et d'excitation. LegacyPolandGN a redéfini mes attentes en matière de jeu. L'attention portée aux détails dans tous les aspects de l'expérience est vraiment remarquable.`
    },
    { 
      name: "Emily S.", 
      text: `L'attention aux détails et le service impeccable font de chaque visite une expérience vraiment mémorable. Dès que j'entre, je me sens transportée dans un monde d'opulence et d'excitation.`
    },
    { 
      name: "Michael T.", 
      text: `LegacyPolandGN offre une expérience de jeu unique. L'ambiance, les jeux et le service sont tous de premier ordre. C'est ma destination de prédilection pour une soirée de luxe et de frissons.`
    },
    { 
      name: "Sophia L.", 
      text: `Je suis constamment impressionnée par le niveau de sophistication chez LegacyPolandGN. L'attention portée aux détails dans la décoration et le professionnalisme du personnel créent une atmosphère inégalée.`
    },
    { 
      name: "Robert K.", 
      text: `En tant que voyageur fréquent, j'ai expérimenté de nombreux établissements haut de gamme, mais LegacyPolandGN se démarque. Le mélange d'élégance classique et de jeu moderne est parfaitement exécuté.`
    },
    { 
      name: "Isabella M.", 
      text: `Chaque visite à LegacyPolandGN est spéciale. Les événements exclusifs, le service personnalisé et l'environnement luxueux global me font revenir encore et encore.`
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000); // Change testimonial every 15 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-light mb-16 text-center text-white tracking-wider">Expériences de nos Invités</h2>
        <div className="relative h-80 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full"
            >
              <div className="bg-gray-900 p-8 rounded-lg shadow-xl text-center">
                <p className="text-gray-300 mb-6 italic leading-relaxed text-lg">"{testimonials[currentIndex].text}"</p>
                <h4 className="font-light text-gold-500 text-xl">{testimonials[currentIndex].name}</h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-between items-center mt-8">
          <button 
            onClick={handlePrev}
            className="text-gold-500 hover:text-gold-400 transition-colors duration-300"
          >
            &#8592; Précédent
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gold-500' : 'bg-gray-600'}`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="text-gold-500 hover:text-gold-400 transition-colors duration-300"
          >
            Suivant &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => (
  <section className="py-16 sm:py-24 px-4 sm:px-8 bg-black relative overflow-hidden mb-16">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-300 to-gold-600 transform -skew-y-6"></div>
    </div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-3xl sm:text-4xl font-light mb-4 sm:mb-6 text-white tracking-wide">Restez Connecté</h2>
      <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10">Rejoignez notre communauté exclusive pour des offres spéciales et des invitations à des événements.</p>
      <motion.form 
        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <input 
          type="email" 
          placeholder="Votre adresse e-mail" 
          className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 rounded-full text-black placeholder-black bg-white focus:outline-none focus:ring-2 focus:ring-gold-300 transition duration-300 text-center sm:text-left"
        />
        <motion.button
          className="w-full sm:w-auto bg-gold-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gold-400 transition duration-300 uppercase tracking-wider shadow-lg text-sm sm:text-base"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,215,0,0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          S'abonner
        </motion.button>
      </motion.form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-white text-xl font-light mb-6 pb-2 border-b border-gold-500 inline-block">LegacyPolandGN</h3>
          <p className="text-sm leading-relaxed">Élevant l'art du jeu et du divertissement de luxe. Vivez une opulence et une excitation inégalées.</p>
        </div>
        <div>
          <h3 className="text-white text-xl font-light mb-6 pb-2 border-b border-gold-500 inline-block">Liens Rapides</h3>
          <ul className="space-y-3">
            <li><a href="/about" className="hover:text-gold-500 transition duration-300 text-sm">À Propos de Nous</a></li>
            <li><a href="/locations" className="hover:text-gold-500 transition duration-300 text-sm">Nos Emplacements</a></li>
            <li><a href="/machines" className="hover:text-gold-500 transition duration-300 text-sm">Machines de Jeu</a></li>
            <li><a href="/contact" className="hover:text-gold-500 transition duration-300 text-sm">Contactez-nous</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-xl font-light mb-6 pb-2 border-b border-gold-500 inline-block">Légal</h3>
          <ul className="space-y-3">
            <li><a href="/privacy" className="hover:text-gold-500 transition duration-300 text-sm">Politique de Confidentialité</a></li>
            <li><a href="/terms" className="hover:text-gold-500 transition duration-300 text-sm">Conditions d'Utilisation</a></li>
            <li><a href="/responsible-gaming" className="hover:text-gold-500 transition duration-300 text-sm">Jeu Responsable</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-xl font-light mb-6 pb-2 border-b border-gold-500 inline-block">Connectez-vous avec Nous</h3>
          <div className="flex justify-start pl-8 mb-6">
            {[
              { icon: FaFacebookF, link: "https://facebook.com" },
              { icon: FaTwitter, link: "https://twitter.com" },
              { icon: FaInstagram, link: "https://instagram.com" },
              { icon: FaLinkedinIn, link: "https://linkedin.com" },
              { icon: FaYoutube, link: "https://youtube.com" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gold-500 transition duration-300 mr-4"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-sm">Restez informé de nos dernières nouvelles et offres.</p>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-sm">
        <p>&copy; 2023 LegacyPolandGN. Tous droits réservés.</p>
        <p className="mt-2 text-gray-500">Des expériences de jeu luxueuses vous attendent.</p>
      </div>
    </div>
  </footer>
);

export { Header, Footer, AnimatedSection };