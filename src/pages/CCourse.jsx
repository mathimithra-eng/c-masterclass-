import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import ProgressBar from '../components/ProgressBar';
import InteractiveBackground from '../components/InteractiveBackground';
import RightPanel from '../components/RightPanel';
import '../styles/course.css';

// Lazy load chapter components
const Basics = lazy(() => import('./chapters/Basics'));
const DataAndOps = lazy(() => import('./chapters/DataAndOps'));
const ControlFlow = lazy(() => import('./chapters/ControlFlow'));
const StructuresAndArrays = lazy(() => import('./chapters/StructuresAndArrays'));
const FunctionsAndPointers = lazy(() => import('./chapters/FunctionsAndPointers'));
const MemoryAndFiles = lazy(() => import('./chapters/MemoryAndFiles'));
const AdvancedTopics = lazy(() => import('./chapters/AdvancedTopics'));
const FinalCongrats = lazy(() => import('./chapters/FinalCongrats'));

// Loading fallback
const LoadingChapter = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-cyan-400 font-mono animate-pulse">Loading Course...</div>
  </div>
);

export default function CCourse() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const slides = container.querySelectorAll('.slide-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Array.from(slides).indexOf(entry.target);
            if (idx !== -1) setCurrentSlide(idx);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    slides.forEach(slide => observer.observe(slide));
    return () => observer.disconnect();
  }, []);

  const handleRestart = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="course-container font-sans selection:bg-cyan-200 relative overflow-hidden" style={{ background: 'transparent' }}>
      <ProgressBar />
      <RightPanel currentSlide={currentSlide} />
      <InteractiveBackground />

      <div className="relative z-10" style={{ position: "relative" }}>
        <Suspense fallback={<LoadingChapter />}>
          <Basics />
          <DataAndOps />
          <ControlFlow />
          <StructuresAndArrays />
          <FunctionsAndPointers />
          <MemoryAndFiles />
          <AdvancedTopics />
          <FinalCongrats onRestart={handleRestart} />
        </Suspense>
      </div>
    </div>
  );
}
