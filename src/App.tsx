import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpaceBackground from './components/SpaceBackground';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
      >
        <SpaceBackground />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Achievements />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </motion.div>
    </ThemeProvider>
  );
}

export default App;