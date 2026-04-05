const fs = require('fs');

const fileRightPanel = 'c:/Users/acer/Downloads/C-Enhanced-Updated/C-Enhanced-Updated/src/components/RightPanel.jsx';
let contentRP = fs.readFileSync(fileRightPanel, 'utf8');

if (!contentRP.includes('open-video-action')) {
  contentRP = contentRP.replace(
    'const toggle = (k) => setActive(p => p === k ? null : k);',
    `const toggle = (k) => setActive(p => p === k ? null : k);

  React.useEffect(() => {
    const handler = () => setActive('video');
    window.addEventListener('open-video-action', handler);
    return () => window.removeEventListener('open-video-action', handler);
  }, []);`
  );
  fs.writeFileSync(fileRightPanel, contentRP);
}

const fileCourse = 'c:/Users/acer/Downloads/C-Enhanced-Updated/C-Enhanced-Updated/src/pages/CCourse.jsx';
let contentCourse = fs.readFileSync(fileCourse, 'utf8');

// 1. Mobile responsive headings
contentCourse = contentCourse.replace(/text-5xl md:text-6xl/g, 'text-4xl md:text-5xl lg:text-6xl');

// 2. Remove bullet points
contentCourse = contentCourse.replace(/list-disc/g, 'list-none');

// 3. Make the image on the first slide clickable to open sidebar video option
contentCourse = contentCourse.replace(
  /<motion\.div animate=\{\{ y: \[0, -18, 0\] \}\} transition=\{\{ repeat: Infinity, duration: 3\.5, ease: 'easeInOut' \}\}\s+style=\{\{ marginBottom: 24, filter: 'drop-shadow\\(0 0 40px rgba\\(101,154,211,0\.6\\)\\)' \}\}>/,
  `<motion.div animate={{ y: [0, -18, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                  style={{ marginBottom: 24, filter: 'drop-shadow(0 0 40px rgba(101,154,211,0.6))', cursor: 'pointer' }}
                  onClick={() => window.dispatchEvent(new Event('open-video-action'))} title="Click to view Video Resources">`
);

// 4. Feature slide colors: make 2 colors matching the webpage (blue and cyan, matching the navy theme)
contentCourse = contentCourse.replace(
  /\{ delay: 0\.1, bg: 'bg-amber-50 border-black-200', icon: '⚡', title: 'Fast & Efficient', titleC: 'text-amber-900'/g,
  `{ delay: 0.1, bg: 'bg-blue-900/30 border-blue-400/40 backdrop-blur-md', icon: '⚡', title: 'Fast & Efficient', titleC: 'text-blue-200'`
);
contentCourse = contentCourse.replace(
  /\{ delay: 0\.2, bg: 'bg-blue-50 border-blue-200', icon: '🔩', title: 'Low-Level Memory Access', titleC: 'text-blue-200'/g,
  `{ delay: 0.2, bg: 'bg-cyan-900/30 border-cyan-400/40 backdrop-blur-md', icon: '🔩', title: 'Low-Level Memory Access', titleC: 'text-cyan-200'`
);
contentCourse = contentCourse.replace(
  /\{ delay: 0\.3, bg: 'bg-emerald-50 border-emerald-200', icon: '🌍', title: 'Highly Portable', titleC: 'text-emerald-900'/g,
  `{ delay: 0.3, bg: 'bg-blue-900/30 border-blue-400/40 backdrop-blur-md', icon: '🌍', title: 'Highly Portable', titleC: 'text-blue-200'`
);
contentCourse = contentCourse.replace(
  /\{ delay: 0\.4, bg: 'bg-purple-50 border-purple-200', icon: '📐', title: 'Structured Programming', titleC: 'text-purple-900'/g,
  `{ delay: 0.4, bg: 'bg-cyan-900/30 border-cyan-400/40 backdrop-blur-md', icon: '📐', title: 'Structured Programming', titleC: 'text-cyan-200'`
);
contentCourse = contentCourse.replace(
  /\{ delay: 0\.5, bg: 'bg-rose-50 border-rose-200', icon: '📦', title: 'Rich Standard Library', titleC: 'text-rose-900'/g,
  `{ delay: 0.5, bg: 'bg-blue-900/30 border-blue-400/40 backdrop-blur-md', icon: '📦', title: 'Rich Standard Library', titleC: 'text-blue-200'`
);
contentCourse = contentCourse.replace(
  /\{ delay: 0\.6, bg: 'bg-cyan-50 border-cyan-200', icon: '🏗️', title: 'Foundation of All Languages', titleC: 'text-cyan-900'/g,
  `{ delay: 0.6, bg: 'bg-cyan-900/30 border-cyan-400/40 backdrop-blur-md', icon: '🏗️', title: 'Foundation of All Languages', titleC: 'text-cyan-200'`
);

// We need to fix the <p className="text-blue-1000/70">{desc}</p> in the features map loop too, text-blue-1000 is invalid tailwind.
contentCourse = contentCourse.replace(
  /<p className="text-blue-1000\/70">\{desc\}<\/p>/g,
  '<p className="text-blue-200/70">{desc}</p>'
);

fs.writeFileSync(fileCourse, contentCourse);

console.log('Update script finished successfully.');
