import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-2/5"
          >
            <div className="relative">
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Tejashwani working"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-lg"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-3/5 space-y-6"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Results-driven Full-Stack Developer with expertise in React.js, Node.js, and MongoDB. Built impactful 
              projects like a Centralized T&P Portal, improving workflow efficiency by 40%. Finalist in 
              national-level hackathons with a passion for end-to-end system design.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Currently pursuing B.Tech in Computer Science at Jaypee University of Engineering & Technology (2022-2026). 
              I love mentoring peers and solving complex problems through code.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-primary font-medium">Degree:</span>
                <span className="dark:text-white">B.Tech Computer Science</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-medium">University:</span>
                <span className="dark:text-white">Jaypee University of Engineering & Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-medium">Email:</span>
                <span className="dark:text-white">tejashwanidixit77@gmail.com</span>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary flex items-center gap-2"
            >
              Contact Me <Mail size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;