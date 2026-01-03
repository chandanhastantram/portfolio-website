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
      title: 'Clean Code',
      description: 'I write code so clean, even my linter has nothing to complain about. Usually.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Caffeine-Driven',
      description: 'Powered by coffee and Stack Overflow. Mostly Stack Overflow.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: 'Bug Whisperer',
      description: 'I don\'t create bugs, I create "undocumented features". Then I fix them.',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'Git Master',
      description: 'My commit messages: "Fixed bug", "Fixed another bug", "Why did I do this?"',
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
            Full-stack developer who occasionally remembers to commit before switching branches.
            <br/>
            <span style={{fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--slate-light)'}}>
              Specializing in React, Next.js, and pretending I understand CSS Grid on the first try.
            </span>
          </p>
          <p className="text-md mt-4" style={{color: 'var(--accent-teal)', fontStyle: 'italic'}}>
            "It's not a bug, it's a feature request from the future." - Me, probably
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
            <strong style={{color: 'var(--primary-blue)'}}>Fun Fact:</strong> I've spent more time naming variables than actually coding.
            <br/>
            Also, I promise my code is better than my commit messages. 
            <span style={{color: 'var(--accent-gold)'}}> (Probably.)</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

