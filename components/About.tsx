'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const developerCode = `<span class="comment">/**
 * @file developer.js
 * @description A self-documenting developer profile
 * @author Chandan Hastantram
 * @version 2.0.0 (Still has bugs from v1.0)
 */</span>

<span class="keyword">class</span> <span class="function">Developer</span> {
  <span class="function">constructor</span>() {
    <span class="keyword">this</span>.name = <span class="string">"Chandan Hastantram"</span>;
    <span class="keyword">this</span>.location = <span class="string">"localhost:3000"</span>;
    <span class="keyword">this</span>.currentStatus = <span class="string">"Debugging life, one console.log at a time"</span>;
  }

  <span class="comment">// Core competencies (aka things I Google daily)</span>
  <span class="function">getSkills</span>() {
    <span class="keyword">return</span> {
      languages: [<span class="string">"JavaScript"</span>, <span class="string">"TypeScript"</span>, <span class="string">"Python"</span>, <span class="string">"Sarcasm"</span>],
      frontend: [<span class="string">"React"</span>, <span class="string">"Next.js"</span>, <span class="string">"Framer Motion"</span>],
      backend: [<span class="string">"Node.js"</span>, <span class="string">"Express"</span>, <span class="string">"MongoDB"</span>],
      tools: [<span class="string">"Git"</span>, <span class="string">"VS Code"</span>, <span class="string">"Stack Overflow"</span>, <span class="string">"Coffee Machine"</span>],
      debugging: <span class="string">"console.log() // Don't @ me"</span>
    };
  }

  <span class="comment">// Daily routine (100% accurate)</span>
  <span class="keyword">async</span> <span class="function">workDay</span>() {
    <span class="keyword">await</span> <span class="keyword">this</span>.<span class="function">drinkCoffee</span>();
    <span class="keyword">await</span> <span class="keyword">this</span>.<span class="function">writeCode</span>();
    <span class="keyword">await</span> <span class="keyword">this</span>.<span class="function">createBugs</span>();
    <span class="keyword">await</span> <span class="keyword">this</span>.<span class="function">fixBugs</span>(); <span class="comment">// Sometimes</span>
    <span class="keyword">await</span> <span class="keyword">this</span>.<span class="function">pushToProduction</span>(); <span class="comment">// YOLO</span>
    <span class="keyword">return</span> <span class="string">"It works on my machine ¯\\_(ツ)_/¯"</span>;
  }

  <span class="comment">// Git commit messages (real ones)</span>
  <span class="function">getCommitHistory</span>() {
    <span class="keyword">return</span> [
      <span class="string">"Initial commit"</span>,
      <span class="string">"Added stuff"</span>,
      <span class="string">"Fixed bug"</span>,
      <span class="string">"PLEASE WORK"</span>,
      <span class="string">"I hate everything"</span>,
      <span class="string">"Final commit (for real this time)"</span>,
      <span class="string">"asdfghjkl"</span>
    ];
  }
}

<span class="comment">// Export the chaos</span>
<span class="keyword">export default new</span> <span class="function">Developer</span>();

<span class="comment">// TODO: Write better documentation</span>
<span class="comment">// TODO: Remove all console.logs before production</span>
<span class="comment">// TODO: Actually do the TODOs</span>`;

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20" ref={ref}>
      <div className="max-w-6xl w-full">
        {/* File Tab */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex gap-2 mb-0"
        >
          <div style={{
            background: 'var(--editor-bg)',
            padding: '8px 16px',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            border: '1px solid #333',
            borderBottom: 'none',
            fontSize: '14px',
            color: 'var(--code-cyan)'
          }}>
            📄 developer.js
          </div>
        </motion.div>

        {/* Code Editor Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="code-block"
          style={{ paddingTop: '3rem' }}
        >
          <pre style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            <code dangerouslySetInnerHTML={{ __html: developerCode }} />
          </pre>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Coffee Consumed', value: '∞ cups' },
            { label: 'Bugs Created', value: '404 (not found)' },
            { label: 'Stack Overflow Visits', value: 'Daily' },
            { label: 'Code Quality', value: 'It compiles!' }
          ].map((stat, i) => (
            <div
              key={i}
              className="terminal-window p-4 text-center"
              style={{ background: 'var(--editor-bg)' }}
            >
              <div style={{ color: 'var(--code-yellow)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                {stat.value}
              </div>
              <div style={{ color: 'var(--line-number)', fontSize: '0.85rem', marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
