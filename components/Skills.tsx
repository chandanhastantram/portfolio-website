'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20" ref={ref}>
      <div className="max-w-4xl w-full">
        {/* File Tab */}
        <motion.div
          initial={{ opacity: 0, y: 20 }
          animate={isInView ? { opacity: 1, y: 0 } : {}
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
          }>
            📦 package.json
          </div>
        </motion.div>

        {/* Package.json Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }
          animate={isInView ? { opacity: 1, y: 0 } : {}
          transition={{ delay: 0.2 }
          className="code-block"
          style={{ paddingTop: '3rem' }
        >
          <pre style={{ fontSize: '0.9rem', lineHeight: '1.8' }>
            <code>
              {'{'}<br/>
              {'  '}<span className="variable">"name"</span>: <span className="string">"chandan-hastantram"</span>,<br/>
              {'  '}<span className="variable">"version"</span>: <span className="string">"2.0.0"</span>,<br/>
              {'  '}<span className="variable">"description"</span>: <span className="string">"A developer who turns coffee into code"</span>,<br/>
              {'  '}<span className="variable">"main"</span>: <span className="string">"brain.js"</span>,<br/>
              {'  '}<span className="variable">"author"</span>: <span className="string">"Chandan Hastantram \u003cchandan@localhost\u003e"</span>,<br/>
              {'  '}<span className="variable">"license"</span>: <span className="string">"MIT"</span>,<br/>
              <br/>
              {'  '}<span className="variable">"dependencies"</span>: {'{'}<br/>
              {'    '}<span className="string">"react"</span>: <span className="string">"^18.0.0"</span>,<br/>
              {'    '}<span className="string">"next.js"</span>: <span className="string">"^14.0.0"</span>,<br/>
              {'    '}<span className="string">"typescript"</span>: <span className="string">"^5.0.0"</span>,<br/>
              {'    '}<span className="string">"framer-motion"</span>: <span className="string">"^10.0.0"</span>,<br/>
              {'    '}<span className="string">"tailwindcss"</span>: <span className="string">"^3.0.0"</span>,<br/>
              {'    '}<span className="string">"node.js"</span>: <span className="string">"^20.0.0"</span>,<br/>
              {'    '}<span className="string">"express"</span>: <span className="string">"^4.18.0"</span>,<br/>
              {'    '}<span className="string">"mongodb"</span>: <span className="string">"^6.0.0"</span>,<br/>
              {'    '}<span className="string">"coffee"</span>: <span className="string">"∞"</span>,<br/>
              {'    '}<span className="string">"stack-overflow"</span>: <span className="string">"*"</span><br/>
              {'  }{'},'},<br/>
              <br/>
              {'  '}<span className="variable">"devDependencies"</span>: {'{'}<br/>
              {'    '}<span className="string">"console.log"</span>: <span className="string">"^999.0.0"</span>,<br/>
              {'    '}<span className="string">"ctrl-c-ctrl-v"</span>: <span className="string">"latest"</span>,<br/>
              {'    '}<span className="string">"rubber-duck"</span>: <span className="string">"^1.0.0"</span>,<br/>
              {'    '}<span className="string">"imposter-syndrome"</span>: <span className="string">"always"</span><br/>
              {'  }{'},'},<br/>
              <br/>
              {'  '}<span className="variable">"scripts"</span>: {'{'}<br/>
              {'    '}<span className="string">"start"</span>: <span className="string">"npm run panic"</span>,<br/>
              {'    '}<span className="string">"build"</span>: <span className="string">"pray \u0026\u0026 npm run build"</span>,<br/>
              {'    '}<span className="string">"test"</span>: <span className="string">"echo 'Tests? What tests?' \u0026\u0026 exit 0"</span>,<br/>
              {'    '}<span className="string">"debug"</span>: <span className="string">"console.log('everything')"</span>,<br/>
              {'    '}<span className="string">"deploy"</span>: <span className="string">"git push \u0026\u0026 hope"</span><br/>
              {'  }{'},'},<br/>
              <br/>
              {'  '}<span className="variable">"keywords"</span>: [<br/>
              {'    '}<span className="string">"full-stack"</span>,<br/>
              {'    '}<span className="string">"developer"</span>,<br/>
              {'    '}<span className="string">"bug-creator"</span>,<br/>
              {'    '}<span className="string">"bug-fixer"</span>,<br/>
              {'    '}<span className="string">"coffee-addict"</span>,<br/>
              {'    '}<span className="string">"stackoverflow-expert"</span><br/>
              {'  '}],<br/>
              <br/>
              {'  '}<span className="variable">"repository"</span>: {'{'}<br/>
              {'    '}<span className="variable">"type"</span>: <span className="string">"git"</span>,<br/>
              {'    '}<span className="variable">"url"</span>: <span className="string">"https://github.com/chandanhastantram"</span><br/>
              {'  }{'},'},<br/>
              <br/>
              {'  '}<span className="variable">"bugs"</span>: {'{'}<br/>
              {'    '}<span className="variable">"url"</span>: <span className="string">"https://github.com/chandanhastantram/issues"</span>,<br/>
              {'    '}<span className="variable">"note"</span>: <span className="string">"They're not bugs, they're features"</span><br/>
              {'  }'}<br/>
              {'}'}
            </code>
          </pre>
        </motion.div>

        {/* NPM Install Animation */}
        <motion.div
          initial={{ opacity: 0 }
          animate={isInView ? { opacity: 1 } : {}
          transition={{ delay: 0.5 }
          className="mt-6 terminal-window p-4"
          style={{ background: 'var(--editor-bg)' }
        >
          <div style={{ color: 'var(--code-green)', fontSize: '0.9rem' }>
            <div>$ npm install</div>
            <div style={{ color: 'var(--line-number)', marginTop: '8px' }>
              ⠋ Installing dependencies...<br/>
              ✓ coffee@∞ installed<br/>
              ✓ stack-overflow@* installed<br/>
              ✓ All 47 packages installed successfully!<br/>
              <br/>
              <span style={{ color: 'var(--code-yellow)' }>⚠ Warning: 127 vulnerabilities found (all ignored)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
