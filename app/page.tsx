'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticlesBackground />
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.div>
      
      <footer className="py-8 text-center border-t border-white/10">
        <p className="text-gray-400">
          © 2026 Chandan Hastantram. Built with Next.js & Framer Motion
        </p>
      </footer>
    </main>
  );
}
