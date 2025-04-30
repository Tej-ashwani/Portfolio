import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Tejashwani Dixit</h2>
            <p className="text-gray-400">Full-Stack Developer | Building Scalable Solutions</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/Tej-ashwani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tejashwani-dixit-6ab978252"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-gray-400">
              © {currentYear} Tejashwani Dixit | Built with <Heart size={14} className="inline text-red-500" /> 
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between">
            <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mb-4 md:mb-0">
              {['home', 'about', 'projects', 'skills', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })}
                  className="capitalize text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
            
            <div className="text-gray-400">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-white transition-colors"
              >
                Back to top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;