import React, { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Optionnel : créez un formulaire gratuit sur https://formspree.io,
// puis renseignez son identifiant dans un fichier .env :
//   VITE_FORMSPREE_ID=xxxxxxx
// Sans cela, le formulaire bascule automatiquement sur l'ouverture du client mail.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
const EMAIL = 'kkonanothniel@gmail.com';

type Status = 'idle' | 'success' | 'mailto' | 'error';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const nextErrors = {
      name: !name ? 'Nom requis' : '',
      email: !email ? 'Email requis' : !validateEmail(email) ? 'Email invalide' : '',
      message: !message ? 'Message requis' : '',
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email || nextErrors.message) return;

    setLoading(true);
    setStatus('idle');

    try {
      if (FORMSPREE_ID) {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error('Échec de l’envoi');
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Repli : ouvre le client mail pré-rempli
        const subject = 'Contact via le portfolio';
        const body = `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
        setStatus('mailto');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition';

  return (
    <section className="min-h-screen py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Me{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Contacter
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Une opportunité d’alternance ou une question ? Écrivez-moi, je réponds
            rapidement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Mes coordonnées</h2>
            <div className="space-y-6">
              <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
                <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                    {EMAIL}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg text-cyan-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Localisation</h3>
                  <p className="text-gray-400">Île-de-France · mobile sur la région</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-700">
              <h3 className="text-white font-semibold mb-4">Réseaux</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/othniel-kouakou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-3 rounded-full text-gray-400 hover:bg-blue-600 hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Othniel1704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-3 rounded-full text-gray-400 hover:bg-slate-600 hover:text-white transition"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  className={inputClasses}
                  placeholder="Votre nom"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  className={inputClasses}
                  placeholder="exemple@email.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  className={inputClasses}
                  placeholder="Votre message…"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center px-6 py-4 bg-cyan-500 text-slate-950 rounded-xl text-lg font-bold hover:bg-cyan-400 transition transform hover:scale-[1.02] shadow-lg shadow-cyan-500/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  'Envoi en cours…'
                ) : (
                  <>
                    Envoyer le message <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="flex items-center justify-center gap-2 text-green-400 text-sm">
                  <CheckCircle2 className="w-4 h-4" /> Message envoyé, merci ! Je vous
                  recontacte rapidement.
                </p>
              )}
              {status === 'mailto' && (
                <p className="text-cyan-400 text-sm text-center">
                  Votre logiciel de messagerie s’est ouvert pour finaliser l’envoi.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  Une erreur est survenue. Écrivez-moi directement à {EMAIL}.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
