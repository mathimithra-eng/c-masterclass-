import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Youtube, MessageCircle, X, ExternalLink } from 'lucide-react';
import VoiceOverPlayer from './VoiceOverPlayer';
import Chatbot from './Chatbot';

/* ── Colour tokens matching C Masterclass ── */
const T = {
  panel: '#080e22',
  border: 'rgba(101,154,211,0.22)',
  accent1: '#0b67c9',
  accent2: '#659AD3',
  accent3: '#42a5f5',
  purple: '#6366f1',
  text: '#c9dff7',
  muted: '#4a6fa8',
};

const C_VIDEOS = [
  {
    title: 'Tutorial 1 — C Introduction',
    videoId: 'Wy0WCzVsTXA',
    dur: 'Video 1',
    level: 'Beginner',
    desc: 'What is C? History, features & why you should learn C programming',
    locked: false,
  },
  {
    title: 'Tutorial 2 — Installation & Setup',
    videoId: 'lRzg5XZwzR4',
    dur: 'Video 2',
    level: 'Beginner',
    desc: 'Install compiler, set up VS Code & write your first Hello World program',
    locked: false,
  },
  {
    title: 'Tutorial 3 — Structures & Variables',
    videoId: 'cTyAQyfJ7ds',
    dur: 'Video 3',
    level: 'Intermediate',
    desc: 'Understand data types, variables, constants and struct declarations in C',
    locked: false,
  },
  {
    title: 'Tutorial 4 — Conditional Statements',
    videoId: 'wRr288fC21I',
    dur: 'Video 4',
    level: 'Intermediate',
    desc: 'Master if, else if, else, switch-case and ternary operators with examples',
    locked: false,
  },
  {
    title: 'Tutorial 5 — Loops & Iteration',
    videoId: null,
    dur: 'Video 5',
    level: 'Premium',
    desc: 'for, while, do-while loops, break & continue — Premium content',
    locked: true,
  },
  {
    title: 'Tutorial 6 — Arrays & Strings',
    videoId: null,
    dur: 'Video 6',
    level: 'Premium',
    desc: '1D & 2D arrays, string functions from <string.h> — Premium content',
    locked: true,
  },
  {
    title: 'Tutorial 7 — Functions & Recursion',
    videoId: null,
    dur: 'Video 7',
    level: 'Premium',
    desc: 'Function prototypes, call by value, recursion & stack frames — Premium content',
    locked: true,
  },
  {
    title: 'Tutorial 8 — Pointers & Memory',
    videoId: null,
    dur: 'Video 8',
    level: 'Premium',
    desc: 'Pointer arithmetic, malloc, calloc, free & memory leaks — Premium content',
    locked: true,
  },
  {
    title: 'Tutorial 9 — File Handling',
    videoId: null,
    dur: 'Video 9',
    level: 'Premium',
    desc: 'fopen, fclose, fread, fwrite, fprintf & file modes — Premium content',
    locked: true,
  },
  {
    title: 'Tutorial 10 — Advanced C Concepts',
    videoId: null,
    dur: 'Video 10',
    level: 'Premium',
    desc: 'Linked lists, sorting algorithms, bitwise ops & preprocessor — Premium content',
    locked: true,
  },
];

const LEVEL_COLOR = {
  Beginner: { bg: 'rgba(34,197,94,0.2)', text: '#4ade80' },
  Intermediate: { bg: 'rgba(251,191,36,0.2)', text: '#fde047' },
  Advanced: { bg: 'rgba(239,68,68,0.2)', text: '#f87171' },
  Premium: { bg: 'rgba(245,160,0,0.22)', text: '#f5a000' },
};

