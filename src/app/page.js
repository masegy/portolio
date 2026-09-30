'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ThemeToggle from '../components/ThemeToggle';
import BackToTop from '../components/BackToTop';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../components/LanguageProvider';
import PipelineVisualizer from '../components/PipelineVisualizer';
import MobileNav from '../components/MobileNav';
import ProjectCard from '../components/ProjectCard';
import Toast from '../components/Toast';

/* ─── Data & Skill Categorization ───────────────────────── */

const certifications = [
  {
    name: 'ACA Certified — Alibaba Cloud Associate',
    year: '2024',
    issuer: 'Alibaba Cloud',
    category: 'Cloud Infrastructure',
    badge: 'Verified',
  },
  {
    name: 'Full Stack Developer',
    year: '2022',
    issuer: 'Professional Certification',
    category: 'Full Stack Architecture',
    badge: 'Verified',
  },
  {
    name: 'IT Perbankan — Kelas Front End',
    year: '2021',
    issuer: 'Banking IT Program',
    category: 'Enterprise Banking',
    badge: 'Verified',
  },
];

const skillsData = [
  { name: 'Jenkins', category: 'cicd' },
  { name: 'Fastlane', category: 'cicd' },
  { name: 'Groovy', category: 'cicd' },
  { name: 'Shell Scripting', category: 'cicd' },
  { name: 'YAML', category: 'cicd' },
  { name: 'Git', category: 'cicd' },
  { name: 'Docker', category: 'cloud' },
  { name: 'OpenShift', category: 'cloud' },
  { name: 'Vault', category: 'cloud' },
  { name: 'GCP', category: 'cloud' },
  { name: 'AWS', category: 'cloud' },
  { name: 'Kafka', category: 'observability' },
  { name: 'Elastic APM', category: 'observability' },
  { name: 'React JS', category: 'frontend' },
  { name: 'Single-Spa JS', category: 'frontend' },
  { name: 'Node.js', category: 'frontend' },
  { name: 'TailwindCSS', category: 'frontend' },
];

/* ─── Animation variants ────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

/* ─── SVG Icons ─────────────────────────────────────────── */

function LinkedInIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function BriefcaseIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  );
}

/* ─── Page Component ────────────────────────────────────── */

