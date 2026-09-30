'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

export default function PipelineVisualizer() {
  const { t } = useLanguage();
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(6); // Default: all steps completed on load
  const [elapsedTime, setElapsedTime] = useState('2m 14s');

  const steps = [
    {
      id: 1,
      name: 'Git Commit',
      desc: t('stepCommit'),
      tag: 'git push',
      duration: '0.4s',
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 2,
      name: 'Jenkins CI',
      desc: t('stepBuild'),
      tag: 'groovy',
      duration: '45s',
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: 3,
      name: 'Vault Secret',
      desc: t('stepVault'),
      tag: 'security',
      duration: '1.2s',
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      id: 4,
      name: 'Fastlane Package',
      desc: t('stepFastlane'),
      tag: 'mobile',
      duration: '1m 12s',
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 5,
      name: 'OpenShift Deploy',
      desc: t('stepDeploy'),
      tag: 'k8s / yaml',
      duration: '14s',
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      id: 6,
      name: 'Elastic APM',
      desc: t('stepMonitor'),
      tag: 'telemetry',
      duration: 'realtime',
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const triggerRun = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    setElapsedTime('Running...');

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setActiveStep(current);
      if (current >= steps.length) {
        clearInterval(interval);
        setIsRunning(false);
        setElapsedTime('2m 14s');
      }
    }, 600);
  };

  return (
    <div className="w-full rounded-2xl border border-surface-200 dark:border-surface-800/90 bg-white/90 dark:bg-surface-900/90 backdrop-blur-xl shadow-xl shadow-surface-900/5 dark:shadow-surface-950/40 overflow-hidden text-left font-sans">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-surface-200 dark:border-surface-800 px-3 sm:px-4 py-2.5 sm:py-3 bg-surface-100/70 dark:bg-surface-950/70 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-1 sm:ml-2 font-mono text-[11px] sm:text-xs font-semibold text-surface-600 dark:text-surface-400 select-none">
            {t('pipelineTitle')}
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-medium text-surface-500 dark:text-surface-400 bg-surface-200/60 dark:bg-surface-800/80 px-2 py-0.5 rounded-md max-w-[150px] sm:max-w-none truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
            <span className="truncate">{t('pipelineBranch')}</span>
          </span>
        </div>
      </div>

      {/* Pipeline Stages */}
      <div className="p-3.5 sm:p-5 space-y-2.5 sm:space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-surface-100 dark:border-surface-800/50 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className={`absolute inline-flex h-full w-full rounded-full ${isRunning ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`} />
              <span className={`relative inline-flex h-2 w-2 rounded-full ${isRunning ? 'bg-amber-500' : 'bg-emerald-500'}`} />
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-medium text-surface-600 dark:text-surface-300 truncate">
              {isRunning ? t('pipelineRunning') : t('pipelineSuccess')}
            </span>
          </div>

          <button
            onClick={triggerRun}
            disabled={isRunning}
            className="cursor-pointer inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-1 min-h-[36px] text-xs font-medium font-mono rounded-lg bg-accent-500/10 hover:bg-accent-500/20 text-accent-600 dark:text-accent-400 border border-accent-500/30 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shrink-0 select-none"
          >
            <svg
              className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>{t('pipelineTriggerBtn')}</span>
          </button>
        </div>

        {/* Step Items */}
        <div className="space-y-1.5 sm:space-y-2">
          {steps.map((step, index) => {
            const isCompleted = activeStep > index;
            const isCurrent = activeStep === index && isRunning;

            return (
              <motion.div
                key={step.id}
                className={`flex items-center justify-between p-2 sm:p-2.5 rounded-xl border transition-all ${
                  isCurrent
                    ? 'border-accent-400/80 bg-accent-500/10 dark:bg-accent-500/15 shadow-sm'
                    : isCompleted
                    ? 'border-surface-200/80 dark:border-surface-800/80 bg-surface-50/50 dark:bg-surface-800/30'
                    : 'border-surface-100 dark:border-surface-800/30 opacity-40'
                }`}
                animate={{
                  scale: isCurrent ? 1.01 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1 pr-2">
                  {/* Status Indicator Icon */}
                  <div
                    className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-xs font-mono shrink-0 transition-colors ${
                      isCurrent
                        ? 'bg-accent-500 text-white animate-pulse'
                        : isCompleted
                        ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                        : 'bg-surface-200 dark:bg-surface-800 text-surface-400'
                    }`}
                  >
                    {isCompleted ? (
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.icon
                    )}
                  </div>

                  {/* Stage Text */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="text-xs font-bold font-mono text-surface-900 dark:text-surface-100 truncate">
                        {step.name}
                      </span>
                      <span className="hidden xs:inline-block text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-surface-400 dark:text-surface-500 shrink-0">
                        [{step.tag}]
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-surface-500 dark:text-surface-400 font-mono truncate">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Timing Badge */}
                <span className="font-mono text-[10px] sm:text-[11px] font-medium text-surface-500 dark:text-surface-400 shrink-0">
                  {isCompleted ? step.duration : isCurrent ? 'running...' : 'pending'}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Pipeline Footer Specs */}
        <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-surface-100 dark:border-surface-800/60 flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] font-mono text-surface-500 dark:text-surface-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            Zero-downtime rolling update
          </span>
          <span>Duration: <strong className="text-surface-700 dark:text-surface-200">{elapsedTime}</strong></span>
        </div>
      </div>
    </div>
  );
}
