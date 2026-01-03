'use client';

import { useEffect, useState } from 'react';

export default function HackerBackground() {
  const [columns, setColumns] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    // Hacker-themed text snippets
    const hackerText = [
      'npm install',
      'git push origin',
      'sudo rm -rf',
      'console.log()',
      'const x = () =>',
      'if (true) {',
      'return false;',
      'async await',
      'try { catch }',
      'import React',
      '404 NOT FOUND',
      'ACCESS GRANTED',
      'COMPILING...',
      'BUILD SUCCESS',
      'ERROR: null',
      '127.0.0.1',
      'localhost:3000',
      'fetch("/api")',
      'npm run dev',
      'git commit -m',
      '01010101',
      '11001100',
      '10101010',
      'function()',
      'class Main {',
      'export default',
      'useState()',
      'useEffect()',
      '// TODO:',
      '/* DEBUG */',
      'CTRL+C',
      'CTRL+V',
      'Stack Overflow',
      'undefined',
      'null pointer',
      'segfault',
      'memory leak',
      'infinite loop',
    ];
    
    const columnCount = Math.floor(window.innerWidth / 150);
    
    const newColumns = Array.from({ length: columnCount }, (_, i) => {
      const text = Array.from({ length: 15 }, () => 
        hackerText[Math.floor(Math.random() * hackerText.length)]
      ).join('\n');
      
      const duration = 15 + Math.random() * 25;
      const delay = Math.random() * 8;
      
      return (
        <div
          key={i}
          className="hacker-column"
          style={{
            left: `${i * 150}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        >
          {text}
        </div>
      );
    });
    
    setColumns(newColumns);
  }, []);

  return <div className="hacker-background">{columns}</div>;
}
