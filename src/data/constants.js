export const techLogos = {
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

export const skills = {
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

export const projects = [
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

export const experiences = [
  {
    title: 'Full Stack Intern',
    company: 'Wizcommerce',
    location: 'Gurugram',
    period: 'April 2025 - Present',
    description: 'Working on frontend development with React.js and backend APIs using FastAPI for end-to-end web application development.',
    icon: '💼'
  },
  {
    title: 'Campus Ambassador',
    company: 'Unstop',
    location: 'Remote',
    period: '2024 - 2025',
    description: 'Promoting tech events, hackathons, and competitions among students. Building community engagement and fostering technical culture on campus.',
    icon: '🎓'
  }
];

export const achievements = [
  'Campus Ambassador Unstop',
  'HACKINDA Hackathon Round-1 Qualifier',
  'SMART INDIA Hackathon - Inter Level Qualifier'
];

export const certifications = [
  'Programming Using C++ - Infosys Springboard (April 2023)',
  'Engineering Software Development and Testing - Infosys BPM/OS 2023',
  'Functions and Memory in C - Infosys BPM/OS 2023'
];
