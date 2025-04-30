import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className={`text-xl font-bold ${isScrolled ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
              Tejashwani Dixit
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'skills', 'achievements', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`capitalize text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-800 dark:text-gray-200'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://github.com/Tej-ashwani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/tejashwani-dixit-6ab978252"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white dark:bg-slate-900 z-40 pt-16">
          <nav className="flex flex-col items-center space-y-6 pt-8">
            {['home', 'about', 'projects', 'skills', 'achievements', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="capitalize text-gray-800 dark:text-gray-200 text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))}
            <div className="flex space-x-6 mt-4">
              <a
                href="https://github.com/Tej-ashwani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tejashwani-dixit-6ab978252"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;