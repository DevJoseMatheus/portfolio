import React from 'react';
import { ExternalLink, Github, Lock, Unlock } from 'lucide-react';
import GlitchText from './GlitchText';

export default function ProjectsSection() {
  const projects = [
    {
      title: '', // Nome do Projetos
      description: '', // descrição do projetos
      tech: ['', '', ''], // Linguagem usada no projetos
      status: '', // privado ou publicas
      threat: '', // alto, medio ou baixo
      link: "", // link do site
      github: "" // link do github
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative py-20 px-6">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block border-2 border-green-500 px-6 py-2 mb-6 bg-black/50">
            <span className="text-green-500 font-mono text-sm">&lt; SEÇÃO_02 /&gt;</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <GlitchText className="text-green-500">PROJETOS</GlitchText>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border-2 border-green-500 bg-black/80 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all"
            >
              {/* Top bar with threat level */}
              <div className="bg-gradient-to-r from-green-950 to-black p-3 flex justify-between items-center border-b border-green-500">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    project.threat === 'LOW' ? 'bg-green-500' :
                    project.threat === 'MEDIUM' ? 'bg-yellow-500' : 'bg-red-500'
                  } animate-pulse`} />
                  <span className="text-xs font-mono text-gray-400">
                    THREAT: {project.threat}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {project.status === 'OPERATIONAL' ? (
                    <Unlock className="w-4 h-4 text-green-500" />
                  ) : (
                    <Lock className="w-4 h-4 text-cyan-400" />
                  )}
                  <span className="text-xs font-mono text-green-500">{project.status}</span>
                </div>
              </div>

              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-green-500 mb-3 font-mono group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 font-mono text-sm">
                  {'>'} {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="border border-cyan-500 px-3 py-1 text-xs font-mono text-cyan-400 bg-cyan-950/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a href={project.link} className="flex-1 border border-green-500 py-2 px-4 text-green-500 font-mono text-sm hover:bg-green-500 hover:text-black transition-all flex items-center justify-center gap-2" >
                    <ExternalLink className="w-4 h-4" />
                    ACESSAR
                  </a>
                  <a href={project.github} className="border border-green-500 py-2 px-4 text-green-500 font-mono text-sm hover:bg-green-500 hover:text-black transition-all">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 opacity-50" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 opacity-50" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400 opacity-50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 opacity-50" />

              {/* Glitch effect on hover */}
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}