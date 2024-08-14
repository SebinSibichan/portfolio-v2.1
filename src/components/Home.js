
// components/Home.js
import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center"
    >
      <motion.h1 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm Sebin Sibichan..
      </motion.h1>
      <motion.h2 
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
        className="text-3xl mb-6"
      >
        Freelance Software Engineer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-xl max-w-2xl mx-auto"
      >
        Welcome to my portfolio. I specialize in creating efficient and scalable software solutions.
      </motion.p>
    </motion.div>
  );
}

export default Home;