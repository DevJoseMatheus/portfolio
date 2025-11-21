import React from 'react';
import { Award, Shield, CheckCircle, Star } from 'lucide-react';
import GlitchText from './GlitchText';

export default function CertificationsSection() {
  const certifications = [
    {
      title: 'Ensino Medio',
      org: 'SESI',
      year: '2019 - 2021',
      level: '',
      verified: true
    },
    {
      title: 'Designer Grafico',
      org: 'Microlins',
      year: '2024',
      level: 'PROFESSIONAL',
      verified: true
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 'EXPERT': return 'from-red-500 to-pink-500';
      case 'ADVANCED': return 'from-purple-500 to-pink-500';
      case 'PROFESSIONAL': return 'from-green-500 to-cyan-400';
      default: return 'from-blue-500 to-cyan-400';
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative py-20 px-6">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block border-2 border-green-500 px-6 py-2 mb-6 bg-black/50">
            <span className="text-green-500 font-mono text-sm">&lt; SEÇÃO_04 /&gt;</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <GlitchText className="text-green-500">CERTIFICAÇÕES</GlitchText>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto" />
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="border-2 border-green-500/30 bg-black/80 relative overflow-hidden group hover:border-green-500 hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] transition-all"
            >
              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${getLevelColor(cert.level)}`} />

              <div className="p-6">
                {/* Badge Icon */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="p-3 border-2 border-green-500 bg-green-950/30 inline-block">
                    <Shield className="w-8 h-8 text-green-500" />
                  </div>
                  {cert.verified && (
                    <div className="flex items-center gap-1 text-green-500">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-xs font-mono">VERIFIED</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 font-mono group-hover:text-green-500 transition-colors">
                  {cert.title}
                </h3>

                {/* Organization */}
                <p className="text-cyan-400 text-sm font-mono mb-4">
                  {cert.org}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-green-900">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs font-mono text-gray-400">{cert.level}</span>
                  </div>
                  <div className="text-xs font-mono text-green-500">{cert.year}</div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400/30" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400/30" />

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-12 border-2 border-green-500 bg-black/50 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white font-mono">2</div>
              <div className="text-xs text-gray-400 font-mono mt-1">CERTIFICAÇÕES</div>
            </div>
            <div>
              <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white font-mono">100%</div>
              <div className="text-xs text-gray-400 font-mono mt-1">VERIFICADO</div>
            </div>
            <div>
              <Star className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white font-mono">3</div>
              <div className="text-xs text-gray-400 font-mono mt-1">EXPERT LEVEL</div>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white font-mono">2024</div>
              <div className="text-xs text-gray-400 font-mono mt-1">ÚLTIMA CERT.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}