import React from "react";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
}

const Project: React.FC<ProjectProps> = ({ title, description, image, tags }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-lg transition-transform"
    >
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-700 text-white text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Project;
