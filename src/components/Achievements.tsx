import React from 'react';
import { achievementsData } from '../data/achievementsData';
import { Award } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Key milestones and recognitions from my professional journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((achievement) => (
            <div 
              key={achievement.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-700 mb-3">{achievement.description}</p>
                  {achievement.metrics && (
                    <p className="bg-blue-50 inline-block px-3 py-1 rounded text-blue-700 font-medium">
                      {achievement.metrics}
                    </p>
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

export default Achievements;