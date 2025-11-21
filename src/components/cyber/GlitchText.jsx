import React from 'react';

export default function GlitchText({ children, className = '' }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        className="absolute top-0 left-0 w-full h-full text-cyan-400 opacity-70"
        style={{
          animation: 'glitch1 0.3s infinite',
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
        }}
      >
        {children}
      </span>
      <span
        className="absolute top-0 left-0 w-full h-full text-pink-500 opacity-70"
        style={{
          animation: 'glitch2 0.3s infinite',
          clipPath: 'polygon(0 60%, 100% 60%, 100% 100%, 0 100%)',
        }}
      >
        {children}
      </span>
      <style jsx>{`
        @keyframes glitch1 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }
        @keyframes glitch2 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(2px, -2px); }
          66% { transform: translate(-2px, 2px); }
        }
      `}</style>
    </div>
  );
}