import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  imageSrc: string;
}

const Cardsss: React.FC<CardProps> = ({ title, imageSrc }) => {
  return (
    <motion.div
      className='bg-white shadow-md rounded-lg overflow-hidden w-96 h-96 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 m-4 flex flex-col justify-end'
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img className='w-full h-3/5 object-cover' src={imageSrc} alt={title} />
      <div className='bg-white w-full h-2/5 p-6 flex flex-col'>
        <h3 className='font-medium text-gray-900 text-lg'>{title}</h3>
      </div>
    </motion.div>
  );
};

export default Cardsss;
