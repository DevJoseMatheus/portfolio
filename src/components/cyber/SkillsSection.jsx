import React from 'react';
import { Code, Database, Lock, Cpu, Layers, Terminal } from 'lucide-react';
import GlitchText from './GlitchText';

export default function SkillsSection() {
  const skills = [
    { name: 'React / Next.js', level: 50, icon: Code, color: 'green' },
    { name: 'Node.js / Express', level: 25, icon: Terminal, color: 'cyan' },
    { name: 'PostgreSQL / MongoDB', level: 10, icon: Database, color: 'green' },
    { name: 'AWS / Cloud', level: 10, icon: Layers, color: 'cyan' },
    { name: 'Segurança / DevOps', level: 0, icon: Lock, color: 'green' },
    { name: 'IA / Machine Learning', level: 0, icon: Cpu, color: 'cyan' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative py-20 px-6">
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block border-2 border-green-500 px-6 py-2 mb-6 bg-black/50">
            <span className="text-green-500 font-mono text-sm">&lt; SEÇÃO_03 /&gt;</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <GlitchText className="text-green-500">HABILIDADES</GlitchText>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="border border-green-500/30 bg-black/50 p-6 relative overflow-hidden group hover:border-green-500 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 border-2 ${
                    skill.color === 'green' ? 'border-green-500 bg-green-950' : 'border-cyan-400 bg-cyan-950'
                  }`}>
                    <skill.icon className={`w-6 h-6 ${
                      skill.color === 'green' ? 'text-green-500' : 'text-cyan-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-mono font-bold text-white">{skill.name}</h3>
                    <p className="text-xs font-mono text-gray-500">PROFICIENCY LEVEL</p>
                  </div>
                </div>
                <div className={`text-3xl font-bold font-mono ${
                  skill.color === 'green' ? 'text-green-500' : 'text-cyan-400'
                }`}>
                  {skill.level}%
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-3 bg-gray-900 border border-green-900 overflow-hidden">
                <div
                  className={`h-full ${
                    skill.color === 'green' 
                      ? 'bg-gradient-to-r from-green-500 to-green-300' 
                      : 'bg-gradient-to-r from-cyan-500 to-cyan-300'
                  } relative overflow-hidden`}
                  style={{ width: `${skill.level}%` }}
                >
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </div>
                
                {/* Grid overlay on progress bar */}
                <div className="absolute inset-0 flex">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="flex-1 border-r border-black/20" />
                  ))}
                </div>
              </div>

              {/* Corner markers */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-400 opacity-30" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-400 opacity-30" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="border border-green-500 bg-black/50 p-6 text-center">
            <div className="text-4xl font-bold text-green-500 mb-2 font-mono">5+</div>
            <div className="text-sm text-gray-400 font-mono">LINGUAGENS</div>
          </div>
          <div className="border border-cyan-500 bg-black/50 p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2 font-mono">5+</div>
            <div className="text-sm text-gray-400 font-mono">FRAMEWORKS</div>
          </div>
          <div className="border border-green-500 bg-black/50 p-6 text-center">
            <div className="text-4xl font-bold text-green-500 mb-2 font-mono">1+</div>
            <div className="text-sm text-gray-400 font-mono">ANOS EXP.</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}