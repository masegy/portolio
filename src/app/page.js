
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import portfolioData from '../data/portfolio.json';
import ThemeToggle from '../components/ThemeToggle';
import BackToTop from '../components/BackToTop';

export default function Home() {
  const { personal, navigation, about, skills, projects, contact, footer } = portfolioData;
  
  // Simplified animation variants to prevent conflicts
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut"
      }
    }
  };

  // Custom hook for intersection observer
  const useScrollAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return { ref, isInView };
  };


  return (
    <div 
      className="min-h-screen "
      style={{
        background: `linear-gradient(to bottom right, var(--bg-secondary), var(--bg-tertiary))`
      }}
    >
      {/* Header */}
      <header 
        className="fixed top-0 w-full backdrop-blur-md border-b z-50 "
        style={{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border-color)',
          opacity: 0.9
        }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="text-2xl font-bold "
              style={{ color: 'var(--text-primary)' }}
            >
              {personal.shortName}
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className=" hover:opacity-80"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.name}
                </a>
              ))}
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 "
              style={{ color: 'var(--text-primary)' }}
              variants={staggerItem}
            >
              Hi, I&apos;m <span style={{ color: 'var(--blue-600)' }}>{personal.shortName.split(' ')[0]}</span>
              <span className="block">{personal.title}</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 leading-relaxed "
              style={{ color: 'var(--text-secondary)' }}
              variants={staggerItem}
            >
              {personal.subtitle}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerItem}
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 rounded-lg font-semibold  text-white"
                style={{ 
                  backgroundColor: 'var(--blue-600)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="border-2 px-8 py-3 rounded-lg font-semibold "
                style={{ 
                  borderColor: 'var(--blue-600)',
                  color: 'var(--blue-600)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-16 px-6"
        style={{ backgroundColor: 'var(--bg-primary)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px", amount: 0.3 }}
        variants={fadeInUp}
        data-motion="section"
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 "
            style={{ color: 'var(--text-primary)' }}
            variants={fadeInUp}
          >
            {about.title}
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className={`text-lg  ${
                  index < about.paragraphs.length - 1 ? 'mb-6' : ''
                }`}
                style={{ color: 'var(--text-secondary)' }}
                variants={staggerItem}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-16 px-6 "
        style={{ backgroundColor: 'var(--bg-secondary)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px", amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 "
            style={{ color: 'var(--text-primary)' }}
            variants={fadeInUp}
          >
            {skills.title}
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px", amount: 0.3 }}
          >
            {skills.categories.map((category, index) => (
              <motion.div 
                key={index} 
                className="rounded-xl shadow-lg p-6 sm:p-8  border"
                style={{ 
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  boxShadow: `0 8px 25px -5px var(--shadow-color), 0 8px 10px -6px var(--shadow-color)`
                }}
                variants={staggerItem}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold mb-8 flex items-center "
                  style={{ color: 'var(--text-primary)' }}
                  variants={staggerItem}
                >
                  <motion.span 
                    className="text-2xl sm:text-3xl mr-3 flex-shrink-0"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {category.icon}
                  </motion.span>
                  <span className="leading-tight">{category.title}</span>
                </motion.h3>
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  variants={staggerContainer}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="p-4 rounded-lg text-center  border"
                      style={{ 
                        backgroundColor: 'var(--bg-tertiary)',
                        borderColor: 'var(--border-color)',
                        boxShadow: `0 2px 4px var(--shadow-color)`
                      }}
                      variants={staggerItem}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span 
                        className="font-semibold text-sm sm:text-base "
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-16 px-6 "
        style={{ backgroundColor: 'var(--bg-primary)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 "
            style={{ color: 'var(--text-primary)' }}
            variants={fadeInUp}
          >
            {projects.title}
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px", amount: 0.3 }}
          >
            {projects.items.map((project, index) => (
              <motion.div 
                key={index} 
                className="rounded-lg shadow-lg p-6 "
                style={{ 
                  backgroundColor: 'var(--bg-card)',
                  boxShadow: `0 10px 15px -3px var(--shadow-color), 0 4px 6px -2px var(--shadow-color)`
                }}
                variants={staggerItem}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-3xl mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  {project.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold mb-3 "
                  style={{ color: 'var(--text-primary)' }}
                  variants={staggerItem}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="mb-4 "
                  style={{ color: 'var(--text-secondary)' }}
                  variants={staggerItem}
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={staggerItem}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-2 py-1 rounded text-sm "
                      style={{
                        backgroundColor: project.tagColor === 'blue' ? 'var(--blue-100)' :
                                       project.tagColor === 'green' ? 'var(--green-100)' :
                                       'var(--purple-100)',
                        color: project.tagColor === 'blue' ? 'var(--blue-900)' :
                               project.tagColor === 'green' ? 'var(--green-800)' :
                               'var(--purple-800)'
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: tagIndex * 0.02 + 0.1, duration: 0.3 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-16 px-6 "
        style={{ backgroundColor: 'var(--bg-secondary)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 "
            style={{ color: 'var(--text-primary)' }}
            variants={fadeInUp}
          >
            {contact.title}
          </motion.h2>
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-lg mb-8 "
              style={{ color: 'var(--text-secondary)' }}
              variants={staggerItem}
            >
              {contact.description}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
            >
              {contact.buttons.map((button, index) => (
                <motion.a
                  key={index}
                  href={button.href}
                  target={button.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={button.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className="px-8 py-3 rounded-lg font-semibold  flex items-center justify-center"
                  style={{
                    backgroundColor: button.type === 'primary' ? 'var(--blue-600)' : 'transparent',
                    color: button.type === 'primary' ? '#ffffff' : 'var(--blue-600)',
                    borderWidth: button.type !== 'primary' ? '2px' : '0',
                    borderStyle: 'solid',
                    borderColor: button.type !== 'primary' ? 'var(--blue-600)' : 'transparent'
                  }}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {button.text}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer 
        className="py-8 px-6 "
        style={{ backgroundColor: 'var(--bg-tertiary)' }}
      >
        <div className="container mx-auto text-center">
          <p 
            className=""
            style={{ color: 'var(--text-muted)' }}
          >
            {footer.copyright}
          </p>
        </div>
      </footer>
      
      <BackToTop />
    </div>
  );
}
