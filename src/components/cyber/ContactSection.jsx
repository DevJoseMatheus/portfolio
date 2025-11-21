import React, { useState } from 'react';
import { Send, Mail, MapPin, Smartphone, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import GlitchText from './GlitchText';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate sending
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative py-20 px-6">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block border-2 border-green-500 px-6 py-2 mb-6 bg-black/50">
            <span className="text-green-500 font-mono text-sm">&lt; SEÇÃO_05 /&gt;</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <GlitchText className="text-green-500">CONTATO</GlitchText>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <div className="border-2 border-green-500 bg-black/80 p-8 relative overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyan-400" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-green-500 font-mono text-sm mb-2">
                  {'>'} NOME_DO_USUÁRIO
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-green-500 p-3 text-white font-mono focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)] outline-none transition-all"
                  placeholder="Digite seu nome..."
                  required
                />
              </div>

              <div>
                <label className="block text-green-500 font-mono text-sm mb-2">
                  {'>'} EMAIL_ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-black border border-green-500 p-3 text-white font-mono focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)] outline-none transition-all"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-green-500 font-mono text-sm mb-2">
                  {'>'} ASSUNTO
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full bg-black border border-green-500 p-3 text-white font-mono focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)] outline-none transition-all"
                  placeholder="Assunto da mensagem..."
                  required
                />
              </div>

              <div>
                <label className="block text-green-500 font-mono text-sm mb-2">
                  {'>'} MENSAGEM
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-black border border-green-500 p-3 text-white font-mono focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)] outline-none transition-all resize-none"
                  placeholder="Digite sua mensagem..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-green-500 text-black font-mono font-bold py-3 px-6 hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>ENVIANDO...</>
                ) : status === 'success' ? (
                  <>MENSAGEM ENVIADA!</>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    ENVIAR_MENSAGEM
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="border border-green-500 bg-black/50 p-6 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 border-2 border-green-500 bg-green-950">
                  <Mail className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-mono">EMAIL</div>
                  <div className="text-white font-mono">dev.josematheus@gmail.com</div>
                </div>
              </div>
            </div>

            <div className="border border-green-500 bg-black/50 p-6 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 border-2 border-cyan-400 bg-cyan-950">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-mono">LOCALIZAÇÃO</div>
                  <div className="text-white font-mono">Prenambuco, Brasil</div>
                </div>
              </div>
            </div>

            <div className="border border-green-500 bg-black/50 p-6 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 border-2 border-green-500 bg-green-950">
                  <Smartphone className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-mono">TELEFONE</div>
                  <div className="text-white font-mono">+55 (87) 98831-4622</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-2 border-green-500 bg-black/80 p-6">
              <h3 className="text-green-500 font-mono text-lg mb-6">{'>'} REDES_SOCIAIS</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/DevJoseMatheus"
                  className="flex-1 border border-green-500 p-4 hover:bg-green-500 hover:text-black transition-all flex items-center justify-center"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/ujosematheus/"
                  className="flex-1 border border-cyan-400 p-4 hover:bg-cyan-400 hover:text-black transition-all flex items-center justify-center"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/matheus31042002"
                  className="flex-1 border border-green-500 p-4 hover:bg-green-500 hover:text-black transition-all flex items-center justify-center"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Status Display */}
            <div className="border border-green-500 bg-black/50 p-4">
              <div className="flex items-center justify-between font-mono text-sm">
                <span className="text-gray-400">STATUS:</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-500">DISPONÍVEL PARA PROJETOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}