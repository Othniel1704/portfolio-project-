import React, { useState } from 'react';
import { Mail, Send, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputClasses = "w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200";
  const labelClasses = "block text-sm font-semibold text-gray-300 mb-2";

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Me <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Contacter</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Vous avez un projet ou une opportunité ? Discutons-en ensemble.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-8">Mes Coordonnées</h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Email</h4>
                    <p className="text-gray-400">kkonanothniel@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Localisation</h4>
                    <p className="text-gray-400">Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Téléphone</h4>
                    <p className="text-gray-400">+225 07 47 43 78 54</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-700">
                <h4 className="text-white font-semibold mb-4">Réseaux Sociaux</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/Othniel1704" target="_blank" rel="noopener noreferrer" className="bg-slate-700 p-3 rounded-full text-gray-400 hover:bg-slate-600 hover:text-white transition-all duration-300">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/othniel-kouakou" target="_blank" rel="noopener noreferrer" className="bg-slate-700 p-3 rounded-full text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-slate-700 p-3 rounded-full text-gray-400 hover:bg-sky-500 hover:text-white transition-all duration-300">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={labelClasses}>Nom complet</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>Adresse Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                  placeholder="exemple@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>Votre message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                  placeholder="Comment puis-je vous aider ?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center px-6 py-4 border border-transparent text-lg font-bold rounded-xl text-slate-950 bg-cyan-500 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-cyan-500/30 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center">
                    Message envoyé !
                  </span>
                ) : (
                  <span className="flex items-center">
                    Envoyer le message
                    <Send className="ml-2 h-5 w-5" />
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;