import React from 'react';
import { motion } from 'motion/react';
import Slide, { SlideItem } from '../../components/Slide';
import { AnimCard } from '../../components/CourseUI';

export default function ControlFlow() {
  return (
    <>
      {/* SLIDE 9 · CONDITIONALS */}
      <div className="slide-section">
        <Slide>
          <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-cyan-800/60 text-cyan-200 backdrop-blur-md">Chapter 9</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">Conditional Statements</h2>
            </div>
            <AnimCard delay={0.1} className="bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 p-8 mb-8 border-l-8 border-cyan-500">
              <p className="text-2xl text-cyan-100 leading-relaxed">
                <strong className="text-cyan-300">Conditional statements</strong> allow the program to make <strong className="text-cyan-300">decisions</strong> based on whether a condition is true or false.
              </p>
            </AnimCard>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {['if', 'if-else', 'else-if', 'switch', 'nested'].map((type, i) => (
                <div key={i} className="bg-cyan-900/40 rounded-lg p-4 text-center border border-cyan-500/20">
                  <div className="font-bold text-cyan-300">{type}</div>
                </div>
              ))}
            </div>
            {/* if Statement Card */}
            <AnimCard className="bg-white/10 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-pink-300 mb-4">🔹 if Statement</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-blue-200 mb-2"><strong>Syntax:</strong> <code className="bg-black/50 px-2 py-1 rounded">if(condition) &#123; // code &#125;</code></p>
                  <div className="mt-4 bg-black/30 rounded-lg p-4">
                    <div className="text-center text-pink-300 text-sm mb-2">if Statement Flow</div>
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-500/50 px-4 py-2 rounded-lg text-sm">Condition?</div>
                      <div className="text-white">↓</div>
                      <div className="bg-green-500/50 px-4 py-1 rounded-lg text-xs">Execute Body</div>
                    </div>
                  </div>
                </div>
                <div className="bg-black/50 rounded-lg overflow-hidden">
                  <pre className="p-4 text-sm font-mono text-blue-200">
                    {`if (age >= 18) {
    printf("Eligible to vote");
}`}
                  </pre>
                </div>
              </div>
            </AnimCard>
          </div>
        </Slide>
      </div>

      {/* SLIDE 10 · LOOPS */}
      <div className="slide-section">
        <Slide>
          <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-amber-800/60 text-amber-200 backdrop-blur-md">Chapter 10</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">Loops in C</h2>
            </div>
            <AnimCard delay={0.1} className="bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 p-8 mb-8 border-l-8 border-amber-500">
              <p className="text-2xl text-amber-100 leading-relaxed">
                A <strong className="text-amber-300">loop</strong> repeats a block of code multiple times.
              </p>
            </AnimCard>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {['for', 'while', 'do-while', 'nested'].map(l => (
                <div key={l} className="bg-amber-900/40 rounded-lg p-4 text-center border border-amber-500/20 text-amber-200 font-bold">{l} loop</div>
              ))}
            </div>
            <AnimCard className="bg-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-pink-300 mb-4">🔄 for Loop</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-blue-200 mb-2"><strong>Syntax:</strong> <code className="bg-black/50 px-2 py-1 rounded">for(init; cond; inc)</code></p>
                  <div className="bg-black/50 rounded-lg p-4 mt-2">
                    <pre className="text-sm font-mono text-blue-200">
                      {`for(int i = 1; i <= 5; i++) {
    printf("%d ", i);
}`}
                    </pre>
                  </div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 flex flex-col items-center">
                   <div className="text-xs text-blue-300 mb-2 font-bold">Execution Loop</div>
                   <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} className="w-16 h-16 border-4 border-amber-500 border-t-white rounded-full flex items-center justify-center">
                     <span className="text-white font-bold font-mono">i++</span>
                   </motion.div>
                </div>
              </div>
            </AnimCard>
          </div>
        </Slide>
      </div>
    </>
  );
}
