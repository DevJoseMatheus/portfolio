import React from 'react';

export default function CyberGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Vertical lines */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-green-500 to-transparent"
            style={{ left: `${i * 5}%` }}
          />
        ))}
      </div>
      {/* Horizontal lines */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"
            style={{ top: `${i * 5}%` }}
          />
        ))}
      </div>
      {/* Corner borders */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-green-500 opacity-40" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-green-500 opacity-40" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-green-500 opacity-40" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-green-500 opacity-40" />
    </div>
  );
}