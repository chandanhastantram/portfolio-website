'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: 'from-cyan-500 to-blue-500' },
        { name: 'Next.js', level: 90, color: 'from-emerald-500 to-teal-500' },
        { name: 'TypeScript', level: 85, color: 'from-blue-500 to-indigo-500' },
        { name: 'Tailwind CSS', level: 95, color: 'from-cyan-400 to-blue-400' },
      ],
    },
    {
      category: 'Animation & Design',
      skills: [
        { name: 'Framer Motion', level: 90, color: 'from-pink-500 to-rose-500' },
        { name: 'GSAP', level: 80, color: 'from-green-500 to-emerald-500' },
        { name: 'Figma', level: 85, color: 'from-orange-500 to-red-500' },
        { name: 'CSS Animations', level: 90, color: 'from-yellow-500 to-orange-500' },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, color: 'from-red-500 to-orange-500' },
        { name: 'Vercel', level: 85, color: 'from-gray-600 to-gray-500' },
        { name: 'MongoDB', level: 75, color: 'from-green-600 to-emerald-600' },
        { name: 'Node.js', level: 80, color: 'from-lime-500 to-green-500' },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20" ref={ref}>
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">Skills & Technologies</h2>
          <p className="text-xl text-gray-300">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.2 + index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 rounded-full animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
