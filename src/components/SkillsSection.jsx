import { Code } from 'lucide-react';
import { skills, techLogos } from '@/data/constants';

const SkillsSection = ({ darkMode }) => {
  return (
    <section id="skills" className="min-h-screen flex pt-10 px-4 sm:px-6 lg:px-8">
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
          <Code className="inline-block mr-3" size={40} />
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, data], index) => (
            <motion.div 
              key={category} 
              className={`p-6 rounded-2xl shadow-xl transition-all duration-300 ${
                darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={data.logo} 
                  alt={category}
                  className="w-10 h-10 mr-3"
                />
                <h3 className={`text-xl font-bold ${
                  darkMode ? 'text-blue-400' : 'text-green-600'
                }`}>{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.items.map((skill, idx) => (
                  <motion.span 
                    key={idx} 
                    className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                      darkMode 
                        ? 'bg-blue-900/30 text-blue-200 border border-blue-700/50' 
                        : 'bg-green-50 text-green-800 border border-green-200'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {techLogos[skill] && (
                      <img src={techLogos[skill]} alt={skill} className="w-4 h-4" />
                    )}
                    <span>{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
