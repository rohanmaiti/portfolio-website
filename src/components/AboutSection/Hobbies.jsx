import { motion } from 'framer-motion';

const hobbies = [
  { icon: '✈️', hobby: 'Travelling', desc: 'Exploring new places' },
  { icon: '🏏', hobby: 'Cricket', desc: 'Weekend warrior' },
  { icon: '♟️', hobby: 'Chess', desc: 'Strategy games' },
  { icon: '🎵', hobby: 'Music', desc: 'Coding playlist' },
  { icon: '📚', hobby: 'Reading', desc: 'Tech blogs & books' }
];

const Hobbies = ({ darkMode }) => {
  return (
    <motion.div
      className={`p-6 rounded-2xl shadow-xl ${
        darkMode ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-700/50' : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200'
      }`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="text-center mb-4">
        <span className="text-5xl">🎯</span>
        <h4 className={`text-xl font-bold mt-3 ${
          darkMode ? 'text-purple-400' : 'text-purple-700'
        }`}>Hobbies</h4>
      </div>
      <div className="space-y-3">
        {hobbies.map((item, idx) => (
          <div key={idx} className={`flex items-center gap-3 p-2 rounded-lg ${
            darkMode ? 'bg-purple-500/10' : 'bg-purple-100/50'
          }`}>
            <span className="text-2xl">{item.icon}</span>
            <div className="flex-1">
              <p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.hobby}</p>
              <p className={`text-xs ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Hobbies;
