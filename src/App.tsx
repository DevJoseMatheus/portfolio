import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SnakeGame from './components/SnakeGame.';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('hello');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About/>;
      case 'projects':
        return <Projects/>;
      case 'contact':
        return <Contact/>;
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Hero/>
            <SnakeGame/>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      
    </div>
  );
}

export default App;