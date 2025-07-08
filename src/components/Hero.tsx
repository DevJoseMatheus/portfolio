
import { ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-gray-300 text-lg">Olá a todos. Eu sou</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          José Matheus
        </h1>
        <p className="text-blue-400 text-xl">
          &gt; Full-Stack Developer
        </p>
      </div>
      
      <div className="space-y-2 text-gray-500">
        <p>// complete o jogo para continuar</p>
        <p>// encontre meu perfil no Github:</p>
        <div className="flex items-center space-x-2">
          <span className="text-blue-400">const</span>
          <span className="text-cyan-400">githubLink</span>
          <span className="text-white">=</span>
          <a 
            href="https://github.com/DevJoseMatheus" 
            className="text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center space-x-1"
          >
            <span>"https://github.com/DevJoseMatheus"</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;