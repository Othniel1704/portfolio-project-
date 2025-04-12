
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  };  

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-md text-white"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Name:
        </label>
        <motion.input
          className="w-full p-2 rounded border border-gray-700 text-black"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Email:
        </label>
        <motion.input
          className="w-full p-2 rounded border border-gray-700 text-black"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">
          Message:
        </label>
        <motion.textarea
          className="w-full p-2 rounded border border-gray-700 text-black"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
      </div>
      <motion.button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        whileHover={{ scale: 1.1 }}
      >
        Send
      </motion.button>
    </form>
  );
};

export default ContactForm;