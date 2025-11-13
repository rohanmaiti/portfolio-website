import { Code, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutCard = ({ darkMode, achievements }) => {
  return (
    <motion.div
      className={`md:col-span-2 md:row-span-2 p-8 rounded-3xl shadow-2xl ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">👨‍💻</span>
        <h3 className={`text-3xl font-bold ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>Hey, I'm Rohan Maiti!</h3>
      </div>

      <p className={`text-lg leading-relaxed mb-6 ${
        darkMode ? 'text-slate-300' : 'text-gray-700'
      }`}>
        I'm a passionate <span className={`font-bold ${darkMode ? 'text-blue-400' : 'text-green-600'}`}>Full Stack Developer</span> and 
        Computer Science student at <span className="font-semibold">Chitkara University</span> with a stellar <span className={`font-bold ${darkMode ? 'text-blue-400' : 'text-green-600'}`}>9.8 CGPA</span>. 
        Currently working as a Full Stack Intern at <span className="font-semibold">Wizcommerce</span>, 
        where I build cutting-edge web applications using React.js and FastAPI.
      </p>

      <div className={`p-6 rounded-2xl mb-6 ${
        darkMode ? 'bg-slate-800' : 'bg-gray-50'
      }`}>
        <h4 className={`text-xl font-bold mb-4 flex items-center gap-2 ${
          darkMode ? 'text-blue-400' : 'text-green-600'
        }`}>
          <Code size={24} /> What I Do
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>💻 Development</p>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Building full-stack web apps with MERN stack, creating responsive UIs with React & Tailwind
            </p>
          </div>
          <div>
            <p className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>⚡ Problem Solving</p>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Active on competitive programming platforms, solving DSA challenges daily
            </p>
          </div>
          <div>
            <p className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>🔧 DevOps</p>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Working with Docker, CI/CD pipelines, and cloud services
            </p>
          </div>
          <div>
            <p className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>🚀 Innovation</p>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Building IoT solutions and exploring new technologies
            </p>
          </div>
        </div>
      </div>

      <div className={`p-6 rounded-2xl ${
        darkMode ? 'bg-slate-800' : 'bg-gray-50'
      }`}>
        <h4 className={`text-xl font-bold mb-4 flex items-center gap-2 ${
          darkMode ? 'text-blue-400' : 'text-green-600'
        }`}>
          <Award size={24} /> Achievements & Milestones
        </h4>
        <ul className="space-y-2">
          {achievements.map((achievement, idx) => (
            <li key={idx} className={`flex items-start gap-2 ${
              darkMode ? 'text-slate-300' : 'text-gray-700'
            }`}>
              <span className="text-lg">🏆</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default AboutCard;
