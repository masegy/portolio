'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

export default function LanguageToggle() {
  const { lang, toggleLang, mounted } = useLanguage();

  if (!mounted) {
    return (
      <div className="w-[72px] h-9 rounded-lg border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800" />
    );
  }

  return (
    <motion.button
      onClick={toggleLang}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 text-sm font-medium text-surface-600 dark:text-surface-400 hover:border-accent-300 dark:hover:border-accent-500/30 hover:text-accent-600 dark:hover:text-accent-400 transition-colors select-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${lang === 'en' ? 'Indonesian' : 'English'}`}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
      <motion.span
        key={lang}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {lang === 'en' ? 'EN' : 'ID'}
      </motion.span>
    </motion.button>
  );
}
