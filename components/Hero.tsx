'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="glass px-6 py-2 rounded-full text-sm inline-block" style={{
            color: 'var(--primary-blue)', 
            border: '1px solid var(--primary-blue)'
          }}>
            // TODO: Add better welcome message
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
        >
          Chandan Hastantram
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl mb-4"
          style={{color: 'var(--text-secondary)'}}
        >
          Full-Stack Developer & Professional Googler
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg mb-4 max-w-2xl mx-auto"
          style={{color: 'var(--slate-light)'}}
        >
          I turn ☕ into code, Stack Overflow into solutions, and bugs into "features".
          <br/>
          <span style={{fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--accent-teal)'}}>
            // Works on my machine ¯\_(ツ)_/¯
          </span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="glass p-4 rounded-lg mb-6 max-w-2xl mx-auto text-left"
          style={{border: '1px solid var(--primary-blue)'}}
        >
          <pre style={{color: 'var(--text-secondary)', fontSize: '0.85rem', fontFamily: 'monospace'}}>
{`const me = {
  name: "Chandan",
  location: "Localhost:3000",
  skills: ["React", "Next.js", "TypeScript", "Ctrl+C/Ctrl+V"],
  hobbies: ["Debugging", "More debugging", "Googling error messages"],
  superpower: "Turning 'undefined is not a function' into working code",
  weakness: "CSS centering (still Googling after 5 years)",
  motto: "If it compiles, ship it 🚀",
  gitStatus: "500+ uncommitted changes",
  favoriteError: "Cannot read property of undefined",
  coffeeConsumed: Infinity
};

// Note: This code is self-documenting (translation: I'm too lazy to write docs)`}
          </pre>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-sm mb-8"
          style={{color: 'var(--slate-light)', fontStyle: 'italic'}}
        >
          ⚠️ Warning: May contain traces of spaghetti code and excessive console.logs
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-lg font-semibold"
            style={{
              background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-teal))',
              color: '#fff'
            }}
          >
            View Projects (They Actually Work!)
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-8 py-3 rounded-lg inline-block font-semibold"
            style={{
              border: '2px solid var(--primary-blue)',
              color: 'var(--primary-blue)'
            }}
          >
            Hire Me (I Promise Less Bugs)
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 mx-auto" style={{color: 'var(--primary-blue)'}} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}


