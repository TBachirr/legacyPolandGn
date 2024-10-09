import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Header, Footer, AnimatedSection } from './HomePage';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-200 bg-black">
      <Header />
      <Hero />
      <AnimatedSection>
        <ContactInfo />
      </AnimatedSection>
      <AnimatedSection>
        <ContactForm />
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
      Contactez-nous
    </motion.h1>
    <motion.p 
      className="text-lg sm:text-xl lg:text-2xl mb-12 font-light"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      Nous sommes à votre écoute
    </motion.p>
  </motion.section>
);

const ContactInfo = () => (
  <section className="py-20 px-4 sm:px-6 bg-black">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-light mb-12 text-center text-white tracking-wide">Nos Coordonnées</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: FaPhone, title: "Téléphone", content: "+33 1 23 45 67 89" },
          { icon: FaEnvelope, title: "Email", content: "contact@legacypolandgn.com" },
          { icon: FaMapMarkerAlt, title: "Adresse", content: "123 Rue du Casino, 75001 Paris, France" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <item.icon className="text-4xl text-gold-500 mx-auto mb-4" />
            <h3 className="text-xl font-light mb-2 text-white">{item.title}</h3>
            <p className="text-gray-400">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ContactForm = () => (
  <section className="py-20 px-4 sm:px-6 bg-gray-900">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-light mb-12 text-center text-white tracking-wide">Envoyez-nous un Message</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nom</label>
          <input type="text" id="name" name="name" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold-500" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold-500"></textarea>
        </div>
        <div>
          <motion.button
            type="submit"
            className="w-full py-3 px-6 bg-gold-500 text-black text-sm uppercase tracking-widest font-light hover:bg-transparent hover:text-gold-500 border-2 border-gold-500 transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Envoyer
          </motion.button>
        </div>
      </form>
    </div>
  </section>
);

export default ContactPage;