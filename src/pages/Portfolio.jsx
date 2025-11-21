import React from 'react';
import MatrixRain from '../components/cyber/MatrixRain';
import CyberGrid from '../components/cyber/CyberGrid';
import TerminalHero from '../components/cyber/TerminalHero';
import AboutSection from '../components/cyber/AboutSection';
import ProjectsSection from '../components/cyber/ProjectsSection';
import SkillsSection from '../components/cyber/SkillsSection';
import CertificationsSection from '../components/cyber/CertificationsSection';
import ContactSection from '../components/cyber/ContactSection';

export default function pages() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Background Effects */}
      <MatrixRain />
      <CyberGrid />

      {/* Main Content */}
      <div className="relative z-10">
        <TerminalHero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />

        {/* Footer */}
        <footer className="border-t-2 border-green-500 bg-black/90 py-8 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="font-mono text-green-500">
                © 2024 Jose_Matheus_Dev. ALL_RIGHTS_RESERVED.
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono text-gray-400 text-sm">
                  SYSTEM_OPERATIONAL
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        body {
          background-color: #000000;
          overflow-x: hidden;
        }

        ::selection {
          background-color: #00ff41;
          color: #000000;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #000000;
          border-left: 1px solid #00ff41;
        }

        ::-webkit-scrollbar-thumb {
          background: #00ff41;
          border: 2px solid #000000;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #00ffff;
        }
      `}</style>
    </div>
  );
}
