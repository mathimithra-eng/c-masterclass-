import React from 'react';
import { motion } from 'motion/react';
import Slide, { SlideItem } from '../../components/Slide';

export default function FinalCongrats({ onRestart }) {
  return (
    <>
      {/* SLIDE 21 · STRINGS (Placeholder) */}
      <div className="slide-section invisible h-0 overflow-hidden">
        {/* Placeholder for Slide 21 strings if needed later */}
      </div>

      {/* SLIDE 22 · FINAL */}
      <div className="slide-section">
        <Slide>
          <SlideItem>
            <motion.div animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="mb-6 flex items-center justify-center">
              <svg width="120" height="120" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.5))' }}>
                <path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z" />
                <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z" />
                <path fill="#ebf1f5" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z" />
              </svg>
            </motion.div>
          </SlideItem>
          <SlideItem delay={0.2}>
            <h2 className="text-6xl md:text-8xl font-black text-blue-400 mb-6 tracking-tight drop-shadow-lg">Congratulations!</h2>
          </SlideItem>
          <SlideItem delay={0.3}>
            <p className="text-2xl text-blue-100 font-medium max-w-3xl mb-8 leading-relaxed">
              You've mastered <strong className="text-blue-400 font-bold">22 C programming topics</strong> — from Hello World to Recursion! You now speak the language of operating systems! 🚀
            </p>
          </SlideItem>
          <SlideItem delay={0.4}>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Variables ✓', 'Pointers ✓', 'Arrays ✓', 'Strings ✓', 'Functions ✓', 'Structs ✓', 'Memory ✓', 'Files ✓', 'Recursion ✓'].map(b => (
                <motion.span key={b} whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 bg-blue-800/60 text-blue-200 backdrop-blur-md rounded-full font-bold text-sm border border-blue-400/30 cursor-pointer">
                  {b}
                </motion.span>
              ))}
            </div>
          </SlideItem>
          <SlideItem delay={0.5}>
            <p className="text-blue-300 text-lg mb-6 text-center">🤖 Use the chatbot (right panel) to test your knowledge!</p>
          </SlideItem>
          <SlideItem delay={0.6}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(56, 189, 248, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={onRestart}
              className="bg-blue-600 text-white text-2xl font-black py-6 px-16 rounded-full shadow-2xl transition-all"
            >
              ↑ Start Again
            </motion.button>
          </SlideItem>
        </Slide>
      </div>
    </>
  );
}
