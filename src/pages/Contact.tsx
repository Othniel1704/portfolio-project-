import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen py-20 px-4 flex items-center justify-center text-white">
      <motion.div
        className="max-w-2xl mx-auto p-8 rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.h2
          className="text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contactez-moi
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Vous avez un projet en tête ? N'hésitez pas à me contacter !
        </motion.p>
        <motion.div
          className='flex justify-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <ContactForm/>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Contact;