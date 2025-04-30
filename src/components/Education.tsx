import React from 'react';
import { educationData } from '../data/educationData';
import { GraduationCap, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {educationData.map((education) => (
            <div 
              key={education.id} 
              className="bg-white p-6 rounded-lg shadow-md mb-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{education.degree}</h3>
                  <p className="text-blue-600 font-medium">{education.institution}</p>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2">
                    <div className="text-gray-500">{education.period}</div>
                    <div className="flex items-center mt-1 md:mt-0">
                      <MapPin size={16} className="text-gray-500 mr-1" />
                      <span className="text-gray-500">{education.location}</span>
                    </div>
                  </div>
                  {education.score && (
                    <div className="mt-2 bg-blue-50 inline-block px-3 py-1 rounded text-blue-700 font-medium">
                      Score: {education.score}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;