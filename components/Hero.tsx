'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [commandIndex, setCommandIndex] = useState(0);
  
  const commands = [
    '$ cd /home/chandan',
    '$ whoami',
    '> Full-Stack Developer | Professional Bug Creator',
    '$ cat skills.json',
    '> { "react": "expert", "coffee": "∞", "bugs": "features" }',
    '$ ls projects/',
    '> college-erp-system  megaarts-store  portfolio',
    '$ echo "Let\'s build something amazing"',
    '> Let\'s build something amazing ✨'
  ];

  useEffect(() => {
    if (commandIndex < commands.length) {
      const currentCommand = commands[commandIndex];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex < currentCommand.length) {
          setText(prev => prev + currentCommand[charIndex]);
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setText(prev => prev + '\n');
            setCommandIndex(prev => prev + 1);
          }, 500);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [commandIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        {/* ASCII Art Logo */}
        <motion.pre
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 text-xs md:text-sm"
          style={{ color: 'var(--code-cyan)', lineHeight: '1.2' }}
        >
{`
   ██████╗██╗  ██╗ █████╗ ███╗   ██╗██████╗  █████╗ ███╗   ██╗
  ██╔════╝██║  ██║██╔══██╗████╗  ██║██╔══██╗██╔══██╗████╗  ██║
  ██║     ███████║███████║██╔██╗ ██║██║  ██║███████║██╔██╗ ██║
  ██║     ██╔══██║██╔══██║██║╚██╗██║██║  ██║██╔══██║██║╚██╗██║
  ╚██████╗██║  ██║██║  ██║██║ ╚████║██████╔╝██║  ██║██║ ╚████║
   ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝
`}
        </motion.pre>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="terminal-window"
        >
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-button close"></div>
            <div className="terminal-button minimize"></div>
            <div className="terminal-button maximize"></div>
            <span style={{ marginLeft: '10px', fontSize: '12px', color: '#888' }}>
              chandan@developer: ~/portfolio
            </span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm md:text-base">
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              {text}
              <span className="cursor"></span>
            </pre>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-4 justify-center mt-8 flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg font-mono text-sm"
            style={{
              background: 'var(--editor-bg)',
              border: '2px solid var(--code-green)',
              color: 'var(--code-green)'
            }}
          >
            $ cd projects/
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(97, 175, 239, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg font-mono text-sm"
            style={{
              background: 'var(--editor-bg)',
              border: '2px solid var(--code-blue)',
              color: 'var(--code-blue)'
            }}
          >
            $ cat contact.md
          </motion.a>
        </motion.div>

        {/* Easter Egg Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-8 text-xs"
          style={{ color: 'var(--line-number)', fontStyle: 'italic' }}
        >
          // Hint: Try typing "vim" in the console 😏
        </motion.p>
      </div>
    </section>
  );
}
