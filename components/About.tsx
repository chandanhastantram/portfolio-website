'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
            <code>
              <span className="comment">/**</span><br/>
              <span className="comment"> * @file developer.js</span><br/>
              <span className="comment"> * @description A self-documenting developer profile</span><br/>
              <span className="comment"> * @author Chandan Hastantram</span><br/>
              <span className="comment"> * @version 2.0.0 (Still has bugs from v1.0)</span><br/>
              <span className="comment"> */</span><br/>
              <br/>
              <span className="keyword">class</span> <span className="function">Developer</span> {'{'}<br/>
              {'  '}<span className="function">constructor</span>() {'{'}<br/>
              {'    '}<span className="keyword">this</span>.name = <span className="string">"Chandan Hastantram"</span>;<br/>
              {'    '}<span className="keyword">this</span>.location = <span className="string">"localhost:3000"</span>;<br/>
              {'    '}<span className="keyword">this</span>.currentStatus = <span className="string">"Debugging life, one console.log at a time"</span>;<br/>
              {'  }'}}<br/>
              <br/>
              {'  '}<span className="comment">// Core competencies (aka things I Google daily)</span><br/>
              {'  '}<span className="function">getSkills</span>() {'{'}<br/>
              {'    '}<span className="keyword">return</span> {'{'}<br/>
              {'      '}languages: [<span className="string">"JavaScript"</span>, <span className="string">"TypeScript"</span>, <span className="string">"Python"</span>, <span className="string">"Sarcasm"</span>],<br/>
              {'      '}frontend: [<span className="string">"React"</span>, <span className="string">"Next.js"</span>, <span className="string">"Framer Motion"</span>],<br/>
              {'      '}backend: [<span className="string">"Node.js"</span>, <span className="string">"Express"</span>, <span className="string">"MongoDB"</span>],<br/>
              {'      '}tools: [<span className="string">"Git"</span>, <span className="string">"VS Code"</span>, <span className="string">"Stack Overflow"</span>, <span className="string">"Coffee Machine"</span>],<br/>
              {'      '}debugging: <span className="string">"console.log() // Don't @ me"</span><br/>
              {'    '}{'};'}<br/>
              {'  }'}}<br/>
              <br/>
              {'  '}<span className="comment">// Daily routine (100% accurate)</span><br/>
              {'  '}<span className="keyword">async</span> <span className="function">workDay</span>() {'{'}<br/>
              {'    '}<span className="keyword">await</span> <span className="keyword">this</span>.<span className="function">drinkCoffee</span>();<br/>
              {'    '}<span className="keyword">await</span> <span className="keyword">this</span>.<span className="function">writeCode</span>();<br/>
              {'    '}<span className="keyword">await</span> <span className="keyword">this</span>.<span className="function">createBugs</span>();<br/>
              {'    '}<span className="keyword">await</span> <span className="keyword">this</span>.<span className="function">fixBugs</span>(); <span className="comment">// Sometimes</span><br/>
              {'    '}<span className="keyword">await</span> <span className="keyword">this</span>.<span className="function">pushToProduction</span>(); <span className="comment">// YOLO</span><br/>
              {'    '}<span className="keyword">return</span> <span className="string">"It works on my machine ¯\\_(ツ)_/¯"</span>;<br/>
              {'  }'}}<br/>
              <br/>
              {'  '}<span className="comment">// Git commit messages (real ones)</span><br/>
              {'  '}<span className="function">getCommitHistory</span>() {'{'}<br/>
              {'    '}<span className="keyword">return</span> [<br/>
              {'      '}<span className="string">"Initial commit"</span>,<br/>
              {'      '}<span className="string">"Added stuff"</span>,<br/>
              {'      '}<span className="string">"Fixed bug"</span>,<br/>
              {'      '}<span className="string">"Fixed another bug"</span>,<br/>
              {'      '}<span className="string">"PLEASE WORK"</span>,<br/>
              {'      '}<span className="string">"I hate everything"</span>,<br/>
              {'      '}<span className="string">"Final commit"</span>,<br/>
              {'      '}<span className="string">"Final commit (for real this time)"</span>,<br/>
              {'      '}<span className="string">"asdfghjkl"</span><br/>
              {'    '}];<br/>
              {'  }'}<br/>
              {'}'}<br/>
              <br/>
              <span className="comment">// Export the chaos</span><br/>
              <span className="keyword">export default</span> <span className="keyword">new</span> <span className="function">Developer</span>();<br/>
              <br/>
              <span className="comment">// TODO: Write better documentation</span><br/>
              <span className="comment">// TODO: Remove all console.logs before production</span><br/>
              <span className="comment">// TODO: Actually do the TODOs</span>
            </code>
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
