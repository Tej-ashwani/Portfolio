import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight dark:text-white">
              Hi, I'm <span className="gradient-text">Tejashwani</span>
              <br />
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg">
              I specialize in crafting scalable web applications using React.js, Node.js, and MongoDB. 
              Passionate about solving real-world problems through innovative software solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2"
              >
                View Projects <ArrowDown size={16} />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1pWDhQtDfNL4WUooewvXdB0UPXC98eX2J/view?usp=drive_link"
                className="btn-secondary flex items-center gap-2"
              >
                Download CV <Download size={16} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-700 rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute inset-4 bg-white dark:bg-slate-800 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Tejashwani" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg">
              <p className="text-sm font-medium dark:text-white">Full-Stack</p>
              <p className="text-primary font-bold">Developer</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;