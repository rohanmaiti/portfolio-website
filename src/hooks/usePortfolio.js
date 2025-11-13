import { useState, useEffect, useRef } from 'react';

export const usePortfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [displayText, setDisplayText] = useState('');
  const [projectFilter, setProjectFilter] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(true);
  const [showMoreAbout, setShowMoreAbout] = useState(true);
  
  const projectScrollRef = useRef(null);
  const experienceScrollRef = useRef(null);
  const aboutScrollRef = useRef(null);
  
  const fullText = "Full Stack Developer | MERN Stack Enthusiast";

  // typing effect
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

  // active section tracking
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

  const handleAboutScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
    setShowMoreAbout(!isAtBottom);
  };

  return {
    darkMode,
    setDarkMode,
    activeSection,
    displayText,
    projectFilter,
    setProjectFilter,
    mobileMenuOpen,
    setMobileMenuOpen,
    showMoreProjects,
    showMoreAbout,
    projectScrollRef,
    experienceScrollRef,
    aboutScrollRef,
    handleNavClick,
    scrollExperience,
    handleProjectScroll,
    handleAboutScroll
  };
};
