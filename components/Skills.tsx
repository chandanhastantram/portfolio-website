'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const packageJson = `{
  <span class="variable">"name"</span>: <span class="string">"chandan-hastantram"</span>,
  <span class="variable">"version"</span>: <span class="string">"2.0.0"</span>,
  <span class="variable">"description"</span>: <span class="string">"A developer who turns coffee into code"</span>,
  
  <span class="variable">"dependencies"</span>: {
    <span class="string">"react"</span>: <span class="string">"^18.0.0"</span>,
    <span class="string">"next.js"</span>: <span class="string">"^14.0.0"</span>,
    <span class="string">"typescript"</span>: <span class="string">"^5.0.0"</span>,
    <span class="string">"coffee"</span>: <span class="string">"∞"</span>,
    <span class="string">"stack-overflow"</span>: <span class="string">"*"</span>
  },
  
  <span class="variable">"devDependencies"</span>: {
    <span class="string">"console.log"</span>: <span class="string">"^999.0.0"</span>,
    <span class="string">"ctrl-c-ctrl-v"</span>: <span class="string">"latest"</span>,
    <span class="string">"imposter-syndrome"</span>: <span class="string">"always"</span>
  },
  
  <span class="variable">"scripts"</span>: {
    <span class="string">"start"</span>: <span class="string">"npm run panic"</span>,
    <span class="string">"build"</span>: <span class="string">"pray && npm run build"</span>,
    <span class="string">"test"</span>: <span class="string">"echo 'Tests? What tests?'"</span>,
    <span class="string">"deploy"</span>: <span class="string">"git push && hope"</span>
  }
}`;

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20" ref={ref}>
      <div className="max-w-4xl w-full">
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
            color: 'var(--code-green)'
          }}>
            📦 package.json
          </div>
        </motion.div>

        {/* Package.json Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="code-block"
          style={{ paddingTop: '3rem' }}
        >
          <pre style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
            <code dangerouslySetInnerHTML={{ __html: packageJson }} />
          </pre>
        </motion.div>

        {/* NPM Install Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-6 terminal-window p-4"
          style={{ background: 'var(--editor-bg)' }}
        >
          <div style={{ color: 'var(--code-green)', fontSize: '0.9rem' }}>
            <div>$ npm install</div>
            <div style={{ color: 'var(--line-number)', marginTop: '8px' }}>
              ⠋ Installing dependencies...<br/>
              ✓ coffee@∞ installed<br/>
              ✓ stack-overflow@* installed<br/>
              ✓ All 47 packages installed successfully!<br/>
              <br/>
              <span style={{ color: 'var(--code-yellow)' }}>⚠ Warning: 127 vulnerabilities found (all ignored)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
