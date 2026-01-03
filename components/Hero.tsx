'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Terminal, Code2 } from 'lucide-react';

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
          <span className="glass px-6 py-2 rounded-full text-sm inline-block" style={{color: 'var(--neon-blue)', borderColor: 'var(--neon-blue)', border: '1px solid'}}>
            <Terminal className="inline w-4 h-4 mr-2" />
            $ whoami
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6 neon-glow"
          style={{
            background: 'linear-gradient(135deg, var(--neon-blue), var(--electric-purple), var(--hot-pink))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Chandan Hastantram
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl mb-4"
          style={{color: 'var(--acid-green)'}}
        >
          <Code2 className="inline w-8 h-8 mr-2" />
          Full-Stack Code Architect | React Wizard
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="code-block mb-12 max-w-2xl mx-auto text-left"
        >
          <pre style={{color: 'var(--neon-blue)', fontSize: '0.9rem'}}>
{`const developer = {
  name: "Chandan",
  stack: ["React", "Next.js", "TypeScript"],
  passion: "Building pixel-perfect UIs",
  currentlyLearning: "WebGL & 3D Graphics",
  motto: "Ship fast, iterate faster"
};`}
          </pre>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px var(--neon-blue)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-lg font-bold"
            style={{
              background: 'linear-gradient(135deg, var(--neon-blue), var(--electric-purple))',
              color: '#000',
              border: '2px solid var(--neon-blue)'
            }}
          >
            View Projects
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: 'var(--hot-pink)' }}
            whileTap={{ scale: 0.95 }}
            className="glass px-8 py-3 rounded-lg inline-block"
            style={{
              border: '2px solid var(--electric-purple)',
              color: 'var(--electric-purple)'
            }}
          >
            Let's Connect
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
            <ChevronDown className="w-8 h-8 mx-auto" style={{color: 'var(--neon-blue)'}} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

