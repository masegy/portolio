'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ThemeToggle from '../components/ThemeToggle';
import BackToTop from '../components/BackToTop';

/* ─── Data ──────────────────────────────────────────────── */

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'PT Bank Negara Indonesia Tbk',
    period: 'Apr 2022 — Present',
    type: 'Full-time',
    points: [
      'Partisipasi dalam pengembangan Frontend dengan fokus pada projek Microsite dan Microfrontend.',
      'Kolaborasi pengembangan microsite Bluebird, Traveloka, dan Riwayat Transaksi Lifestyle yang terintegrasi BNI Mobile Banking.',
      'Pengembangan dashboard microfrontend untuk BP Tapera, SKK Migas, dan Kartu Kredit Pemerintah.',
      'Bertanggung jawab atas konfigurasi arsitektur dan deployment menggunakan OpenShift Container Platform.',
    ],
  },
  {
    role: 'Intern Frontend Developer',
    company: 'PT Bank Negara Indonesia Tbk',
    period: 'Feb 2022 — Apr 2022',
    type: 'Internship',
    points: [
      'Mengimplementasikan arsitektur microfrontend menggunakan Single-spa JS dan React dalam proyek OPFA.',
      'Meningkatkan user experience dengan optimalisasi struktur dan navigasi.',
    ],
  },
  {
    role: 'Production Control Management System Data Entry',
    company: 'Sembcorp Marine Ltd',
    period: 'Oct 2021 — Jan 2023',
    type: 'Contract',
    points: [
      'Memastikan pengaturan gambar akurat dan pembaharuan revisi tepat waktu.',
      'Mengelola pencatatan progresif Catatan Fabrikasi dan Nomor Jejak Material.',
    ],
  },
  {
    role: 'Information Technology Support Staff',
    company: 'PT FAJAR MAS MURNI',
    period: 'Jan 2019 — Feb 2019',
    type: 'Internship',
    points: [
      'Pengembangan website ticketing general affair menggunakan .NET dan Bootstrap.',
      'Pemeliharaan perangkat lunak dan keras perusahaan.',
    ],
  },
];

const skills = [
  'HTML',
  'CSS',
  'React JS',
  'TailwindCSS',
  'Single-Spa JS',
  'Microfrontend',
  'Node.js',
  'OpenShift Container Platform',
  'Google Cloud Platform',
  'Docker',
];

/* ─── Animation variants ────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

/* ─── Icons ─────────────────────────────────────────────── */

function LinkedInIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function BriefcaseIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  );
}

