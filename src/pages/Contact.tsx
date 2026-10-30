import React, { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

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
    'w-full min-h-[48px] px-4 py-3 bg-ink-950/70 border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition aria-[invalid=true]:border-rose-400';

  return (
    <div className="min-h-dvh bg-ink-950 pb-24">
      <PageHeader
        tone="amber"
        title="Me contacter"
        subtitle="Une offre d'alternance, une question sur un projet ? Écrivez-moi, je réponds rapidement."
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="surface p-6 sm:p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Mes coordonnées</h2>
            <div className="space-y-6">
              <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
                <div className="bg-cyan-400/10 p-3 rounded-xl text-cyan-300 group-hover:bg-cyan-300 group-hover:text-ink-950 transition-colors">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-slate-300 group-hover:text-cyan-300 transition-colors break-all">
                    {EMAIL}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="bg-amber-300/10 p-3 rounded-xl text-amber-300">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Localisation</h3>
                  <p className="text-gray-400">Bezons (95), mobile dans toute l'Île-de-France</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <h3 className="text-white font-semibold mb-4">Réseaux</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/othniel-kouakou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border border-white/10 p-3 rounded-full text-slate-300 hover:bg-sky-500 hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/Othniel1704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border border-white/10 p-3 rounded-full text-slate-300 hover:bg-violet-500 hover:text-white transition"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="surface p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={inputClasses}
                  placeholder="Votre nom"
                />
                {errors.name && <p id="name-error" className="text-rose-300 text-sm mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputClasses}
                  placeholder="exemple@email.com"
                />
                {errors.email && <p id="email-error" className="text-rose-300 text-sm mt-1.5">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={inputClasses}
                  placeholder="Votre message…"
                />
                {errors.message && (
                  <p id="message-error" className="text-rose-300 text-sm mt-1.5">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full text-lg"
              >
                {loading ? (
                  'Envoi en cours…'
                ) : (
                  <>
                    Envoyer le message <Send className="h-5 w-5" aria-hidden="true" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p role="status" className="flex items-center justify-center gap-2 text-emerald-300 text-sm">
                  <CheckCircle2 className="w-4 h-4" /> Message envoyé, merci ! Je vous
                  recontacte rapidement.
                </p>
              )}
              {status === 'mailto' && (
                <p role="status" className="text-cyan-300 text-sm text-center">
                  Votre logiciel de messagerie s’est ouvert pour finaliser l’envoi.
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="text-rose-300 text-sm text-center">
                  Une erreur est survenue. Écrivez-moi directement à {EMAIL}.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
