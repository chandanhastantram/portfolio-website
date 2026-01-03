'use client';

import { useEffect, useState } from 'react';

export default function MatrixRain() {
  const [columns, setColumns] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columnCount = Math.floor(window.innerWidth / 20);
    
    const newColumns = Array.from({ length: columnCount }, (_, i) => {
      const text = Array.from({ length: 30 }, () => 
        chars[Math.floor(Math.random() * chars.length)]
      ).join('\n');
      
      const duration = 10 + Math.random() * 20;
      const delay = Math.random() * 5;
      
      return (
        <div
          key={i}
          className="matrix-column"
          style={{
            left: `${i * 20}px`,
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

  return <div className="matrix-rain">{columns}</div>;
}
