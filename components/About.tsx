'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Coffee, Bug, GitBranch } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code Enthusiast',
      description: 'My code is so clean, even Marie Kondo would approve. (After I remove the 47 console.logs)',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Caffeine-Powered',
      description: 'Fueled by coffee, Stack Overflow, and sheer panic. Mostly panic.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: 'Bug Exterminator',
      description: 'I don\'t write bugs, I write "surprise features". Then spend 3 hours fixing them at 2 AM.',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'Git Wizard',
      description: 'My commits: "asdfgh", "fixed", "PLEASE WORK", "I hate everything", "final final FINAL v2"',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20" ref={ref}>
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Professional code monkey who occasionally remembers to commit before force pushing to main.
            <br/>
            <span style={{fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--slate-light)'}}>
              Expert in React, Next.js, and Googling "how to center a div" for the 1000th time.
            </span>
          </p>
          <p className="text-md mt-4" style={{color: 'var(--accent-teal)', fontStyle: 'italic'}}>
            "It's not a bug, it's an undocumented feature that I'll fix after lunch... maybe tomorrow." - Me, daily
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass p-6 rounded-2xl hover-lift group cursor-pointer"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p style={{color: 'var(--slate-light)'}}>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center glass p-6 rounded-xl"
          style={{border: '1px solid var(--primary-blue)'}}
        >
          <p style={{color: 'var(--text-secondary)', fontSize: '0.95rem'}}>
            <strong style={{color: 'var(--primary-blue)'}}>Fun Facts:</strong>
            <br/>
            • 90% of my code is copied from Stack Overflow. The other 10% is from GitHub Copilot.
            <br/>
            • I've spent more time naming variables than my parents spent naming me.
            <br/>
            • My rubber duck has heard things that would make senior developers cry.
            <br/>
            • I once fixed a bug by adding a random semicolon. Still don't know why it worked.
            <br/>
            <span style={{color: 'var(--accent-gold)'}}>
              • "Works on my machine" is my favorite deployment strategy. ✨
            </span>
          </p>
          <p style={{color: 'var(--slate-light)', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '1rem'}}>
            P.S. - If you're reading this, you're probably a developer too. We both know the code is held together by duct tape and prayers. 🙏
          </p>
        </motion.div>
      </div>
    </section>
  );
}

