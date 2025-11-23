import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const codingProfiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/rohanmaiti',
    logo: 'https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png?f=webp&w=256',
    stats: '300+ Problems',
    bgDark: 'bg-yellow-500/20 hover:bg-yellow-500/30',
    bgLight: 'bg-yellow-100 hover:bg-yellow-200',
    textDark: 'text-yellow-300',
    textLight: 'text-yellow-700',
    iconDark: 'text-yellow-400',
    iconLight: 'text-yellow-600'
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://auth.geeksforgeeks.org/user/rohanmaiti',
    logo: 'https://media.geeksforgeeks.org/gfg-gg-logo.svg',
    stats: 'Active Solver',
    bgDark: 'bg-green-500/20 hover:bg-green-500/30',
    bgLight: 'bg-green-100 hover:bg-green-200',
    textDark: 'text-green-300',
    textLight: 'text-green-700',
    iconDark: 'text-green-400',
    iconLight: 'text-green-600'
  }, 
];

const CodingProfiles = ({ darkMode }) => {
  return (
    <motion.div
      className={`p-6 rounded-2xl shadow-xl ${
        darkMode ? 'bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-700/50' : 'bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200'
      }`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ y: -5 }}
    >
      <div className="text-center mb-4">
        <span className="text-5xl">💻</span>
        <h4 className={`text-xl font-bold mt-3 ${
          darkMode ? 'text-yellow-400' : 'text-yellow-700'
        }`}>Coding Profiles</h4>
      </div>
      <div className="space-y-3">
        {codingProfiles.map((profile, idx) => (
          <motion.a
            key={idx}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={`flex items-center gap-3 p-3 rounded-xl ${
              darkMode ? profile.bgDark : profile.bgLight
            } transition-all`}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src={profile.logo} 
                alt={profile.name} 
                className="w-7 h-7 object-contain"
              />
            </div>
            <div className="flex-1 text-left">
              <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{profile.name}</p>
              <p className={`text-xs ${darkMode ? profile.textDark : profile.textLight}`}>{profile.stats}</p>
            </div>
            <ExternalLink size={16} className={darkMode ? profile.iconDark : profile.iconLight} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default CodingProfiles;
