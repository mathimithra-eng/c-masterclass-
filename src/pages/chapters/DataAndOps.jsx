import React from 'react';
import { motion } from 'motion/react';
import Slide, { SlideItem } from '../../components/Slide';
import { AnimCard } from '../../components/CourseUI';

export default function DataAndOps() {
  return (
    <>
      {/* SLIDE 6 · VARIABLES */}
      <div className="slide-section" style={{ background: 'linear-gradient(135deg, #fdf4ff 0%, #fce7f3 100%)' }}>
        <Slide>
          <div className="min-h-screen flex items-center justify-center py-12 px-6 w-full">
            <div className="w-full max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <AnimCard><span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-emerald-100 text-emerald-800">Chapter 6</span></AnimCard>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-900">What are Variables?</h2>
              </div>
              <AnimCard delay={0.1} className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-8 border-emerald-500">
                <p className="text-2xl text-slate-700 leading-relaxed">
                  A <strong className="text-white-600">variable</strong> is a <strong className="text-emerald-600">named memory location</strong> that stores data which can be changed during program execution.
                </p>
                <div className="mt-6 bg-emerald-50 rounded-xl p-5">
                  <p className="text-gray-700 text-lg">📦 <strong>Analogy:</strong> Think of a variable as a <strong>labeled box</strong> where you can store, update, and retrieve values.</p>
                  <div className="bg-[#0d1117] rounded-lg p-4 mt-4 font-mono">
                    <span className="text-pink-400">int</span><span className="text-white"> </span><span className="text-blue-300">age</span><span className="text-white"> = </span><span className="text-emerald-400">25</span><span className="text-white">;  </span><span className="text-gray-500">// Box named "age" contains 25</span>
                  </div>
                </div>
              </AnimCard>
              <AnimCard delay={0.2} className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4 flex items-center gap-2"><span className="text-3xl">🏷️</span> Variable Naming Rules</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-green-600 font-bold mb-2">✓ Valid Examples</div>
                    <code className="block text-sm">int age;</code>
                    <code className="block text-sm">float _salary;</code>
                    <code className="block text-sm">char student_name;</code>
                    <code className="block text-sm">int totalMarks123;</code>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-red-600 font-bold mb-2">✗ Invalid Examples</div>
                    <code className="block text-sm">int 2ndValue;</code>
                    <code className="block text-sm">float my-name;</code>
                    <code className="block text-sm">char int;</code>
                    <code className="block text-sm">int my name;</code>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: '📝', text: 'Must start with letter or underscore' },
                    { icon: '🔢', text: 'Can contain letters, numbers, underscore' },
                    { icon: '🔠', text: 'Case-sensitive (Age ≠ age)' },
                    { icon: '🚫', text: 'Cannot use keywords (int, float, etc.)' },
                    { icon: '💡', text: 'Use meaningful names (e.g. studentAge)' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-emerald-100 shadow-sm transition-all hover:shadow-md">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </AnimCard>
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h3 className="text-3xl font-bold text-center text-purple-700 mb-8">📊 Types of Variables in C</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { bg: 'from-pink-50 to-pink-100 border-pink-500', code: 'int', codeC: 'text-pink-600', desc: 'Integer values - whole numbers', example: { kw: 'int', var: 'age', val: '25' }, meta: 'Range: -2.1B to 2.1B\nSize: 4 bytes | Format: %d' },
                    { bg: 'from-blue-50 to-blue-100 border-blue-500', code: 'float', codeC: 'text-blue-600', desc: 'Decimal numbers - single precision', example: { kw: 'float', var: 'price', val: '99.99f' }, meta: '6-7 decimal digits\nSize: 4 bytes | Format: %f' },
                    { bg: 'from-green-50 to-green-100 border-green-500', code: 'double', codeC: 'text-green-600', desc: 'Decimal numbers - double precision', example: { kw: 'double', var: 'pi', val: '3.14159' }, meta: '15-16 decimal digits\nSize: 8 bytes | Format: %lf' },
                    { bg: 'from-orange-50 to-orange-100 border-orange-500', code: 'char', codeC: 'text-orange-600', desc: 'Single character', example: { kw: 'char', var: 'grade', val: "'A'" }, meta: 'Stores ASCII values\nSize: 1 byte | Format: %c' },
                  ].map(({ bg, code, codeC, desc, example, meta }, i) => (
                    <AnimCard key={i} delay={i * 0.1} className={`bg-gradient-to-br ${bg} rounded-xl p-4 sm:p-5 border-l-4 shadow-md`}>
                      <code className={`text-xl sm:text-2xl font-bold ${codeC}`}>{code}</code>
                      <p className="text-gray-600 mt-2 text-sm sm:text-base">{desc}</p>
                      <div className="bg-[#0d1117] rounded-lg p-3 mt-3 font-mono text-xs sm:text-sm">
                        <span className="text-pink-400">{example.kw}</span><span className="text-white"> </span><span className="text-blue-300">{example.var}</span><span className="text-white"> = </span><span className="text-emerald-400">{example.val}</span><span className="text-white">;</span>
                      </div>
                      <div className="mt-3 text-[10px] sm:text-xs text-gray-500 whitespace-pre-line">{meta}</div>
                    </AnimCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>

      {/* SLIDE 7 · DATA TYPES */}
      <div className="slide-section">
        <Slide>
          <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
              <AnimCard><span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-blue-800/60 text-blue-200 backdrop-blur-md">Chapter 7</span></AnimCard>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">Data Types in C</h2>
            </div>
            <AnimCard delay={0.1} className="bg-white/10 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 p-8 mb-8 border-l-8 border-blue-500">
              <p className="text-2xl text-blue-100 leading-relaxed">
                A <strong className="text-blue-300">data type</strong> defines the <strong className="text-blue-300">type of data</strong> a variable can store, the <strong className="text-blue-300">amount of memory</strong> it occupies, and the <strong className="text-blue-300">operations</strong> that can be performed on it.
              </p>
            </AnimCard>
            <AnimCard delay={0.15} className="bg-white/10 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 p-8 mb-8">
              <h3 className="text-3xl font-bold text-center text-blue-300 mb-8">📊 Classification of Data Types</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 text-center border border-blue-400/30 transition-all duration-500 hover:scale-105">
                  <div className="text-4xl mb-3">🔢</div>
                  <h4 className="text-2xl font-bold text-blue-300 mb-2">Primitive Data Types</h4>
                  <p className="text-blue-200">Basic built-in types - int, char, float, double, void</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 text-center border border-purple-400/30 transition-all duration-500 hover:scale-105">
                  <div className="text-4xl mb-3">📦</div>
                  <h4 className="text-2xl font-bold text-purple-300 mb-2">Non-Primitive Data Types</h4>
                  <p className="text-purple-200">Derived types - arrays, pointers, structures, etc.</p>
                </div>
              </div>
            </AnimCard>
            <AnimCard delay={0.2} className="bg-white/10 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 p-8 mb-8">
              <h3 className="text-3xl font-bold text-center text-pink-300 mb-8">📋 Primitive Data Types</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { code: 'int', size: '4 bytes', desc: 'Integer values', ex: 'int age = 25;', meta: 'Range: -2.1B to 2.1B\nFormat: %d | %i', colorIdx: 0 },
                  { code: 'char', size: '1 byte', desc: 'Single character', ex: "char grade = 'A';", meta: 'Range: -128 to 127\nFormat: %c', colorIdx: 1 },
                  { code: 'float', size: '4 bytes', desc: 'Decimal numbers', ex: 'float price = 99.99f;', meta: 'Precision: 6-7 digits\nFormat: %f', colorIdx: 2 },
                  { code: 'double', size: '8 bytes', desc: 'Double precision', ex: 'double pi = 3.14159;', meta: 'Precision: 15-16 digits\nFormat: %lf', colorIdx: 3 },
                  { code: 'void', size: '0 bytes', desc: 'No value / Empty', ex: 'void fn(void);', meta: 'Used for functions\nNo variables', colorIdx: 4 },
                  { code: 'long long', size: '8 bytes', desc: 'Extended range', ex: 'long long big = 9E18;', meta: 'Range: ±9.2 quintillion\nFormat: %lld', colorIdx: 5 },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-4 border-l-4 border-pink-500 shadow-md hover:scale-105 transition-all cursor-pointer">
                    <div className="flex justify-between items-center mb-3">
                      <code className="text-xl font-bold text-pink-300">{item.code}</code>
                      <span className="bg-pink-500/30 text-pink-200 px-2 py-1 rounded text-xs font-bold">{item.size}</span>
                    </div>
                    <p className="text-blue-200 text-sm mb-3">{item.desc}</p>
                    <div className="bg-black/50 rounded-lg p-3 font-mono text-xs text-white mb-2">{item.ex}</div>
                    <div className="text-[10px] text-blue-300 whitespace-pre-line">{item.meta}</div>
                  </div>
                ))}
              </div>
            </AnimCard>
          </div>
        </Slide>
      </div>

      {/* SLIDE 8 · OPERATORS */}
      <div className="slide-section">
        <Slide>
          <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
              <AnimCard><span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 bg-purple-800/60 text-purple-200 backdrop-blur-md">Chapter 8</span></AnimCard>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">Operators in C</h2>
            </div>
            <AnimCard delay={0.1} className="bg-white/10 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 p-8 mb-8 border-l-8 border-purple-500">
              <p className="text-2xl text-purple-100 leading-relaxed">
                An <strong className="text-purple-300">operator</strong> is a symbol that tells the compiler to perform specific <strong className="text-purple-300">mathematical, relational, or logical operations</strong>.
              </p>
            </AnimCard>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {[
                { name: 'Arithmetic', ops: '+ - * / %', icon: '🔢' },
                { name: 'Relational', ops: '== != > <', icon: '⚖️' },
                { name: 'Logical', ops: '&& || !', icon: '🔗' },
                { name: 'Bitwise', ops: '& | ^ ~', icon: '🧮' },
                { name: 'Assignment', ops: '= += -=', icon: '📝' }
              ].map((type, i) => (
                <AnimCard key={i} delay={i * 0.1} className="bg-gradient-to-br from-purple-900/40 to-pink-900/30 rounded-xl p-4 text-center border-2 border-purple-200 hover:scale-105 transition-all">
                  <div className="text-3xl mb-2">{type.icon}</div>
                  <h4 className="font-bold text-purple-300 text-sm">{type.name}</h4>
                  <p className="text-[10px] text-blue-100/50 mt-1 font-mono">{type.ops}</p>
                </AnimCard>
              ))}
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}