export default function Home() {
  const [showPhoto, setShowPhoto] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('all');
  const { t } = useLanguage();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('augyerislioga.s@gmail.com');
    setToastMessage(t('emailCopied'));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const projects = [
    {
      id: 1,
      title: t('p1Title'),
      category: t('p1Category'),
      org: t('p1Org'),
      desc: t('p1Desc'),
      impact: t('p1Impact'),
      stack: ['Jenkins', 'Fastlane', 'Vault', 'Firebase', 'App Store Connect', 'Groovy'],
    },
    {
      id: 2,
      title: t('p2Title'),
      category: t('p2Category'),
      org: t('p2Org'),
      desc: t('p2Desc'),
      impact: t('p2Impact'),
      stack: ['OpenShift', 'Docker', 'Kubernetes', 'YAML', 'Jenkinsfile', 'Shell'],
    },
    {
      id: 3,
      title: t('p3Title'),
      category: t('p3Category'),
      org: t('p3Org'),
      desc: t('p3Desc'),
      impact: t('p3Impact'),
      stack: ['Elastic APM', 'Apache Kafka', 'Java Agent', 'Distributed Tracing', 'Linux'],
    },
    {
      id: 4,
      title: t('p4Title'),
      category: t('p4Category'),
      org: t('p4Org'),
      desc: t('p4Desc'),
      impact: t('p4Impact'),
      stack: ['React JS', 'Single-Spa', 'JavaScript', 'TailwindCSS', 'Microfrontends'],
    },
  ];

  const experiences = [
    {
      role: t('exp1Role'),
      company: t('exp1Company'),
      period: t('exp1Period'),
      type: t('exp1Type'),
      tags: ['Jenkins', 'Fastlane', 'OpenShift', 'Vault', 'Kafka', 'Elastic APM'],
      points: t('exp1Points') || [],
    },
    {
      role: t('exp2Role'),
      company: t('exp2Company'),
      period: t('exp2Period'),
      type: t('exp2Type'),
      tags: ['React JS', 'Microfrontends', 'TailwindCSS', 'Mobile Banking Microsites'],
      points: t('exp2Points') || [],
    },
    {
      role: t('exp3Role'),
      company: t('exp3Company'),
      period: t('exp3Period'),
      type: t('exp3Type'),
      tags: ['Single-spa JS', 'JavaScript', 'Frontend Architecture'],
      points: t('exp3Points') || [],
    },
    {
      role: t('exp4Role'),
      company: t('exp4Company'),
      period: t('exp4Period'),
      type: t('exp4Type'),
      tags: ['Material Traceability', 'Documentation Management', 'QA Records'],
      points: t('exp4Points') || [],
    },
    {
      role: t('exp5Role'),
      company: t('exp5Company'),
      period: t('exp5Period'),
      type: t('exp5Type'),
      tags: ['.NET', 'Bootstrap', 'Web Ticketing', 'IT Support'],
      points: t('exp5Points') || [],
    },
  ];

  const skillTabs = [
    { id: 'all', label: t('tabAll') },
    { id: 'cicd', label: t('tabCicd') },
    { id: 'cloud', label: t('tabCloud') },
    { id: 'observability', label: t('tabObservability') },
    { id: 'frontend', label: t('tabFrontend') },
  ];

  const filteredSkills = selectedSkillCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === selectedSkillCategory);

  return (
    <div className="min-h-screen overflow-x-hidden bg-surface-50 dark:bg-surface-950 text-surface-900 dark:text-surface-100 transition-colors duration-200">

      {/* ── Photo Modal ── */}
      <AnimatePresence>
        {showPhoto && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-md cursor-pointer p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setShowPhoto(false)}
            onKeyDown={(e) => e.key === 'Escape' && setShowPhoto(false)}
            role="dialog"
            aria-modal="true"
            aria-label={t('photoView')}
          >
            <motion.div
              className="relative cursor-default max-w-sm sm:max-w-md w-full"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowPhoto(false)}
                className="cursor-pointer absolute -top-3 -right-3 z-10 flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-surface-900/90 text-white hover:bg-surface-800 transition-colors shadow-xl border border-surface-700"
                aria-label={t('photoClose')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Gradient ring */}
              <div className="rounded-3xl p-[3px] bg-gradient-to-br from-accent-400 via-accent-500 to-emerald-500 shadow-2xl shadow-accent-500/20">
                <div className="rounded-3xl overflow-hidden bg-surface-900 p-1.5 sm:p-2">
                  <Image
                    src="/profile.png"
                    alt="Augyeris Lioga Seandrio"
                    width={400}
                    height={400}
                    className="rounded-2xl object-cover w-full h-72 sm:h-96 select-none pointer-events-none"
                    draggable={false}
                  />
                </div>
              </div>

              {/* Caption */}
              <div className="mt-3.5 text-center">
                <p className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Augyeris Lioga Seandrio
                </p>
                <p className="text-xs sm:text-sm font-mono text-accent-400">
                  {t('role')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Header ── */}
      <header className="fixed top-0 inset-x-0 z-50">
        <nav className="mx-auto max-w-6xl mt-2 sm:mt-4 px-3 sm:px-6">
          <div className="flex items-center justify-between rounded-2xl border border-surface-200/80 dark:border-surface-800/80 bg-white/85 dark:bg-surface-900/85 backdrop-blur-xl px-3.5 sm:px-5 py-2 sm:py-3 shadow-lg shadow-surface-900/5 dark:shadow-surface-950/40">
            <a href="#" className="font-mono text-lg sm:text-xl font-bold tracking-tight text-surface-900 dark:text-surface-50 flex items-center gap-1.5 py-1">
              <span>AL</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {[
                { id: 'projects', label: t('navProjects') },
                { id: 'experience', label: t('navExperience') },
                { id: 'certifications', label: t('navCertifications') },
                { id: 'skills', label: t('navSkills') },
                { id: 'contact', label: t('navContact') },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-800/60 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              <LanguageToggle />
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </nav>
      </header>

      {/* ── Hero Section (Split Grid) ── */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
        {/* Decorative background glow blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-1/4 h-[450px] sm:h-[550px] w-[450px] sm:w-[550px] rounded-full bg-accent-500/10 dark:bg-accent-500/5 blur-3xl" />
          <div className="absolute bottom-10 left-1/4 h-[400px] sm:h-[500px] w-[400px] sm:w-[500px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Profile & Bio */}
            <motion.div
              className="lg:col-span-6 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Profile Photo Avatar & Live Status */}
              <motion.div variants={fadeUp} custom={0} className="mb-5 sm:mb-6 flex flex-col items-center lg:items-start gap-3.5 sm:gap-4">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <button
                    onClick={() => setShowPhoto(true)}
                    className="relative group cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                    aria-label={t('photoView')}
                  >
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent-400 via-accent-500 to-emerald-400 opacity-70 blur-xs group-hover:opacity-100 transition-opacity" />
                    <div className="relative rounded-full p-[2px] sm:p-[2.5px] bg-gradient-to-br from-accent-400 via-accent-500 to-emerald-400 group-hover:scale-105 transition-transform duration-300">
                      <div className="rounded-full overflow-hidden bg-surface-50 dark:bg-surface-900 p-[2px]">
                        <Image
                          src="/profile.png"
                          alt="Augyeris Lioga Seandrio"
                          width={88}
                          height={88}
                          priority
                          className="rounded-full object-cover w-18 h-18 sm:w-22 sm:h-22 select-none pointer-events-none"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </button>

                  {/* Status Badge */}
                  <div className="text-left">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      {t('statusBadge')}
                    </span>
                    <p className="text-[11px] sm:text-xs text-surface-500 dark:text-surface-400 font-mono mt-1">
                      WONDR by BNI • Jakarta
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-surface-900 dark:text-surface-50 leading-[1.15] text-balance"
              >
                Augyeris Lioga Seandrio
              </motion.h1>

              {/* Role */}
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-2.5 sm:mt-3 text-base sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-accent-600 via-accent-500 to-emerald-600 dark:from-accent-400 dark:via-accent-300 dark:to-emerald-400 bg-clip-text text-transparent"
              >
                {t('role')}
              </motion.p>

              {/* Bio */}
              <motion.p
                variants={fadeUp}
                custom={3}
                className="mt-4 sm:mt-5 text-xs sm:text-base text-surface-600 dark:text-surface-400 leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty"
              >
                {t('bio')}
              </motion.p>

              {/* CTAs & Quick Actions */}
              <motion.div
                variants={fadeUp}
                custom={4}
                className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-stretch xs:items-center justify-center lg:justify-start gap-2.5 sm:gap-4 w-full"
              >
                <a
                  href="#projects"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl font-medium text-sm bg-accent-600 hover:bg-accent-700 text-white shadow-lg shadow-accent-600/25 hover:shadow-accent-600/35 transition-all active:scale-[0.98]"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  {t('viewProjectsCta')}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl font-mono text-xs sm:text-sm font-medium border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 text-surface-700 dark:text-surface-200 hover:border-accent-300 dark:hover:border-accent-500/40 hover:text-accent-600 dark:hover:text-accent-400 transition-all active:scale-[0.98]"
                  title="Copy email to clipboard"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {t('copyEmail')}
                </button>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-2 mt-1 xs:mt-0 xs:ml-1">
                  <SocialLink href="https://www.linkedin.com/in/augyeris" label="LinkedIn">
                    <LinkedInIcon className="w-4 h-4" />
                  </SocialLink>
                  <SocialLink href="https://github.com/masegy" label="GitHub">
                    <GitHubIcon className="w-4 h-4" />
                  </SocialLink>
                  <SocialLink href="mailto:augyerislioga.s@gmail.com" label="Email">
                    <MailIcon className="w-4 h-4" />
                  </SocialLink>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Interactive DevOps Pipeline Simulation */}
            <motion.div
              className="lg:col-span-6 w-full mt-4 lg:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <PipelineVisualizer />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Impact Metrics Bar ── */}
      <section className="py-7 sm:py-10 border-y border-surface-200/80 dark:border-surface-800/80 bg-white/50 dark:bg-surface-900/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 text-center">
            {[
              { val: t('metricYearsVal'), label: t('metricYearsLabel'), accent: 'text-accent-500' },
              { val: t('metricPipelinesVal'), label: t('metricPipelinesLabel'), accent: 'text-emerald-500' },
              { val: t('metricScaleVal'), label: t('metricScaleLabel'), accent: 'text-accent-400' },
              { val: t('metricCertVal'), label: t('metricCertLabel'), accent: 'text-amber-500' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-3 sm:p-4 rounded-xl border border-surface-200/50 dark:border-surface-800/50 bg-white dark:bg-surface-900/50 shadow-sm"
              >
                <p className={`font-mono text-xl xs:text-2xl sm:text-3xl font-extrabold ${stat.accent}`}>
                  {stat.val}
                </p>
                <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs md:text-sm font-medium text-surface-600 dark:text-surface-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects / Systems Architecture ── */}
      <section id="projects" className="py-14 sm:py-24 px-4 sm:px-6 bg-surface-50/50 dark:bg-surface-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            {/* Section heading */}
            <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-200 dark:border-accent-500/20 bg-accent-50 dark:bg-accent-500/10 px-3.5 py-1 text-xs font-mono font-medium text-accent-700 dark:text-accent-400 mb-3 sm:mb-4">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                {t('projectsBadge')}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-surface-900 dark:text-surface-50 tracking-tight text-balance">
                {t('projectsHeading')}
              </h2>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-surface-600 dark:text-surface-400 max-w-2xl mx-auto text-pretty">
                {t('projectsSubheading')}
              </p>
            </motion.div>

            {/* 2x2 Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Experience Section ── */}
      <section id="experience" className="py-14 sm:py-24 px-4 sm:px-6 bg-white dark:bg-surface-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            {/* Section heading */}
            <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 px-3.5 py-1 text-xs font-mono font-medium text-surface-600 dark:text-surface-400 mb-3 sm:mb-4">
                <BriefcaseIcon className="w-4 h-4" />
                {t('expBadge')}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-surface-900 dark:text-surface-50 tracking-tight text-balance">
                {t('expHeading')}
              </h2>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line - mobile optimized position */}
              <div className="absolute left-3.5 sm:left-6 md:left-8 top-0 bottom-0 w-px bg-surface-200 dark:bg-surface-800" />

              <div className="space-y-8 sm:space-y-12">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    className="relative pl-9 sm:pl-16 md:pl-20"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2 sm:left-4 md:left-6 top-1.5 flex items-center justify-center">
                      <span className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full border-2 border-accent-500 bg-white dark:bg-surface-900 ring-4 ring-accent-100 dark:ring-accent-500/15" />
                    </div>

                    {/* Experience Card */}
                    <div className="group rounded-2xl border border-surface-200 dark:border-surface-800 bg-surface-50/60 dark:bg-surface-800/40 p-4 sm:p-6 md:p-7 transition-all hover:border-accent-300 dark:hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-500/5">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-surface-900 dark:text-surface-50 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors leading-snug">
                            {exp.role}
                          </h3>
                          <p className="text-xs sm:text-sm font-semibold text-accent-600 dark:text-accent-400 mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap shrink-0 mt-1 sm:mt-0">
                          <span className="inline-flex items-center rounded-full bg-accent-50 dark:bg-accent-500/10 px-2 py-0.5 text-[10px] sm:text-xs font-mono font-medium text-accent-700 dark:text-accent-300 border border-accent-200 dark:border-accent-500/20">
                            {exp.type}
                          </span>
                          <span className="text-[10px] sm:text-xs font-mono text-surface-500 dark:text-surface-400 whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Tech Stack per position */}
                      <div className="flex flex-wrap gap-1.5 my-2.5 sm:my-3">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-surface-200/70 dark:bg-surface-700/60 text-surface-600 dark:text-surface-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2 mt-3 pt-3 border-t border-surface-200/50 dark:border-surface-700/50">
                        {Array.isArray(exp.points) && exp.points.map((point, j) => (
                          <li key={j} className="flex gap-2.5 sm:gap-3 text-xs sm:text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-500 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Certifications Section ── */}
      <section id="certifications" className="py-14 sm:py-24 px-4 sm:px-6 bg-surface-50 dark:bg-surface-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            {/* Section heading */}
            <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 px-3.5 py-1 text-xs font-mono font-medium text-surface-600 dark:text-surface-400 mb-3 sm:mb-4">
                <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                {t('certBadge')}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-surface-900 dark:text-surface-50 tracking-tight text-balance">
                {t('certHeading')}
              </h2>
            </motion.div>

            {/* Certifications grid */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={scaleIn}
                  className="group relative rounded-2xl border border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900/70 p-5 sm:p-6 text-center transition-all duration-300 hover:border-accent-400 dark:hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-500/5 flex flex-col justify-between"
                >
                  <div>
                    {/* Badge Pill */}
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[10px] sm:text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {t('verifiedCert')}
                      </span>
                    </div>

                    {/* Icon */}
                    <span className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-accent-50 dark:bg-accent-500/10 text-accent-600 dark:text-accent-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    </span>

                    <h3 className="text-sm sm:text-base font-bold text-surface-900 dark:text-surface-50 mb-2 leading-snug">
                      {cert.name}
                    </h3>
                  </div>

                  <div className="pt-3.5 sm:pt-4 border-t border-surface-100 dark:border-surface-800">
                    <p className="text-xs font-mono text-surface-500 dark:text-surface-400">
                      {cert.issuer} • <span className="font-semibold">{cert.year}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Categorized Skills Matrix ── */}
      <section id="skills" className="py-14 sm:py-24 px-4 sm:px-6 bg-white dark:bg-surface-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            {/* Section heading */}
            <motion.div variants={fadeUp} className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 px-3.5 py-1 text-xs font-mono font-medium text-surface-600 dark:text-surface-400 mb-3 sm:mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                {t('skillsBadge')}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-surface-900 dark:text-surface-50 tracking-tight text-balance">
                {t('skillsHeading')}
              </h2>
            </motion.div>

            {/* Category Filter Tabs - Mobile swipe friendly */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center no-scrollbar mb-8 sm:mb-10">
              {skillTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedSkillCategory(tab.id)}
                  className={`cursor-pointer min-h-[38px] px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-all select-none active:scale-95 ${
                    selectedSkillCategory === tab.id
                      ? 'bg-accent-600 text-white shadow-md shadow-accent-600/20'
                      : 'bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Filtered Skills Grid */}
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3.5"
            >
              <AnimatePresence>
                {filteredSkills.map((skill) => (
                  <motion.div
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.25 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="p-3 sm:p-4 rounded-xl min-h-[50px] sm:min-h-[56px] border border-surface-200 dark:border-surface-800 bg-surface-50 dark:bg-surface-800/60 flex items-center justify-between gap-1.5 hover:border-accent-300 dark:hover:border-accent-500/30 hover:shadow-md transition-all select-none"
                  >
                    <span className="font-mono text-xs sm:text-sm font-bold text-surface-800 dark:text-surface-100 truncate">
                      {skill.name}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase px-1.5 sm:px-2 py-0.5 rounded bg-surface-200/80 dark:bg-surface-700 text-surface-500 dark:text-surface-400 shrink-0">
                      {skill.category}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact & Availability Section ── */}
      <section id="contact" className="py-14 sm:py-24 px-4 sm:px-6 bg-surface-50 dark:bg-surface-950 border-t border-surface-200 dark:border-surface-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-5 sm:mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 text-balance">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>{t('availabilityText')} • {t('timezoneText')}</span>
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-surface-900 dark:text-surface-50 tracking-tight text-balance">
              {t('contactHeading')}
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-3.5 sm:mt-4 text-xs sm:text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto leading-relaxed text-pretty">
              {t('contactDesc')}
            </motion.p>

            {/* Direct Contact Buttons - Mobile full-width */}
            <motion.div variants={fadeUp} className="mt-8 sm:mt-10 flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
              <a
                href="mailto:augyerislioga.s@gmail.com"
                className="cursor-pointer inline-flex items-center justify-center gap-2.5 px-6 py-3 min-h-[48px] rounded-xl font-medium text-sm sm:text-base bg-accent-600 hover:bg-accent-700 text-white shadow-xl shadow-accent-600/25 transition-all active:scale-95"
              >
                <MailIcon className="w-5 h-5" />
                {t('sendMessage')}
              </a>

              <button
                onClick={handleCopyEmail}
                className="cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[48px] rounded-xl font-mono text-xs sm:text-sm font-medium border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 text-surface-700 dark:text-surface-200 hover:border-accent-300 dark:hover:border-accent-500/40 transition-all active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {t('copyEmail')}
              </button>
            </motion.div>

            {/* Social Connection */}
            <motion.div variants={fadeUp} className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-surface-200/60 dark:border-surface-800/60">
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-surface-500 dark:text-surface-400 mb-3.5 sm:mb-4">
                {t('orConnect')}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
                <a
                  href="https://www.linkedin.com/in/augyeris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-xl text-xs sm:text-sm font-medium border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 hover:border-accent-300 dark:hover:border-accent-500/30 text-surface-700 dark:text-surface-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/masegy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-xl text-xs sm:text-sm font-medium border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 hover:border-accent-300 dark:hover:border-accent-500/30 text-surface-700 dark:text-surface-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 pb-12 sm:pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm font-mono text-surface-500 dark:text-surface-400">
              © {new Date().getFullYear()} Augyeris Lioga Seandrio • {t('footerText')}
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="https://www.linkedin.com/in/augyeris" target="_blank" rel="noopener noreferrer" className="text-surface-400 hover:text-accent-500 transition-colors p-2 min-w-[40px] min-h-[40px] flex items-center justify-center" aria-label="LinkedIn">
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a href="https://github.com/masegy" target="_blank" rel="noopener noreferrer" className="text-surface-400 hover:text-accent-500 transition-colors p-2 min-w-[40px] min-h-[40px] flex items-center justify-center" aria-label="GitHub">
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a href="mailto:augyerislioga.s@gmail.com" className="text-surface-400 hover:text-accent-500 transition-colors p-2 min-w-[40px] min-h-[40px] flex items-center justify-center" aria-label="Email">
                <MailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back To Top */}
      <BackToTop />

      {/* Copy Email Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}

/* ─── Helper Sub-component ──────────────────────────────── */

function SocialLink({ href, label, children }) {
  const isExternal = !href.startsWith('mailto:');
  return (
    <motion.a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="cursor-pointer inline-flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:border-accent-300 dark:hover:border-accent-500/30 hover:text-accent-600 dark:hover:text-accent-400 hover:shadow-lg hover:shadow-accent-500/10 transition-all select-none active:scale-95"
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}