function VideoPanel({ onClose, isMobile }) {
  const [activeId, setActiveId] = React.useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.93, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.93, y: 16 }}
      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      style={{
        position: 'fixed', bottom: 88, zIndex: 400,
        width: isMobile ? '92vw' : (activeId ? 440 : 340),
        left: isMobile ? '50%' : 'auto',
        right: isMobile ? 'auto' : 20,
        transform: isMobile ? 'translateX(-50%)' : 'none',
        maxHeight: 'calc(100vh - 120px)',
        background: 'rgba(6,10,28,0.98)', backdropFilter: 'blur(24px)',
        borderRadius: 20, border: '1px solid rgba(239,68,68,0.4)',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transition: 'width 0.3s ease, left 0.3s ease, right 0.3s ease, transform 0.3s ease',
      }}
    >
      {/* Header */}
      <div style={{
        padding: '13px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'linear-gradient(90deg,rgba(239,68,68,0.25),rgba(185,28,28,0.12))',
        borderBottom: '1px solid rgba(239,68,68,0.2)',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Youtube size={18} color="#ef4444" />
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>CodingBoss Channel</div>
            <div style={{ color: '#ef4444', fontSize: 10, marginTop: 1 }}>▶ Click a video to play</div>
          </div>
        </div>
        <button onClick={onClose}
          style={{
            background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)',
            borderRadius: 8, cursor: 'pointer', color: '#fca5a5', padding: '4px 6px',
            display: 'flex', alignItems: 'center'
          }}>
          <X size={14} />
        </button>
      </div>

      {/* Embedded Player */}
      {activeId && (
        <div style={{ flexShrink: 0, background: '#000', position: 'relative' }}>
          <iframe
            key={activeId}
            src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0&modestbranding=1`}
            title="CodingBoss Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', height: 220, border: 'none', display: 'block' }}
          />
          <button
            onClick={() => setActiveId(null)}
            style={{
              position: 'absolute', top: 8, right: 8,
              background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 6, cursor: 'pointer', color: '#fff',
              padding: '3px 8px', fontSize: 11, fontWeight: 600,
            }}
          >✕ Close Player</button>
        </div>
      )}

      {/* Video List */}
      <div style={{ overflowY: 'auto', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        {C_VIDEOS.map((v, i) => {
          const lc = LEVEL_COLOR[v.level];
          const isPlaying = activeId === v.videoId && v.videoId !== null;
          const isLocked = v.locked;

          return (
            <motion.div key={i}
              whileHover={!isLocked ? { x: 3 } : {}}
              onClick={() => !isLocked && setActiveId(isPlaying ? null : v.videoId)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '11px 13px',
                background: isPlaying
                  ? 'rgba(239,68,68,0.2)'
                  : isLocked
                    ? 'rgba(245,160,0,0.06)'
                    : 'rgba(255,255,255,0.05)',
                borderRadius: 12,
                border: `1px solid ${isPlaying ? 'rgba(239,68,68,0.6)'
                    : isLocked ? 'rgba(245,160,0,0.25)'
                      : 'rgba(255,255,255,0.1)'
                  }`,
                cursor: isLocked ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                opacity: isLocked ? 0.75 : 1,
              }}
              onMouseEnter={e => {
                if (!isLocked && !isPlaying) e.currentTarget.style.background = 'rgba(239,68,68,0.12)';
              }}
              onMouseLeave={e => {
                if (!isLocked && !isPlaying) e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
            >
              {/* Thumbnail / Lock icon */}
              <div style={{
                width: 58, height: 40, borderRadius: 7, flexShrink: 0, overflow: 'hidden',
                background: isLocked ? 'rgba(245,160,0,0.1)' : '#111827',
                border: `1px solid ${isLocked ? 'rgba(245,160,0,0.3)' : 'rgba(239,68,68,0.35)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
              }}>
                {isLocked ? (
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 16 }}>🔒</div>
                  </div>
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg`}
                      alt={v.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                    {isPlaying && (
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'rgba(239,68,68,0.55)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span style={{ fontSize: 15, color: '#fff' }}>▶</span>
                      </div>
                    )}
                    {!isPlaying && (
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'rgba(0,0,0,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.9)' }}>▶</span>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  color: isLocked ? '#f5a000' : isPlaying ? '#fca5a5' : '#ffffff',
                  fontSize: 11, fontWeight: 700,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  letterSpacing: 0.2,
                }}>{v.title}</div>
                <div style={{
                  fontSize: 10,
                  color: isLocked ? 'rgba(245,160,0,0.65)' : 'rgba(201,223,247,0.7)',
                  marginTop: 3,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {v.desc}
                </div>
                <div style={{ display: 'flex', gap: 6, marginTop: 4, alignItems: 'center' }}>
                  <span style={{ fontSize: 9, color: 'rgba(201,223,247,0.5)' }}>{v.dur}</span>
                  <span style={{
                    fontSize: 9, padding: '2px 8px', borderRadius: 6, fontWeight: 700,
                    background: lc.bg, color: lc.text,
                  }}>{v.level}</span>
                </div>
              </div>

              {/* Play / Lock indicator */}
              <div style={{
                flexShrink: 0, width: 26, height: 26, borderRadius: '50%',
                background: isLocked
                  ? 'rgba(245,160,0,0.15)'
                  : isPlaying ? 'rgba(239,68,68,0.5)' : 'rgba(239,68,68,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `1px solid ${isLocked ? 'rgba(245,160,0,0.4)'
                    : isPlaying ? 'rgba(239,68,68,0.8)' : 'rgba(239,68,68,0.4)'
                  }`,
              }}>
                <span style={{
                  fontSize: isLocked ? 11 : 9,
                  color: isLocked ? '#f5a000' : isPlaying ? '#fff' : '#fca5a5',
                }}>
                  {isLocked ? '🔒' : isPlaying ? '■' : '▶'}
                </span>
              </div>
            </motion.div>
          );
        })}

        {/* Channel Link */}
        <a
          href="https://youtube.com/@codingboss-s7l"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            padding: '8px 12px', borderRadius: 10, marginTop: 4,
            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)',
            textDecoration: 'none', color: '#fca5a5', fontSize: 11, fontWeight: 600,
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(239,68,68,0.1)'}
        >
          <Youtube size={13} color="#ef4444" />
          Visit CodingBoss Channel
          <ExternalLink size={11} />
        </a>
      </div>
    </motion.div>
  );
}


/* ── Button definitions ── */
const BUTTONS = [
  {
    key: 'voice', label: 'Voice',
    icon: <Mic size={20} />,
    activeGrad: `linear-gradient(135deg,${T.accent1},${T.accent3})`,
    idleColor: T.accent2,
    border: `1px solid ${T.border}`,
    glow: 'rgba(11,103,201,0.45)',
  },
  {
    key: 'video', label: 'Videos',
    icon: <Youtube size={20} />,
    activeGrad: 'linear-gradient(135deg,#ef4444,#b91c1c)',
    idleColor: '#fca5a5',
    border: '1px solid rgba(239,68,68,0.35)',
    glow: 'rgba(239,68,68,0.45)',
  },
  {
    key: 'chat', label: 'AI Tutor',
    icon: <MessageCircle size={20} />,
    activeGrad: `linear-gradient(135deg,${T.purple},#7c3aed)`,
    idleColor: '#a5b4fc',
    border: '1px solid rgba(99,102,241,0.35)',
    glow: 'rgba(99,102,241,0.45)',
  },
];

export default function RightPanel({ currentSlide }) {
  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const toggle = (k) => setActive(p => p === k ? null : k);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    const handleOpenVideo = () => setActive('video');
    window.addEventListener('open-video-panel', handleOpenVideo);
    return () => window.removeEventListener('open-video-panel', handleOpenVideo);
  }, []);

  return (
    <>
      {/* ── Sidebar buttons ── */}
      <div style={{
        position: 'fixed',
        zIndex: 300,
        display: 'flex',
        gap: isMobile ? 14 : 10,
        ...(isMobile ? {
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          flexDirection: 'row',
          background: 'rgba(10,15,40,0.7)',
          padding: '10px 20px',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        } : {
          right: 18,
          top: '50%',
          transform: 'translateY(-50%)',
          flexDirection: 'column',
        })
      }}>
        {BUTTONS.map(btn => {
          const on = active === btn.key;
          return (
            <motion.button key={btn.key} onClick={() => toggle(btn.key)}
              whileHover={{ scale: 1.1, x: -4 }} whileTap={{ scale: 0.93 }}
              title={btn.label}
              style={{
                width: 52, height: 52, borderRadius: 14, border: btn.border, cursor: 'pointer',
                background: on ? btn.activeGrad : 'rgba(255,255,255,0.05)',
                color: on ? '#fff' : btn.idleColor,
                boxShadow: on
                  ? `0 6px 22px ${btn.glow}, 0 0 0 1.5px ${btn.idleColor}44`
                  : `0 4px 14px rgba(0,0,0,0.55)`,
                backdropFilter: 'blur(14px)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 2,
                transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
                position: 'relative',
              }}
            >
              {btn.icon}
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.03em', opacity: 0.85 }}>
                {btn.label}
              </span>
              {/* Active dot */}
              {on && (
                <motion.span layoutId="rp-dot"
                  style={{
                    position: 'absolute', top: 5, right: 5, width: 7, height: 7,
                    borderRadius: '50%', background: '#fff'
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* ── Panels ── */}
      <AnimatePresence>
        {active === 'voice' && (
          <VoiceOverPlayer key="vox" currentSlide={currentSlide} isOpen onToggle={() => setActive(null)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active === 'video' && (
          <VideoPanel key="vid" onClose={() => setActive(null)} isMobile={isMobile} />
        )}
      </AnimatePresence>

      {/* Chatbot handles its own AnimatePresence internally */}
      <Chatbot isOpen={active === 'chat'} onToggle={() => setActive(null)} />
    </>
  );
}
