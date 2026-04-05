import React from 'react';
import { motion } from 'motion/react';
import Slide from '../../components/Slide';
import { AnimCard } from '../../components/CourseUI';

export default function StructuresAndArrays() {
  return (
    <>
      {/* SLIDE 11 · ARRAYS */}
      <div className="slide-section">
        <Slide>
          <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-blue-800/60 text-blue-200 backdrop-blur-md">Chapter 11</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">Arrays in C</h2>
            </div>
            <AnimCard delay={0.1} className="bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 p-8 mb-8 border-l-8 border-blue-500">
               <p className="text-2xl text-blue-100 leading-relaxed">
                 An <strong className="text-blue-300">array</strong> is a collection of elements of same type stored contiguously.
               </p>
            </AnimCard>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
               <div className="bg-blue-900/40 rounded-lg p-3 text-center">
                 <div className="text-2xl">📊</div>
                 <div className="font-bold text-blue-300">1D Array</div>
               </div>
               <div className="bg-blue-900/40 rounded-lg p-3 text-center">
                 <div className="text-2xl">📋</div>
                 <div className="font-bold text-blue-300">2D Array</div>
               </div>
               <div className="bg-blue-900/40 rounded-lg p-3 text-center">
                 <div className="text-2xl">🧊</div>
                 <div className="font-bold text-blue-300">3D Array</div>
               </div>
               <div className="bg-blue-900/40 rounded-lg p-3 text-center">
                 <div className="text-2xl">🏗️</div>
                 <div className="font-bold text-blue-300">Array of Structures</div>
               </div>
            </div>
            {/* Memory Visualization */}
            <div className="mt-4 bg-black/30 rounded-lg p-6">
               <div className="text-center text-blue-300 text-sm mb-4">Memory Visualization</div>
               <div className="flex gap-2 justify-center">
                 {[85, 92, 78, 96, 88].map((val, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.1, backgroundColor: '#3b82f6' }} className="bg-blue-600 rounded-lg p-3 text-center min-w-[60px]">
                      <div className="text-[10px] text-blue-200">[{i}]</div>
                      <div className="text-white font-bold text-lg">{val}</div>
                    </motion.div>
                 ))}
               </div>
            </div>
          </div>
        </Slide>
      </div>

      {/* SLIDE 12 · LIBRARIES */}
      <div className="slide-section">
        <Slide>
          <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-purple-800/60 text-purple-200 backdrop-blur-md">Chapter 12</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">C Standard Libraries</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'stdio.h', desc: 'Standard I/O: printf, scanf', color: 'text-blue-300' },
                { name: 'string.h', desc: 'String handling: strlen, strcpy', color: 'text-green-300' },
                { name: 'math.h', desc: 'Math functions: sqrt, pow', color: 'text-orange-300' },
                { name: 'stdlib.h', desc: 'Utilities: malloc, free', color: 'text-cyan-300' }
              ].map((lib, i) => (
                <AnimCard key={i} className="bg-white/10 p-6 rounded-2xl border border-white/10">
                   <code className={`${lib.color} text-xl font-bold`}>{lib.name}</code>
                   <p className="text-blue-200 mt-2">{lib.desc}</p>
                </AnimCard>
              ))}
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}
