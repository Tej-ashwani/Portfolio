import React from 'react';
import { experienceData } from '../data/experienceData';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            My professional journey and roles that have shaped my career.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experienceData.map((experience) => (
            <div 
              key={experience.id} 
              className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-blue-600"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{experience.role}</h3>
                  <div className="text-blue-600 font-medium">{experience.company}</div>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <Calendar size={16} className="text-gray-500 mr-1" />
                  <span className="text-gray-500">{experience.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mt-4">
                {experience.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Briefcase size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;