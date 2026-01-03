'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern online store with cart, checkout, and product management',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-cyan-500 to-blue-600',
      demo: '#',
      github: '#',
    },
    {
      title: 'Real-Time Chat App',
      description: 'Instant messaging with WebSocket, typing indicators, and status',
      tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
      gradient: 'from-emerald-500 to-teal-600',
      demo: '#',
      github: '#',
    },
    {
      title: 'Task Dashboard',
      description: 'Kanban-style task manager with drag-and-drop functionality',
      tags: ['React', 'TypeScript', 'DnD', 'Tailwind'],
      gradient: 'from-orange-500 to-red-600',
      demo: '#',
      github: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather app with charts and location search',
      tags: ['React', 'API', 'Chart.js', 'Tailwind'],
      gradient: 'from-blue-500 to-indigo-600',
      demo: '#',
      github: '#',
    },
    {
      title: 'MegaArts Store',
      description: 'Full-stack e-commerce platform for art accessories with AR try-on',
      tags: ['Next.js', 'MongoDB', 'Cloudinary', '3D'],
      gradient: 'from-pink-500 to-rose-600',
      demo: '#',
      github: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'This website! Built with modern animations and effects',
      tags: ['Next.js', 'Framer Motion', 'TypeScript'],
      gradient: 'from-green-500 to-emerald-600',
      demo: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20" ref={ref}>
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-gray-300">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="glass rounded-2xl overflow-hidden hover-lift cursor-pointer group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 5 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <div className="text-8xl opacity-20">🚀</div>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700 rounded-full text-sm text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
