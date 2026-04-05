import React from 'react';
import { motion } from 'motion/react';
import Slide, { SlideItem } from '../../components/Slide';
import Diagram from '../../components/Diagram';
import { AnimCard } from '../../components/CourseUI';

export default function Basics({ containerRef }) {
  return (
    <>
      {/* SLIDE 0 · TITLE */}
      <div className="slide-section">
        <Slide>
          <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(244,114,182,0.10) 0%, transparent 70%)' }} />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center w-full">
            <SlideItem>
              <div className="flex justify-center mb-10">
                <motion.div
                  onClick={() => window.dispatchEvent(new Event('open-video-panel'))}
                  whileHover={{ scale: 1.05, filter: 'drop-shadow(0 0 30px rgba(66,165,245,0.4))' }}
                  whileTap={{ scale: 0.96 }}
                  style={{ cursor: 'pointer', position: 'relative' }}
                  title="Click to view Video Resources"
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                >
                  <div className="w-full h-full rounded-[40px] overflow-hidden border-4 border-sky-400/20 shadow-[-20px_20px_60px_rgba(0,0,0,0.5),20px_-20px_60px_rgba(255,255,255,0.05)] backdrop-blur-xl group">
                    <img src="/c_logo.png" alt="C Programming" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 p-6 rounded-full shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                        <svg className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 px-6 py-2 rounded-full shadow-lg border border-white/20 whitespace-nowrap text-white font-bold text-sm md:text-base flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-100 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-200"></span>
                    </span>
                    Explore Video Tutorials
                  </div>
                </motion.div>
              </div>
            </SlideItem>
            <SlideItem delay={0.22}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.2em] sm:tracking-[0.45em] text-[#42a5f5] uppercase mb-2 drop-shadow-[0_0_32px_rgba(66,165,245,0.85)]">
                Programming
              </h1>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[0.3em] sm:tracking-[0.65em] text-[#90caf9] uppercase mb-6 drop-shadow-[0_0_20px_rgba(144,202,249,0.7)]">
                Masterclass
              </h2>
            </SlideItem>
            <SlideItem delay={0.3}>
              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#659AD3] to-transparent mx-auto mb-6" />
            </SlideItem>
            <SlideItem delay={0.38}>
              <p className="text-base sm:text-lg lg:text-xl text-[#5ea0eb] font-medium max-w-[90%] sm:max-w-[420px] leading-relaxed mb-8 px-4 mx-auto">
                From Hello World to Dynamic Memory — master the{' '}
                <span className="text-[#5aa7e6] font-bold">mother of all programming languages</span>
              </p>
            </SlideItem>
            <SlideItem delay={0.6}>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 26, height: 42, borderRadius: 13, border: '2px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
                  <motion.div animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 2 }}
                    style={{ width: 4, height: 8, borderRadius: 2, background: 'rgba(255,255,255,0.5)' }} />
                </div>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>Scroll</span>
              </motion.div>
            </SlideItem>
          </div>
        </Slide>
      </div>

      {/* SLIDE 1 · INTRODUCTION */}
      <div className="slide-section">
        <Slide>
          <SlideItem>
            <div className="flex items-center justify-center gap-6 mb-4">
              <svg width="72" height="72" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 4px 12px rgba(3,89,156,0.25))' }}>
                <path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z" />
                <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z" />
                <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z" />
              </svg>
              <AnimCard><span className="inline-block px-5 py-2 rounded-full text-sm font-bold bg-sky-800/60 text-sky-200 backdrop-blur-md">Chapter 1</span></AnimCard>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-white">Introduction to C</h2>
          </SlideItem>
          <SlideItem delay={0.2}>
            <p className="text-2xl text-blue-100/80 leading-relaxed max-w-4xl mb-8">
              C is a <strong className="text-sky-300">general-purpose, procedural</strong> programming language created in the early 1970s. It is the <strong className="text-sky-300">foundation of modern computing</strong> — Linux, Windows, Python, Java, and JavaScript are all built on or inspired by C.
            </p>
          </SlideItem>
          <SlideItem delay={0.4}>
            <AnimCard className="w-full max-w-4xl mb-8">
              <div className="bg-sky-900/30 border-2 border-sky-400/40 backdrop-blur-md p-8 rounded-3xl w-full text-left">
                <h3 className="text-2xl font-bold text-sky-200 mb-4">🌍 Real World Uses of C:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  {[['🐧', 'Linux Kernel'], ['🪟', 'Windows Core'], ['🔌', 'Microcontrollers'], ['🛠️', 'Compilers & DBs']].map(([icon, label], i) => (
                    <motion.div key={i} whileHover={{ scale: 1.08, rotate: 2 }} whileTap={{ scale: 0.93 }}
                      className="text-center p-3 sm:p-4 bg-white/10 rounded-2xl border border-sky-400/30 cursor-pointer">
                      <div className="text-3xl sm:text-4xl mb-2">{icon}</div>
                      <div className="font-bold text-sky-200 text-xs sm:text-sm">{label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimCard>
          </SlideItem>
          <SlideItem delay={0.6}>
            <AnimCard className="p-6 bg-indigo-900/30 border-2 border-indigo-400/40 backdrop-blur-md rounded-2xl max-w-3xl">
              <p className="text-lg text-indigo-200 font-medium">💡 <strong>Key Philosophy:</strong> C trusts the programmer completely — no automatic garbage collection, no bounds checking. Total power, total responsibility.</p>
            </AnimCard>
          </SlideItem>
        </Slide>
      </div>

      {/* SLIDE 2 · HISTORY */}
      <div className="slide-section">
        <Slide>
          <SlideItem>
            <AnimCard><span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-orange-800/60 text-orange-200 backdrop-blur-md">Chapter 2</span></AnimCard>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-white">History of C</h2>
          </SlideItem>
          <SlideItem delay={0.2}>
            <p className="text-2xl text-blue-100/80 leading-relaxed max-w-4xl mb-8">
              Born at <strong className="text-orange-300">Bell Labs</strong> in Murray Hill, New Jersey. Dennis Ritchie created C while co-developing Unix — proving C could build entire operating systems!
            </p>
          </SlideItem>
          <SlideItem delay={0.4} className="w-full flex justify-center">
            <Diagram type="timeline" />
          </SlideItem>
          <SlideItem delay={0.8}>
            <AnimCard className="mt-8 p-6 bg-orange-900/30 border-2 border-orange-400/40 backdrop-blur-md rounded-2xl max-w-2xl">
              <p className="text-lg text-orange-200 font-medium">💡 <strong>Fun Fact:</strong> Unix was rewritten in C in 1973 — this proved C could build entire operating systems, changing computing history forever!</p>
            </AnimCard>
          </SlideItem>
        </Slide>
      </div>

      {/* SLIDE 3 · FEATURES */}
      <div className="slide-section">
        <Slide>
          <SlideItem>
            <AnimCard><span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-emerald-800/60 text-emerald-200 backdrop-blur-md">Chapter 3</span></AnimCard>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-white">Features of C</h2>
          </SlideItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
            {[
              { delay: 0.1, icon: '⚡', title: 'Fast & Efficient', desc: 'Compiles directly to machine code. No interpreter, no JIT warm-up. Perfect for real-time and embedded systems.' },
              { delay: 0.2, icon: '🔩', title: 'Low-Level Memory Access', desc: 'Pointers let you read and write any memory address. You control allocation and deallocation explicitly.' },
              { delay: 0.3, icon: '🌍', title: 'Highly Portable', desc: '"Write once, compile anywhere." The same C source compiles on Linux, Windows, macOS, and ARM microcontrollers.' },
              { delay: 0.4, icon: '📐', title: 'Structured Programming', desc: 'Functions, loops, and conditionals enforce clean top-down design — easy to read, test, and maintain.' },
              { delay: 0.5, icon: '📦', title: 'Rich Standard Library', desc: 'stdio.h, stdlib.h, string.h, math.h — hundreds of battle-tested functions included out of the box.' },
              { delay: 0.6, icon: '🏗️', title: 'Foundation of All Languages', desc: 'C++ extends C. Java and Python are implemented in C. Learn C and every other language feels familiar.' },
            ].map(({ delay, icon, title, desc }, i) => (
              <SlideItem key={i} delay={delay} className="w-full">
                <AnimCard className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-3xl border-2 transition-all duration-300 ${i % 2 === 0 ? 'bg-blue-950/40 border-blue-400/20 shadow-blue-900/10' : 'bg-cyan-950/40 border-cyan-400/20 shadow-cyan-900/10'}`}>
                  <div className={`p-3 sm:p-4 rounded-2xl flex-shrink-0 ${i % 2 === 0 ? 'bg-blue-800/30' : 'bg-cyan-800/30'}`}>
                    <span className="text-3xl sm:text-4xl">{icon}</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${i % 2 === 0 ? 'text-blue-300' : 'text-cyan-300'}`}>{title}</h3>
                    <p className="text-blue-100/70 text-sm sm:text-base leading-relaxed">{desc}</p>
                  </div>
                </AnimCard>
              </SlideItem>
            ))}
          </div>
        </Slide>
      </div>

      {/* SLIDE 4 · PROGRAM STRUCTURE */}
      <div className="slide-section">
        <Slide>
          <SlideItem>
            <AnimCard><span className="inline-block px-5 py-2 rounded-full text-sm font-bold bg-violet-800/60 text-violet-200 backdrop-blur-md">Chapter 4</span></AnimCard>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-white">Structure of a C Program</h2>
          </SlideItem>
          <SlideItem delay={0.2}>
            <p className="text-2xl text-blue-100/80 leading-relaxed max-w-4xl mb-8">
              Every C program follows the <strong className="text-violet-300">same skeleton</strong>. Master this structure once and you can read or write any C program, no matter how large.
            </p>
          </SlideItem>
          <SlideItem delay={0.4} className="w-full flex justify-center">
            <AnimCard className="bg-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md border border-white/10 max-w-5xl w-full">
              <h3 className="text-xl font-bold text-center text-white mb-6">📋 C Program Structure</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { num: '1', border: 'border-violet-500', bg: 'bg-violet-100 text-violet-700', code: '#include <stdio.h>', desc: 'Preprocessor directives — import libraries, define constants', codeC: 'text-blue-300' },
                  { num: '2', border: 'border-violet-500', bg: 'bg-violet-100 text-violet-700', code: 'void greet(void);', desc: 'Function prototypes — declare functions before use', codeC: 'text-pink-300' },
                  { num: '3', border: 'border-emerald-500', bg: 'bg-emerald-100 text-emerald-700', code: 'int main()', desc: 'Main function — program entry point (execution starts here)', codeC: 'text-pink-300' },
                  { num: '4', border: 'border-emerald-500', bg: 'bg-emerald-100 text-emerald-700', code: '// Statements and logic', desc: 'Function body — actual code that executes', codeC: 'text-white bg-gray-800 px-2 py-1 rounded text-sm' },
                  { num: '5', border: 'border-emerald-500', bg: 'bg-emerald-100 text-emerald-700', code: 'return 0;', desc: 'Return statement — exit status (0 = success)', codeC: 'text-emerald-300' },
                  { num: '6', border: 'border-violet-500', bg: 'bg-violet-100 text-violet-700', code: 'void greet(void)', desc: 'Function definitions — implementation of declared functions', codeC: 'text-pink-300' },
                ].map(({ num, border, bg, code, desc, codeC }, i) => (
                  <motion.div key={i} whileHover={{ x: 6, scale: 1.01 }} className={`border-l-4 ${border} pl-4`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 ${bg} rounded-full text-xs font-bold`}>{num}</span>
                      <code className={`${codeC} font-bold`}>{code}</code>
                    </div>
                    <p className="text-sm text-blue-100/80 ml-8">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimCard>
          </SlideItem>
          <SlideItem delay={0.6} className="w-full max-w-4xl mt-6">
            <AnimCard>
              <div className="bg-[#0d1117] rounded-3xl overflow-hidden shadow-2xl text-left w-full">
                <div className="bg-[#161b22] px-6 py-4 flex items-center gap-2 border-b border-[#30363d]">
                  <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" /><div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" /><div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
                  <span className="text-[#8b949e] ml-4 font-mono text-sm">structure.c</span>
                </div>
                <pre className="p-8 text-lg font-mono leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-blue-400">#include</span><span className="text-orange-300"> &lt;stdio.h&gt;</span><span className="text-[#6e7681]">  /* 1. Import standard library */</span>{'\n'}
                    <span className="text-blue-400">#define</span><span className="text-white"> MAX </span><span className="text-emerald-400">100</span><span className="text-[#6e7681]">        /* 2. Constant macro */</span>{'\n\n'}
                    <span className="text-pink-400">void</span><span className="text-blue-300"> greet</span><span className="text-white">(</span><span className="text-pink-400">void</span><span className="text-white">);</span><span className="text-[#6e7681]">               /* 3. Function prototype */</span>{'\n\n'}
                    <span className="text-pink-400">int</span><span className="text-blue-300"> main</span><span className="text-white">(</span><span className="text-pink-400">void</span><span className="text-white">) {'{'}</span>{'\n    '}
                    <span className="text-blue-300">greet</span><span className="text-white">();</span>{'\n    '}
                    <span className="text-pink-400">return</span><span className="text-white"> </span><span className="text-emerald-400">0</span><span className="text-white">;</span>{'\n'}{'}'}{'\n\n'}
                    <span className="text-pink-400">void</span><span className="text-blue-300"> greet</span><span className="text-white">(</span><span className="text-pink-400">void</span><span className="text-white">) {'{'}</span>{'\n    '}
                    <span className="text-white">printf(</span><span className="text-orange-300">"Hello from C!\\n"</span><span className="text-white">);</span>{'\n'}{'}'}
                  </code>
                </pre>
              </div>
            </AnimCard>
          </SlideItem>
          <SlideItem delay={0.8}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 max-w-5xl w-full">
              {[
                 { bg: 'bg-violet-50 border-violet-200', icon: '📦', titleC: 'text-violet-900', title: 'Preprocessor', sub: 'text-violet-700', subText: '#include, #define, #ifdef' },
                 { bg: 'bg-emerald-50 border-emerald-200', icon: '🎯', titleC: 'text-emerald-900', title: 'Main Function', sub: 'text-emerald-700', subText: 'Entry point — must exist' },
                 { bg: 'bg-amber-50 border-amber-200', icon: '🔄', titleC: 'text-amber-900', title: 'Functions', sub: 'text-amber-700', subText: 'Reusable code blocks' },
              ].map(({ bg, icon, titleC, title, sub, subText }, i) => (
                 <AnimCard key={i} delay={i * 0.1} className={`p-4 border-2 rounded-2xl ${bg}`}>
                   <div className="text-2xl mb-2">{icon}</div>
                   <div className={`font-bold ${titleC} text-sm`}>{title}</div>
                   <div className={`text-xs ${sub} mt-1`}>{subText}</div>
                 </AnimCard>
              ))}
            </div>
          </SlideItem>
          <SlideItem delay={1}>
            <AnimCard className="mt-6 p-5 bg-violet-900/30 border-2 border-violet-400/40 backdrop-blur-md rounded-2xl max-w-4xl">
              <p className="text-violet-200 font-medium text-lg">💡 <strong>Key Point:</strong> The compiler reads from top to bottom — functions must be declared (prototyped) before they are called!</p>
            </AnimCard>
          </SlideItem>
        </Slide>
      </div>

      {/* SLIDE 5 · HELLO WORLD */}
      <div className="slide-section">
        <Slide>
          <SlideItem>
            <AnimCard><span className="inline-block px-5 py-2 rounded-full text-sm font-bold bg-sky-800/60 text-sky-200 backdrop-blur-md">Chapter 5</span></AnimCard>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-white">Your First C Program</h2>
          </SlideItem>
          <SlideItem delay={0.2} className="w-full max-w-4xl">
            <AnimCard>
              <div className="bg-[#0d1117] rounded-3xl overflow-hidden shadow-2xl text-left w-full">
                <div className="bg-[#161b22] px-6 py-4 flex items-center gap-2 border-b border-[#30363d]">
                  <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" /><div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" /><div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
                  <span className="text-[#8b949e] ml-4 font-mono text-sm">hello.c</span>
                </div>
                <pre className="p-8 text-lg font-mono leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-blue-400">#include</span><span className="text-blue-400"> &lt;stdio.h&gt;</span>{'\n\n'}
                    <span className="text-pink-400">int</span><span className="text-blue-300"> main</span><span className="text-white">() {'{'}</span>{'\n    '}
                    <span className="text-white">printf(</span><span className="text-orange-300">"Hello, World!\\n"</span><span className="text-white">);</span>{'\n    '}
                    <span className="text-pink-400">return</span><span className="text-white"> </span><span className="text-emerald-400">0</span><span className="text-white">;</span>{'\n'}
                    <span className="text-white">{'}'}</span>
                  </code>
                </pre>
              </div>
            </AnimCard>
          </SlideItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl text-left mt-8">
            {[
              { delay: 0.4, bg: 'bg-blue-50 border-blue-500/30', code: '#include <stdio.h>', codeC: 'text-blue-500', desc: 'Imports the Standard I/O library. Needed for printf and scanf.' },
              { delay: 0.5, bg: 'bg-pink-50 border-pink-500/30', code: 'int main()', codeC: 'text-pink-500', desc: 'Entry point of every C program. Execution always starts here.' },
              { delay: 0.6, bg: 'bg-emerald-50 border-emerald-400/30', code: 'return 0', codeC: 'text-emerald-500', desc: 'Returns 0 = success to the OS. Any other value signals an error.' },
            ].map(({ delay, bg, code, codeC, desc }, i) => (
              <SlideItem key={i} delay={delay}>
                <AnimCard className={`p-6 rounded-2xl border ${bg} h-full`}>
                  <code className={`${codeC} font-bold text-sm block mb-2 font-mono`}>{code}</code>
                  <p className="text-blue-1000/80 text-sm">{desc}</p>
                </AnimCard>
              </SlideItem>
            ))}
          </div>
          <SlideItem delay={0.7}>
            <AnimCard className="mt-6 bg-[#0d1117] rounded-2xl px-8 py-4 font-mono text-emerald-400 text-base shadow-xl border border-[#30363d]">
              $ gcc hello.c -o hello &nbsp;&nbsp; $ ./hello &nbsp;&nbsp; → Hello, World!
            </AnimCard>
          </SlideItem>
        </Slide>
      </div>
    </>
  );
}
