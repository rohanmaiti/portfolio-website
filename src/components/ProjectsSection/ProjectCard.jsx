import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, idx, darkMode }) => {
  return (
    <motion.div 
      className={`p-6 rounded-2xl shadow-xl transition-all duration-300 ${
        darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-4xl">{project.icon}</span>
        </div>
        {project.status && (
          <span className={`px-3 py-1 rounded-full text-xs ${
            darkMode ? 'bg-blue-900/30 text-blue-200 border border-blue-700/50' : 'bg-green-50 text-green-800 border border-green-200'
          }`}>
            {project.status}
          </span>
        )}
      </div>
      <h3 className={`text-lg font-bold mb-2 ${
        darkMode ? 'text-blue-400' : 'text-green-600'
      }`}>{project.title}</h3>
      <p className={`mb-4 text-sm ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 3).map((tech, i) => (
          <span key={i} className={`px-2 py-1 rounded text-xs ${
            darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-700'
          }`}>
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {project.github && (
          <motion.a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className={`flex items-center space-x-1 transition-colors duration-300 ${
              darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-green-600 hover:text-green-700'
            }`}
          >
            <Github size={18} />
            <span>Code</span>
          </motion.a>
        )}
        {project.live && (
          <motion.a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className={`flex items-center space-x-1 transition-colors duration-300 ${
              darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-green-600 hover:text-green-700'
            }`}
          >
            <ExternalLink size={18} />
            <span>Live</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
