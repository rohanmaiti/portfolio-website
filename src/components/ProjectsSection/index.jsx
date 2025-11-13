import { Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ScrollIndicator from '../ScrollIndicator';

const ProjectsSection = ({ 
  darkMode, 
  projectFilter, 
  setProjectFilter, 
  categories, 
  filteredProjects, 
  projectScrollRef, 
  handleProjectScroll, 
  showMoreProjects 
}) => {
  return (
    <section id="projects" className={`min-h-screen flex pt-10 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-slate-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          className={`text-4xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        
        {/* Filter */}
        <motion.div 
          className="flex justify-center items-center mb-8 space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Filter className={darkMode ? 'text-slate-400' : 'text-gray-600'} size={20} />
          <div className="flex space-x-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setProjectFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  projectFilter === cat
                    ? darkMode 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-green-600 text-white'
                    : darkMode
                      ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="relative">
          <div 
            ref={projectScrollRef}
            onScroll={handleProjectScroll}
            className="overflow-y-auto max-h-[500px] pr-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} idx={idx} darkMode={darkMode} />
              ))}
            </div>
          </div>

          <ScrollIndicator show={showMoreProjects && filteredProjects.length > 3} darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
