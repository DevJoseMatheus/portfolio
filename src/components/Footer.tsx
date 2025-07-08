
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left - Name and Status */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-white font-semibold">michael-weaver</span>
            </div>
            <span className="text-gray-400 text-sm">Front-end Developer</span>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/example" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/example" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://twitter.com/example" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="mailto:michael.weaver@example.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-4 pt-4 border-t border-gray-700/50 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Michael Weaver. Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;