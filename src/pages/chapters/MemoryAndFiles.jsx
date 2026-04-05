import React from 'react';
import { motion } from 'motion/react';
import Slide from '../../components/Slide';
import { AnimCard } from '../../components/CourseUI';

export default function MemoryAndFiles() {
  return (
    <>
      {/* SLIDE 15 · STRUCTURES & UNIONS */}
      <div className="slide-section">
        <Slide>
          <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-amber-800/60 text-amber-200 backdrop-blur-md">Chapter 15</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">Structures & Unions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <AnimCard className="bg-white/10 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-amber-300 mb-4">Structure</h3>
                <p className="text-blue-100 mb-4">Groups different types. Each member has its own memory.</p>
                <code className="bg-black/50 p-3 rounded block text-sm text-blue-200">
                  struct Student &#123; int id; char name[50]; &#125;;
                </code>
              </AnimCard>
              <AnimCard className="bg-white/10 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-emerald-300 mb-4">Union</h3>
                <p className="text-blue-100 mb-4">Shared memory for all members. Only one at a time.</p>
                <code className="bg-black/50 p-3 rounded block text-sm text-emerald-200">
                  union Data &#123; int i; float f; &#125;;
                </code>
              </AnimCard>
            </div>
          </div>
        </Slide>
      </div>

      {/* SLIDE 16 · DYNAMIC MEMORY */}
      <div className="slide-section">
        <Slide>
          <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-cyan-800/60 text-cyan-200 backdrop-blur-md">Chapter 16</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">Dynamic Memory</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {['malloc()', 'calloc()', 'realloc()', 'free()'].map(f => (
                <div key={f} className="bg-cyan-900/40 p-4 rounded-xl text-center border border-cyan-500/20 font-bold text-cyan-300">{f}</div>
              ))}
            </div>
            <AnimCard className="bg-white/10 p-8 rounded-2xl">
               <p className="text-xl text-blue-100 leading-relaxed italic">
                 Allocating memory at <strong className="text-cyan-300">runtime</strong> from the <strong className="text-cyan-300">HEAP</strong>.
               </p>
            </AnimCard>
          </div>
        </Slide>
      </div>

      {/* SLIDE 17 · FILE HANDLING */}
      <div className="slide-section">
        <Slide>
          <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-slate-800/60 text-slate-200 backdrop-blur-md">Chapter 17</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">File Handling</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <AnimCard className="bg-white/10 p-6 rounded-xl">
                 <h4 className="text-lg font-bold text-blue-300 mb-2">Modes</h4>
                 <div className="flex gap-2">
                   {['"r"', '"w"', '"a"', '"rb"', '"wb"'].map(m => (
                     <span key={m} className="bg-black/40 px-2 py-1 rounded text-xs text-blue-200">{m}</span>
                   ))}
                 </div>
              </AnimCard>
              <AnimCard className="bg-white/10 p-6 rounded-xl">
                 <h4 className="text-lg font-bold text-green-300 mb-2">Functions</h4>
                 <p className="text-sm text-blue-200">fopen, fclose, fprintf, fscanf, fread, fwrite</p>
              </AnimCard>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}
