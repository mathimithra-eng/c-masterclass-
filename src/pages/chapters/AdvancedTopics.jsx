import React from 'react';
import { motion } from 'motion/react';
import Slide, { SlideItem } from '../../components/Slide';
import { AnimCard } from '../../components/CourseUI';
import Diagram from '../../components/Diagram';

export default function AdvancedTopics() {
  return (
    <>
      {/* SLIDE 18 · PREPROCESSOR */}
      <div className="slide-section">
        <Slide>
          <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-purple-800/60 text-purple-200 backdrop-blur-md">Chapter 18</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">Preprocessor Directives</h2>
            </div>
            <AnimCard delay={0.1} className="bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 p-8 mb-8 border-l-8 border-purple-500">
               <p className="text-2xl text-purple-100 leading-relaxed">
                 Directives that process code <strong className="text-purple-300">before</strong> compilation.
               </p>
            </AnimCard>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {['#define', '#include', '#if', '#ifdef'].map(d => (
                 <div key={d} className="bg-purple-900/40 p-4 rounded-xl text-center border border-purple-500/20 font-mono text-purple-300">{d}</div>
               ))}
            </div>
          </div>
        </Slide>
      </div>

      {/* SLIDE 19 · ENUMS & TYPEDEF */}
      <div className="slide-section">
        <Slide>
          <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-amber-800/60 text-amber-200 backdrop-blur-md">Chapter 19</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">Enums & Typedef</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
               <AnimCard className="bg-white/10 p-6 rounded-2xl border border-white/10">
                 <h3 className="text-xl font-bold text-amber-300 mb-2">Enum</h3>
                 <p className="text-sm text-blue-200">Named integer constants for readability.</p>
               </AnimCard>
               <AnimCard className="bg-white/10 p-6 rounded-2xl border border-white/10">
                 <h3 className="text-xl font-bold text-purple-300 mb-2">Typedef</h3>
                 <p className="text-sm text-blue-200">Creates aliases for existing data types.</p>
               </AnimCard>
            </div>
          </div>
        </Slide>
      </div>

      {/* SLIDE 20 · RECURSION */}
      <div className="slide-section">
        <Slide>
          <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-emerald-800/60 text-emerald-200 backdrop-blur-md">Chapter 20</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">Recursion</h2>
            </div>
            <AnimCard delay={0.1} className="bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 p-8 mb-8 border-l-8 border-emerald-500">
               <p className="text-2xl text-emerald-100 leading-relaxed italic">
                 A function that <strong className="text-emerald-300">calls itself</strong>.
               </p>
            </AnimCard>
            <div className="w-full flex justify-center mt-8">
               <Diagram type="recursion" />
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}
