'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { id: 'projects', label: t('navProjects') },
    { id: 'experience', label: t('navExperience') },
    { id: 'certifications', label: t('navCertifications') },
    { id: 'skills', label: t('navSkills') },
    { id: 'contact', label: t('navContact') },
  ];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden">
      {/* Hamburger / Close Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center justify-center min-w-[40px] min-h-[40px] rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 hover:text-surface-900 dark:hover:text-surface-50 transition-colors select-none active:scale-95"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Backdrop & Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Menu Card */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-18 left-3 right-3 sm:left-4 sm:right-4 z-50 rounded-2xl border border-surface-200 dark:border-surface-800 bg-white/95 dark:bg-surface-900/95 backdrop-blur-2xl p-3 shadow-2xl shadow-surface-950/30"
            >
              <div className="px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-surface-400 dark:text-surface-500 border-b border-surface-100 dark:border-surface-800 mb-1">
                Navigation
              </div>
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className="flex items-center justify-between min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium text-surface-800 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800/80 hover:text-accent-600 dark:hover:text-accent-400 active:bg-surface-200 dark:active:bg-surface-700/80 transition-colors"
                  >
                    <span>{item.label}</span>
                    <svg className="w-4 h-4 text-surface-400 dark:text-surface-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
