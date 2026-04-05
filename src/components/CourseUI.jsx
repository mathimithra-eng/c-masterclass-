import React, { useState } from 'react';
import { motion } from 'motion/react';

/* ─── Animated Card Wrapper ──────────────────────────────── */
export const AnimCard = ({ children, className = '', delay = 0 }) => {
  const [blown, setBlown] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: '-8%' }}
      transition={{ duration: 0.6, delay, type: 'spring', bounce: 0.3 }}
      animate={blown ? {
        scale: [1, 1.08, 0.95, 1.04, 1],
        rotate: [0, -3, 3, -1, 0],
        y: [0, -16, 4, -6, 0],
      } : {
        y: [0, -5, 0],
        transition: { duration: 3.5 + delay * 0.5, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.3 }
      }}
      whileHover={{ scale: 1.03, y: -8, boxShadow: '0 18px 50px rgba(56,189,248,0.25)', transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.97 }}
      onClick={() => { setBlown(true); setTimeout(() => setBlown(false), 600); }}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
};

/* ─── Reusable UI ──────────────────────────────────────────── */
export const CodeBlock = ({ filename, children }) => (
  <AnimCard className="w-full max-w-5xl">
    <div className="bg-[#0d1117] rounded-3xl overflow-hidden shadow-2xl text-left w-full border border-white/5">
      <div className="bg-[#161b22] px-4 md:px-6 py-3 md:py-4 flex items-center gap-2 border-b border-[#30363d]">
        <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
        <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
        <span className="text-[#8b949e] ml-4 font-mono text-xs md:text-sm">{filename}</span>
      </div>
      <pre className="p-4 md:p-8 text-sm md:text-lg font-mono leading-relaxed overflow-x-auto selection:bg-cyan-500/30">
        <code>{children}</code>
      </pre>
    </div>
  </AnimCard>
);
