import React from 'react';
import { Code, Database, Shield, Zap } from 'lucide-react';
import GlitchText from './GlitchText';

export default function AboutSection() {
  const stats = [
    { label: 'PROJETOS', value: '2+', icon: Code },
    { label: 'CLIENTES', value: '0', icon: Shield },
    { label: 'TECNOLOGIAS', value: '10+', icon: Database },
    { label: 'ANOS', value: '1+', icon: Zap }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative py-20 px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block border-2 border-green-500 px-6 py-2 mb-6 bg-black/50">
            <span className="text-green-500 font-mono text-sm">&lt; SEÇÃO_01 /&gt;</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <GlitchText className="text-green-500">SOBRE_MIM</GlitchText>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image with HUD */}
          <div className="relative">
            <div className="relative border-2 border-green-500 p-1 bg-black shadow-[0_0_30px_rgba(0,255,65,0.3)]">
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
              
              <div className="relative aspect-square bg-gradient-to-br from-green-950 to-black flex items-center justify-center">
                <div className="w-48 h-48 border-4 border-green-500 rounded-full flex items-center justify-center bg-gradient-to-br from-green-500/20 to-cyan-500/20">
                  <Code className="w-24 h-24 text-green-500" />
                </div>
                
                {/* Scanning line */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="w-full h-1 bg-green-500 opacity-50 animate-scan-vertical" />
                </div>
              </div>

              {/* HUD overlay */}
              <div className="absolute top-4 left-4 bg-black/80 border border-green-500 px-3 py-1 font-mono text-xs text-green-500">
                ID: Dev_001
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 border border-green-500 px-3 py-1 font-mono text-xs text-green-500">
                STATUS: ACTIVE
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="border-l-2 border-green-500 pl-6">
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-mono">
                {'>'} Desenvolvedor Full Stack com expertise em arquitetura de sistemas complexos e segurança digital.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-mono">
                {'>'} Especializado em criar soluções inovadoras que combinam performance, escalabilidade e design futurista.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed font-mono">
                {'>'} Apaixonado por tecnologias emergentes, cibersegurança e a estética do underground digital.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="border border-green-500 bg-black/50 p-4 relative overflow-hidden group hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-cyan-400" />
                  <stat.icon className="w-8 h-8 text-green-500 mb-2" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400 font-mono">{stat.label}</div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(400px); }
        }
        .animate-scan-vertical {
          animation: scan-vertical 3s linear infinite;
        }
      `}</style>
    </section>
  );
}