/* ─── Page ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-950">

      {/* ── Floating Header ── */}
      <header className="fixed top-0 inset-x-0 z-50">
        <nav className="mx-auto max-w-5xl mt-4 px-4">
          <div className="flex items-center justify-between rounded-2xl border border-surface-200 dark:border-surface-800 bg-white/80 dark:bg-surface-900/80 backdrop-blur-xl px-5 py-3 shadow-lg shadow-surface-900/5 dark:shadow-surface-950/30">
            <a href="#" className="text-lg font-bold tracking-tight text-surface-900 dark:text-surface-50">
              AL<span className="text-accent-500">.</span>
            </a>

            <div className="flex items-center gap-1 sm:gap-3">
              {['Experience', 'Skills'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-sm font-medium text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
                >
                  {item}
                </a>
              ))}
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-500/10 dark:bg-accent-500/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent-400/10 dark:bg-accent-400/5 blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Profile photo */}
            <motion.div variants={fadeUp} custom={0} className="mb-8 flex justify-center">
              <div className="relative">
                {/* Gradient glow behind photo */}
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-accent-400 via-accent-500 to-accent-700 opacity-75 blur-sm" />
                {/* Gradient ring */}
                <div className="relative rounded-full p-[3px] bg-gradient-to-br from-accent-400 via-accent-500 to-accent-700">
                  <div className="rounded-full overflow-hidden bg-surface-50 dark:bg-surface-900 p-[2px]">
                    <Image
                      src="/profile.png"
                      alt="Augyeris Lioga Seandrio"
                      width={160}
                      height={160}
                      priority
                      className="rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Status badge */}
            <motion.div variants={fadeUp} custom={1} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 dark:border-accent-500/20 bg-accent-50 dark:bg-accent-500/10 px-4 py-1.5 text-sm font-medium text-accent-700 dark:text-accent-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              custom={2}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-surface-900 dark:text-surface-50 leading-[1.1]"
            >
              Augyeris Lioga Seandrio
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fadeUp}
              custom={3}
              className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-accent-600 dark:text-accent-400"
            >
              Frontend Developer
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              custom={4}
              className="mt-6 text-base sm:text-lg text-surface-600 dark:text-surface-400 leading-relaxed max-w-2xl mx-auto"
            >
              Pengembang web frontend yang terampil menciptakan pengalaman web yang menarik dan ramah pengguna.
              Terbiasa berkoordinasi dengan tim, desainer UI/UX, dan backend developer.
              Antusias mencari pengetahuan baru dan mengikuti tren industri.
            </motion.p>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="mt-10 flex items-center justify-center gap-4"
            >
              <SocialLink href="https://www.linkedin.com/in/augyeris" label="LinkedIn">
                <LinkedInIcon className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="https://github.com/masegy" label="GitHub">
                <GitHubIcon className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="mailto:augyerislioga.s@gmail.com" label="Email">
                <MailIcon className="w-5 h-5" />
              </SocialLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Experience Section ── */}
      <section id="experience" className="py-20 sm:py-28 px-6 bg-white dark:bg-surface-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            {/* Section heading */}
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 px-4 py-1.5 text-sm font-medium text-surface-600 dark:text-surface-400 mb-4">
                <BriefcaseIcon className="w-4 h-4" />
                Work Experience
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-surface-50">
                Perjalanan Karier
              </h2>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-surface-200 dark:bg-surface-700" />

              <div className="space-y-12">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    className="relative pl-14 md:pl-20"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-3.5 md:left-6.5 top-1.5 flex items-center justify-center">
                      <span className="h-3 w-3 rounded-full border-2 border-accent-500 bg-white dark:bg-surface-900 ring-4 ring-accent-100 dark:ring-accent-500/10" />
                    </div>

                    {/* Card */}
                    <div className="group rounded-2xl border border-surface-200 dark:border-surface-800 bg-surface-50/50 dark:bg-surface-800/50 p-5 sm:p-6 transition-all hover:border-accent-300 dark:hover:border-accent-500/30 hover:shadow-lg hover:shadow-accent-500/5">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-surface-900 dark:text-surface-50">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-medium text-accent-600 dark:text-accent-400">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="inline-flex items-center rounded-full bg-accent-50 dark:bg-accent-500/10 px-2.5 py-0.5 text-xs font-medium text-accent-700 dark:text-accent-300">
                            {exp.type}
                          </span>
                          <span className="text-xs text-surface-500 dark:text-surface-400 whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2 mt-4">
                        {exp.points.map((point, j) => (
                          <li key={j} className="flex gap-3 text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-500/60 flex-shrink-0" />
                            {point}
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

      {/* ── Skills Section ── */}
      <section id="skills" className="py-20 sm:py-28 px-6 bg-surface-50 dark:bg-surface-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            {/* Section heading */}
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 px-4 py-1.5 text-sm font-medium text-surface-600 dark:text-surface-400 mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                Tech Stack
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-surface-50">
                Keahlian Teknis
              </h2>
            </motion.div>

            {/* Skills grid */}
            <motion.div
              variants={stagger}
              className="flex flex-wrap justify-center gap-3"
            >
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  variants={scaleIn}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="inline-flex items-center rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base font-medium text-surface-700 dark:text-surface-300 shadow-sm hover:border-accent-300 dark:hover:border-accent-500/30 hover:shadow-md hover:text-accent-600 dark:hover:text-accent-400 cursor-default select-none transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-surface-500 dark:text-surface-400">
              © {new Date().getFullYear()} Augyeris Lioga Seandrio Built with Next.js & Tailwind CSS.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/augyeris" target="_blank" rel="noopener noreferrer" className="text-surface-400 hover:text-accent-500 transition-colors" aria-label="LinkedIn">
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a href="https://github.com/masegy" target="_blank" rel="noopener noreferrer" className="text-surface-400 hover:text-accent-500 transition-colors" aria-label="GitHub">
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a href="mailto:augyerislioga.s@gmail.com" className="text-surface-400 hover:text-accent-500 transition-colors" aria-label="Email">
                <MailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}

/* ─── Sub-components ────────────────────────────────────── */

function SocialLink({ href, label, children }) {
  const isExternal = !href.startsWith('mailto:');
  return (
    <motion.a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:border-accent-300 dark:hover:border-accent-500/30 hover:text-accent-600 dark:hover:text-accent-400 hover:shadow-lg hover:shadow-accent-500/10 transition-all"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}
