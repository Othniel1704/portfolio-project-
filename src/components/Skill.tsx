
import React from "react";
import { motion } from "framer-motion";

interface SkillProps {
  name: string;
}

const Skill: React.FC<SkillProps> = ({ name }) => {
  const animationVariants = {
    hover: {
      scale: 1.1,
      opacity: 0.9,
    },
    rest: {
      scale: 1,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="bg-black text-white p-4 m-2 rounded-lg shadow-md"
      variants={animationVariants}
      whileHover="hover"
    >
      {name}
    </motion.div>
  );
};

export default Skill;