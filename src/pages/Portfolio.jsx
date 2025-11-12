import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Phone, ExternalLink, Award, Briefcase, Code, GraduationCap, ChevronLeft, ChevronRight, Filter, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [displayText, setDisplayText] = useState('');
  const [projectFilter, setProjectFilter] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(true);
  const projectScrollRef = useRef(null);
  const experienceScrollRef = useRef(null);
  const fullText = "Full Stack Developer | MERN Stack Enthusiast";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const techLogos = {
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  };

  const skills = {
    'Programming': {
      items: ['Java', 'C++', 'C', 'Python', 'JavaScript', 'TypeScript'],
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    'Frontend': {
      items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'EJS'],
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    'Backend': {
      items: ['Node.js', 'Express.js', 'FastAPI'],
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    'Database': {
      items: ['MongoDB', 'SQL'],
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    'DevOps': {
      items: ['Docker', 'Jenkins', 'CI/CD', 'Git'],
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    'Cloud': {
      items: ['AWS Fundamentals', 'Bash Scripting'],
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
    }
  };

  const projects = [
    {
      title: 'City Wide Hospital Management System',
      description: 'Comprehensive healthcare management system using MERN stack with doctor interface, digital patient history, emergency service, and inventory management.',
      tech: ['React', 'Tailwind CSS', 'Express.js', 'MongoDB'],
      github: 'https://github.com/rohanmaiti/healthcare-management',
      live: 'https://healthcare-management-teal.vercel.app/',
      status: 'Ongoing',
      category: 'Web',
      icon: '🏥'
    },
    {
      title: 'IoT Smart Parking System',
      description: 'Automated parking system using Arduino with real-time vehicle detection, efficient parking management, and web interface for availability tracking.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Arduino'],
      github: 'https://github.com/rohanmaiti/parklink',
      live: 'http://parklink-rohanmaiti.onrender.com',
      category: 'IoT',
      icon: '🅿️'
    },
    {
      title: 'Blog Application',
      description: 'Dynamic blog platform with authentication, session-based login, and comment management using bcrypt for security.',
      tech: ['EJS', 'Express.js', 'MongoDB', 'Bcrypt'],
      github: 'https://github.com/rohanmaiti/BlogApplication',
      live: 'https://blogify-rohanmaiti.onrender.com',
      category: 'Web',
      icon: '📝'
    },
    {
      title: 'Gemini CLI Chat',
      description: 'Custom CLI tool integrating Google Gemini API for AI conversations from terminal with pagination and 160 free chats per minute.',
      tech: ['Node.js', 'Google Gemini API', 'NPM'],
      github: 'https://github.com/rohanmaiti/gimini_cli',
      install: 'npm install -g gemini-cli-chat',
      category: 'CLI',
      icon: '🤖'
    }
  ];

  const experiences = [
    {
      title: 'Full Stack Intern',
      company: 'Wizcommerce',
      location: 'Gurugram',
      period: 'April 2025 – Present',
      description: 'Working on frontend development with React.js and backend APIs using FastAPI for end-to-end web application development.',
      icon: '💼'
    },
    {
      title: 'Campus Ambassador',
      company: 'Unstop',
      location: 'Remote',
      period: '2024 – Present',
      description: 'Promoting tech events, hackathons, and competitions among students. Building community engagement and fostering technical culture on campus.',
      icon: '🎓'
    }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = projectFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === projectFilter);

  const scrollExperience = (direction) => {
    if (experienceScrollRef.current) {
      const scrollAmount = 400;
      experienceScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleProjectScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
    setShowMoreProjects(!isAtBottom);
  };

  const achievements = [
    'Campus Ambassador  Unstop',
    'HACKINDA Hackathon Round-1 Qualifier',
    'SMART INDIA Hackathon - Inter Level Qualifier'
  ];

  const certifications = [
    'Programming Using C++ - Infosys Springboard (April 2023)',
    'Engineering Software Development and Testing - Infosys BPM/OS 2023',
    'Functions and Memory in C - Infosys BPM/OS 2023'
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        darkMode ? 'bg-slate-900/95' : 'bg-white/80'
      } ${activeSection !== 'home' 
        ? darkMode 
          ? 'shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)]' 
          : 'shadow-lg border-b border-gray-200'
        : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center p-4">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 flex-1 justify-center">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className={`transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? darkMode ? 'text-blue-400' : 'text-green-600'
                      : darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              <Menu className={darkMode ? 'text-white' : 'text-gray-900'} size={24} />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
              } text-white`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className={`fixed left-0 top-0 h-full w-64 z-50 ${
                darkMode ? 'bg-slate-800' : 'bg-white'
              } shadow-2xl md:hidden`}
            >
              <div className="p-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="mb-8"
                >
                  <X className={darkMode ? 'text-white' : 'text-gray-900'} size={24} />
                </button>
                <div className="flex flex-col space-y-4">
                  {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => handleNavClick(e, item.toLowerCase())}
                      className={`text-lg transition-colors duration-300 ${
                        activeSection === item.toLowerCase()
                          ? darkMode ? 'text-blue-400' : 'text-green-600'
                          : darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-gray-700 hover:text-green-600'
                      }`}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            {/* Profile Picture */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`absolute inset-0 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 ${
                darkMode ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-green-400 to-emerald-400'
              }`}></div>
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
                <img 
                  src="./dp.jpeg" 
                  alt="Rohan Maiti" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Hero Text */}
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Hi, I'm{' '}
                <motion.span 
                  className={`bg-gradient-to-r ${
                    darkMode ? 'from-blue-400 to-cyan-400' : 'from-green-500 to-emerald-500'
                  } bg-clip-text text-transparent`}
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "linear" 
                  }}
                >
                  Rohan Maiti
                </motion.span>
              </h1>
              <p className={`text-xl md:text-2xl mb-4 h-8 ${
                darkMode ? 'text-slate-300' : 'text-gray-700'
              }`}>
                {displayText}<span className="animate-blink">|</span>
              </p>
              <p className={`text-lg md:text-xl mb-8 ${
                darkMode ? 'text-slate-400' : 'text-gray-600'
              }`}>
                Student at Chitkara University Himachal Pradesh
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mb-8">
                <motion.a 
                  href="https://github.com/rohanmaiti" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
                  } text-white shadow-lg`}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/rohanmaiti" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
                  } text-white shadow-lg`}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a 
                  href="mailto:maitirohan2019@gmail.com"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
                  } text-white shadow-lg`}
                >
                  <Mail size={24} />
                </motion.a>
              </div>
              <motion.a 
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700' 
                    : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
                } text-white shadow-lg`}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`min-h-screen flex pt-10 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-slate-800' : 'bg-gray-50'
      }`}>
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
            <GraduationCap className="inline-block mr-3" size={40} />
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Education Card */}
            <motion.div 
              className={`p-8 rounded-2xl shadow-xl transition-all duration-300 ${
                darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`text-5xl mb-4`}>🎓</div>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-blue-400' : 'text-green-600'
              }`}>Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-lg">Bachelor of Engineering</p>
                  <p className={darkMode ? 'text-slate-300' : 'text-gray-600'}>Computer Science</p>
                  <p className={darkMode ? 'text-slate-400' : 'text-gray-500'}>Chitkara University HP</p>
                  <p className={`font-bold ${darkMode ? 'text-blue-400' : 'text-green-600'}`}>CGPA: 9.8/10 | 2022-2026</p>
                </div>
              </div>
            </motion.div>

            {/* Achievements Card */}
            <motion.div 
              className={`p-8 rounded-2xl shadow-xl transition-all duration-300 ${
                darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className={`text-5xl mb-4`}>🏆</div>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-blue-400' : 'text-green-600'
              }`}>Achievements</h3>
              <ul className="space-y-2">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <Award className={`mr-2 mt-1 flex-shrink-0 ${
                      darkMode ? 'text-blue-400' : 'text-green-600'
                    }`} size={20} />
                    <span className={darkMode ? 'text-slate-300' : 'text-gray-700'}>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Card */}
            <motion.div 
              className={`p-8 rounded-2xl shadow-xl transition-all duration-300 ${
                darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className={`text-5xl mb-4`}>📧</div>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-blue-400' : 'text-green-600'
              }`}>Get in Touch</h3>
              <div className="space-y-4">
                <a href="mailto:maitirohan2019@gmail.com" className={`flex items-center space-x-2 ${
                  darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-gray-700 hover:text-green-600'
                } transition-colors`}>
                  <Mail size={20} />
                  <span className="break-all">maitirohan2019@gmail.com</span>
                </a>
                <a href="tel:+918172017128" className={`flex items-center space-x-2 ${
                  darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-gray-700 hover:text-green-600'
                } transition-colors`}>
                  <Phone size={20} />
                  <span>+91 8172017128</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Projects Section */}
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

          {/* Projects Grid - Vertical Scroll */}
          <div className="relative">
            <div 
              ref={projectScrollRef}
              onScroll={handleProjectScroll}
              className="overflow-y-auto max-h-[500px] pr-4 scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, idx) => (
                <motion.div 
                  key={idx} 
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
              ))}
            </div>
          </div>

            {/* Show More Indicator */}
            <AnimatePresence>
              {showMoreProjects && filteredProjects.length > 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-0 left-0 right-0 flex justify-center pb-2"
                >
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-full shadow-lg backdrop-blur-md ${
                    darkMode ? 'bg-blue-600/90 text-white' : 'bg-green-600/90 text-white'
                  }`}>
                    <span className="text-sm font-medium">Scroll for more</span>
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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

          {/* Experience Container with Scroll */}
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

      {/* Contact Section */}
      <section id="contact" className={`min-h-screen flex pt-2 px-4 sm:px-6 lg:px-8 ${
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
            Get In Touch
          </motion.h2>
          <motion.p 
            className={`text-xl mb-12 text-center ${
              darkMode ? 'text-slate-300' : 'text-gray-700'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-6"
            >
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>Let's Connect</h3>
                <p className={`mb-8 ${
                  darkMode ? 'text-slate-300' : 'text-gray-700'
                }`}>
                  Feel free to reach out through any of these channels or use the contact form.
                </p>
              </div>

              <motion.a 
                href="mailto:maitirohan2019@gmail.com" 
                className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                  darkMode ? 'bg-slate-700/50 hover:bg-slate-700 border border-slate-600' : 'bg-white hover:bg-gray-50 border border-gray-200'
                } shadow-lg`}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className={`p-3 rounded-full ${
                  darkMode ? 'bg-blue-600' : 'bg-green-600'
                } text-white`}>
                  <Mail size={24} />
                </div>
                <div className="flex-1">
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>Email</p>
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>maitirohan2019@gmail.com</p>
                </div>
              </motion.a>

              <motion.a 
                href="tel:+918172017128"
                className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                  darkMode ? 'bg-slate-700/50 hover:bg-slate-700 border border-slate-600' : 'bg-white hover:bg-gray-50 border border-gray-200'
                } shadow-lg`}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className={`p-3 rounded-full ${
                  darkMode ? 'bg-blue-600' : 'bg-green-600'
                } text-white`}>
                  <Phone size={24} />
                </div>
                <div className="flex-1">
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>Phone</p>
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>+91 8172017128</p>
                </div>
              </motion.a>

              <div className="flex space-x-4 pt-4">
                <motion.a 
                  href="https://github.com/rohanmaiti" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
                  } text-white shadow-lg`}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/rohanmaiti" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
                  } text-white shadow-lg`}
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`p-8 rounded-2xl shadow-xl ${
                darkMode ? 'bg-slate-700/50 border border-slate-600' : 'bg-white border border-gray-200'
              }`}
              onSubmit={(e) => {
                e.preventDefault();
                // Form submission logic here
                alert('Form submitted! (Add your form handling logic here)');
              }}
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-slate-300' : 'text-gray-700'
                  }`}>
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                      darkMode 
                        ? 'bg-slate-800 border border-slate-600 text-white focus:border-blue-500' 
                        : 'bg-gray-50 border border-gray-300 text-gray-900 focus:border-green-500'
                    } focus:outline-none focus:ring-2 ${
                      darkMode ? 'focus:ring-blue-500/50' : 'focus:ring-green-500/50'
                    }`}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-slate-300' : 'text-gray-700'
                  }`}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                      darkMode 
                        ? 'bg-slate-800 border border-slate-600 text-white focus:border-blue-500' 
                        : 'bg-gray-50 border border-gray-300 text-gray-900 focus:border-green-500'
                    } focus:outline-none focus:ring-2 ${
                      darkMode ? 'focus:ring-blue-500/50' : 'focus:ring-green-500/50'
                    }`}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-slate-300' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    darkMode 
                      ? 'bg-slate-800 border border-slate-600 text-white focus:border-blue-500' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900 focus:border-green-500'
                  } focus:outline-none focus:ring-2 ${
                    darkMode ? 'focus:ring-blue-500/50' : 'focus:ring-green-500/50'
                  }`}
                  placeholder="john.doe@example.com"
                />
              </div>

              <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-slate-300' : 'text-gray-700'
                }`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    darkMode 
                      ? 'bg-slate-800 border border-slate-600 text-white focus:border-blue-500' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900 focus:border-green-500'
                  } focus:outline-none focus:ring-2 ${
                    darkMode ? 'focus:ring-blue-500/50' : 'focus:ring-green-500/50'
                  }`}
                  placeholder="+91 1234567890"
                />
              </div>

              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-slate-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  required
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none ${
                    darkMode 
                      ? 'bg-slate-800 border border-slate-600 text-white focus:border-blue-500' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900 focus:border-green-500'
                  } focus:outline-none focus:ring-2 ${
                    darkMode ? 'focus:ring-blue-500/50' : 'focus:ring-green-500/50'
                  }`}
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700' 
                    : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
                } text-white shadow-lg`}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-slate-900' : 'bg-white'} border-t ${
        darkMode ? 'border-slate-700' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={darkMode ? 'text-slate-400' : 'text-gray-600'}>
            © 2025 Rohan Maiti. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}