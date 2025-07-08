

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header = ({ currentPage, setCurrentPage }: HeaderProps) => {
  return (
    <header className="border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="text-white font-bold">
            Jose-Matheus
          </div>
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => setCurrentPage('hello')}
              className={`transition-colors border-b-2 pb-1 ${
                currentPage === 'hello' 
                  ? 'text-orange-400 border-orange-400' 
                  : 'text-gray-400 hover:text-white border-transparent'
              }`}
            >
              _home
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`transition-colors border-b-2 pb-1 ${
                currentPage === 'about' 
                  ? 'text-orange-400 border-orange-400' 
                  : 'text-gray-400 hover:text-white border-transparent'
              }`}
            >
              _sobre-mim
            </button>
            <button 
              onClick={() => setCurrentPage('projects')}
              className={`transition-colors border-b-2 pb-1 ${
                currentPage === 'projects' 
                  ? 'text-orange-400 border-orange-400' 
                  : 'text-gray-400 hover:text-white border-transparent'
              }`}
            >
              _projetos
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`transition-colors border-b-2 pb-1 ${
                currentPage === 'contact' 
                  ? 'text-orange-400 border-orange-400' 
                  : 'text-gray-400 hover:text-white border-transparent'
              }`}
            >
              _contato
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;