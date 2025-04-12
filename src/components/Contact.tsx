import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-white">
        <h2 className="text-4xl font-bold mb-8 text-center">Contactez-moi</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          <div className="flex flex-col justify-center items-center gap-4">
            <a href="https://www.linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-gray-300">
              <Linkedin className="mr-2 h-6 w-6" /> LinkedIn
            </a>
            <a href="https://github.com/votreprofil" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-gray-300">
              <Github className="mr-2 h-6 w-6" /> GitHub
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-400">
          N'hésitez pas à me contacter par le formulaire ci-dessus, ou bien via mes liens sociaux !
        </div>
      </div>
    </section>
  );
};

export default Contact;