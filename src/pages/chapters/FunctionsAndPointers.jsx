import React from 'react';
import { motion } from 'motion/react';
import Slide from '../../components/Slide';
import { AnimCard } from '../../components/CourseUI';

export default function FunctionsAndPointers() {
  return (
    <>
      {/* SLIDE 13 · FUNCTIONS */}
      <div className="slide-section">
        <Slide>
          <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-pink-800/60 text-pink-200 backdrop-blur-md">Chapter 13</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">Functions in C</h2>
            </div>
            <AnimCard delay={0.1} className="bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 p-8 mb-8 border-l-8 border-pink-500">
               <p className="text-2xl text-pink-100 leading-relaxed">
                 A <strong className="text-pink-300">function</strong> is a reusable block of code that performs a specific task.
               </p>
            </AnimCard>
            <div className="grid md:grid-cols-2 gap-6">
               <AnimCard className="bg-white/10 p-6 rounded-xl border border-white/10">
                 <h4 className="text-xl font-bold text-blue-300 mb-2">Function Prototype</h4>
                 <code className="text-sm bg-black/50 p-2 rounded block text-blue-200">int add(int a, int b);</code>
               </AnimCard>
               <AnimCard className="bg-white/10 p-6 rounded-xl border border-white/10">
                 <h4 className="text-xl font-bold text-green-300 mb-2">Recursive Function</h4>
                 <code className="text-sm bg-black/50 p-2 rounded block text-green-200">int fact(int n) &#123; ... &#125;</code>
               </AnimCard>
            </div>
          </div>
        </Slide>
      </div>

      {/* SLIDE 14 · POINTERS */}
      <div className="slide-section">
        <Slide>
          <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-blue-800/60 text-blue-200 backdrop-blur-md">Chapter 14</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">Pointers in C</h2>
            </div>
            <AnimCard delay={0.1} className="bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 p-8 mb-8 border-l-8 border-blue-500">
               <p className="text-2xl text-blue-100 leading-relaxed">
                 A <strong className="text-blue-300">pointer</strong> stores the memory address of another variable.
               </p>
            </AnimCard>
            <div className="bg-black/30 rounded-xl p-8 flex justify-center items-center gap-8">
               <div className="bg-blue-600 p-4 rounded-lg text-center">
                 <div className="text-sm text-blue-200">Variable</div>
                 <div className="text-2xl font-bold text-white">42</div>
               </div>
               <div className="text-white text-3xl">←</div>
               <div className="bg-purple-600 p-4 rounded-lg text-center">
                 <div className="text-sm text-purple-200">Pointer</div>
                 <div className="text-lg font-mono text-white">0x7ffd</div>
               </div>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}
