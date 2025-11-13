import { Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { experiences, certifications } from '@/data/constants';

const ExperienceSection = ({ darkMode, experienceScrollRef, scrollExperience }) => {
  return (
    <section id="experience" className="min-h-screen flex pt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          className={`text-4xl font-bold mb-12 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Briefcase className="inline-block mr-3" size={40} />
          Experience
        </motion.h2>

        <div className="relative">
          <motion.button
            onClick={() => scrollExperience('left')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-all duration-300 ${
              darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
            } text-white`}
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <div 
            ref={experienceScrollRef}
            className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide scroll-smooth px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx} 
                className={`min-w-[400px] p-8 rounded-2xl shadow-xl transition-all duration-300 ${
                  darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
                }`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{exp.icon}</div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      darkMode ? 'text-blue-400' : 'text-green-600'
                    }`}>{exp.title}</h3>
                    <p className={`text-lg mb-2 ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                      {exp.company} - {exp.location}
                    </p>
                    <p className={`mb-4 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                      {exp.period}
                    </p>
                    <p className={darkMode ? 'text-slate-300' : 'text-gray-700'}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => scrollExperience('right')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-all duration-300 ${
              darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
            } text-white`}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
        
        <div className="mt-12">
          <motion.h3 
            className={`text-2xl font-bold mb-6 text-center ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Certifications
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div 
                key={idx} 
                className={`p-4 rounded-xl transition-all duration-300 ${
                  darkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-green-50 border border-green-200'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <p className={darkMode ? 'text-slate-300' : 'text-gray-700'}>{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
