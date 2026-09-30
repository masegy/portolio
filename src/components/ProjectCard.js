'use client';

import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900/60 p-4.5 sm:p-6 md:p-7 transition-all duration-300 hover:border-accent-400/50 dark:hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-500/5 flex flex-col justify-between"
    >
      {/* Decorative gradient corner glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full bg-accent-50 dark:bg-accent-500/10 text-accent-700 dark:text-accent-300 border border-accent-200 dark:border-accent-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
            {project.category}
          </span>
          <span className="text-[11px] sm:text-xs font-mono text-surface-500 dark:text-surface-400 font-medium">
            {project.org}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-lg sm:text-xl font-bold text-surface-900 dark:text-surface-50 mb-2 sm:mb-3 leading-snug group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-surface-600 dark:text-surface-400 leading-relaxed mb-4 sm:mb-5">
          {project.desc}
        </p>

        {/* Key Impact Point */}
        <div className="p-3 sm:p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/20 mb-4 sm:mb-5">
          <div className="flex items-start gap-2.5">
            <svg
              className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xs font-medium text-emerald-900 dark:text-emerald-300 leading-relaxed">
              <strong className="font-semibold text-emerald-950 dark:text-emerald-200">Impact: </strong>
              {project.impact}
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3.5 sm:pt-4 border-t border-surface-100 dark:border-surface-800/80">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300 group-hover:bg-surface-200 dark:group-hover:bg-surface-700/80 transition-colors select-none"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
