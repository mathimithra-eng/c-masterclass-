import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const SlideItem = ({ children, className = '', delay = 0 }) => {
  const [blown, setBlown] = useState(false);

  const handleClick = () => {
    setBlown(true);
    setTimeout(() => setBlown(false), 700);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 55, scale: 0.91, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: false, margin: '-10%' }}
      transition={{ duration: 0.75, delay, type: 'spring', bounce: 0.38 }}
      animate={
        blown
          ? {
            scale: [1, 1.10, 0.93, 1.05, 1],
            rotate: [0, -4, 4, -1.5, 0],
            y: [0, -22, 6, -9, 0],
            transition: { duration: 0.6, ease: 'easeInOut' }
          }
          : {}
      }
      whileHover={{
        scale: 1.035,
        y: -11,
        boxShadow: '0 22px 64px rgba(99,160,255,0.20)',
        transition: { duration: 0.22, ease: 'easeOut' },
      }}
      whileTap={{
        scale: 0.96,
        transition: { duration: 0.1 },
      }}
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function Slide({ children, className = '', id, style }) {
  return (
    <section
      id={id}
      style={{ minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      className={`p-4 sm:p-8 md:p-12 lg:p-24 relative overflow-hidden ${className}`}
    >
      {/* CodingBoss Logo Watermark - Top Right */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          zIndex: 50,
          background: 'rgba(20,20,20,0.55)',
          borderRadius: '8px',
          padding: '4px 7px 3px 7px',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(245,160,0,0.18)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
        }}
        className="sm:top-3.5 sm:right-4.5 sm:p-1.5 sm:gap-1"
      >
        <img
          src="/logo.png"
          alt="CodingBoss Logo"
          style={{ width: '24px', height: '24px', objectFit: 'contain', display: 'block' }}
          className="sm:w-8 sm:h-8"
        />
        <span
          style={{
            fontSize: '8px',
            fontWeight: '700',
            letterSpacing: '0.08em',
            background: 'linear-gradient(90deg, #f5a000 0%, #e07b00 60%, #3a3a3a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
          }}
          className="sm:text-[9px]"
        >
          Coding Boss
        </span>
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        {children}
      </div>
    </section>
  );
}
