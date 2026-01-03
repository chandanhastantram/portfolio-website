'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Interactive portfolio with creative animations',
      tech: ['Next.js', 'Framer Motion', 'TypeScript'],
      link: '#',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'MegaArts Store',
      description: 'E-commerce platform with AR try-on',
      tech: ['Next.js', 'MongoDB', '3D'],
      link: '#',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging platform',
      tech: ['React', 'Socket.io', 'Express'],
      link: '#',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const skills = [
    'React', 'Next.js', 'TypeScript', 'JavaScript',
    'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB',
    'Git', 'Figma', 'Responsive Design', 'API Integration'
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 relative overflow-hidden">
      
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center">
          <div className="space-y-6">
            <h1 className="text-7xl md:text-9xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Chandan
              </span>
            </h1>
            
            <h2 className="text-3xl md:text-5xl text-gray-400 font-light">
              Frontend Developer
            </h2>
            
            <p className="text-xl text-gray-500 max-w-2xl">
              Creating interactive web experiences with modern technologies.
              Specializing in React, Next.js, and creative animations.
            </p>

            <div className="flex gap-4 pt-8">
              <MagneticButton href="#projects">
                View Projects
              </MagneticButton>
              
              <MagneticButton href="#contact" variant="secondary">
                Get In Touch
              </MagneticButton>
            </div>

            <div className="flex gap-6 pt-8">
              <InteractiveIcon href="https://github.com/chandanhastantram" icon={Github} />
              <InteractiveIcon href="mailto:chandan.hastantram@gmail.com" icon={Mail} />
              <InteractiveIcon href="#" icon={Linkedin} />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h3 className="text-4xl font-bold mb-12">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h3 className="text-4xl font-bold mb-12">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h3 className="text-4xl font-bold mb-8">Let's Work Together</h3>
          <p className="text-xl text-gray-400 mb-8">
            Open to internship opportunities and freelance projects
          </p>
          <a
            href="mailto:chandan.hastantram@gmail.com"
            className="inline-block text-2xl text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            chandan.hastantram@gmail.com
          </a>
        </section>
      </div>
    </main>
  );
}

// Magnetic Button Component
function MagneticButton({ children, href, variant = 'primary' }: { children: React.ReactNode, href: string, variant?: 'primary' | 'secondary' }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.a
      href={href}
      className={`relative px-8 py-4 rounded-lg font-medium overflow-hidden ${
        variant === 'primary'
          ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white'
          : 'border-2 border-cyan-400 text-cyan-400'
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="relative z-10"
        animate={{ scale: isHovered ? 1.05 : 1 }}
      >
        {children}
      </motion.span>
      {variant === 'secondary' && (
        <motion.div
          className="absolute inset-0 bg-cyan-400"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ originX: 0.5, originY: 0.5 }}
        />
      )}
    </motion.a>
  );
}

// Interactive Icon Component
function InteractiveIcon({ href, icon: Icon }: { href: string, icon: any }) {
  return (
    <motion.a
      href={href}
      className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-cyan-400 transition-colors"
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Icon size={20} />
    </motion.a>
  );
}

// Skill Tag Component
function SkillTag({ skill }: { skill: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="px-4 py-2 rounded-full border border-gray-700 cursor-pointer relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{skill}</span>
    </motion.div>
  );
}

// 3D Project Card Component
function ProjectCard({ project }: { project: any }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="relative p-6 rounded-2xl bg-slate-900/50 backdrop-blur border border-gray-800 hover:border-cyan-400/50 transition-all cursor-pointer"
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
      
      <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
      <p className="text-gray-400 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech: string, i: number) => (
          <span key={i} className="text-xs px-2 py-1 rounded bg-slate-800 text-gray-400">
            {tech}
          </span>
        ))}
      </div>
      
      <motion.a
        href={project.link}
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
        whileHover={{ x: 5 }}
      >
        <span>View Project</span>
        <ExternalLink size={16} />
      </motion.a>
    </motion.div>
  );
}
