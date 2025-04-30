import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">My Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge
            and solution I've implemented.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, index) => (
                    <span 
                      key={index} 
                      className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center gap-1"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-1"
                  >
                    View Project <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;