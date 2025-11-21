import React, { useState, useEffect } from 'react';
import { Terminal, Wifi, Shield, Skull } from 'lucide-react';
import GlitchText from './GlitchText';

export default function TerminalHero() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const terminalSequence = [
    '> INITIALIZING SECURE CONNECTION...',
    '> BYPASSING FIREWALL... [OK]',
    '> DECRYPTING DATA STREAM... [OK]',
    '> ACCESSING PORTFOLIO.SYS... [OK]',
    '> WELCOME TO THE SYSTEM_'
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let text = '';

    const typeInterval = setInterval(() => {
      if (currentLine < terminalSequence.length) {
        if (currentChar < terminalSequence[currentLine].length) {
          text += terminalSequence[currentLine][currentChar];
          setDisplayText(text);
          currentChar++;
        } else {
          text += '\n';
          setDisplayText(text);
          currentLine++;
          currentChar = 0;
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="w-full h-1 bg-green-500 opacity-20 animate-scan" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        {/* Terminal Window */}
        <div className="bg-black border-2 border-green-500 shadow-[0_0_30px_rgba(0,255,65,0.3)] mb-12">
          {/* Terminal Header */}
          <div className="bg-gradient-to-r from-green-950 to-black border-b border-green-500 p-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <Terminal className="w-4 h-4 text-green-500 ml-2" />
            <span className="text-green-500 text-sm font-mono">root@cyberspace:~$</span>
          </div>
          
          {/* Terminal Content */}
          <div className="p-8 text-left font-mono text-green-500">
            <pre className="whitespace-pre-wrap">
              {displayText}
              {showCursor && <span className="bg-green-500 animate-pulse">_</span>}
            </pre>
          </div>
        </div>

        {/* Hero Content */}
        <div className="space-y-8">
          {/* Avatar/Mask */}
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center border-2 border-green-500 shadow-[0_0_40px_rgba(0,255,65,0.6)]">
              <Skull className="w-16 h-16 text-black" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Wifi className="w-3 h-3 text-black" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <GlitchText className="text-green-500">José_Matheus_Dev</GlitchText>
          </h1>

          <div className="flex items-center justify-center gap-4 text-cyan-400 font-mono">
            <Shield className="w-5 h-5" />
            <span className="text-lg md:text-xl">[ FULL STACK ]</span>
            <Shield className="w-5 h-5" />
          </div>

          <p className="text-gray-400 font-mono text-lg max-w-2xl mx-auto">
            {'>'} Penetrando sistemas, construindo soluções, quebrando barreiras.
          </p>

          {/* HUD Elements */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 font-mono text-sm">
            <div className="border border-green-500 px-4 py-2 bg-black/50">
              <span className="text-green-500">STATUS:</span>{' '}
              <span className="text-white">ONLINE</span>
            </div>
            <div className="border border-cyan-500 px-4 py-2 bg-black/50">
              <span className="text-cyan-400">LATENCY:</span>{' '}
              <span className="text-white">12ms</span>
            </div>
            <div className="border border-green-500 px-4 py-2 bg-black/50">
              <span className="text-green-500">SECURITY:</span>{' '}
              <span className="text-white">MAXIMUM</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-green-500 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-green-500 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </section>
  );
}