const translations = {
  en: {
    // Nav
    navProjects: 'Projects',
    navExperience: 'Experience',
    navCertifications: 'Certifications',
    navSkills: 'Skills',
    navContact: 'Contact',

    // Hero
    statusBadge: 'Available for opportunities',
    role: 'DevOps Engineer & Platform Automation',
    bio: 'DevOps Engineer with a robust background in frontend architecture, specializing in automated CI/CD pipelines, container orchestration, and application observability. Passionate about bridging development and operations to deliver resilient, secure, and rapid software deployments at enterprise scale.',
    contactCta: 'Get in Touch',
    copyEmail: 'Copy Email',
    emailCopied: 'Email copied to clipboard!',
    viewProjectsCta: 'View Architecture',

    // Hero Pipeline Simulation
    pipelineTitle: 'WONDR_CI_CD_PIPELINE',
    pipelineBranch: 'main : release-v2.4.0',
    pipelineTriggerBtn: 'Run Pipeline',
    pipelineRunning: 'Executing Pipeline...',
    pipelineSuccess: 'All Stages Passed',
    stepCommit: 'Git commit push: release-candidate',
    stepBuild: 'Jenkins build & Groovy script pass',
    stepVault: 'HashiCorp Vault: secrets injected',
    stepFastlane: 'Fastlane: iOS & Android artifacts generated',
    stepDeploy: 'OpenShift cluster: zero-downtime deploy',
    stepMonitor: 'Elastic APM: telemetry active & healthy',

    // Metrics Bar
    metricYearsVal: '4+',
    metricYearsLabel: 'Years in Tech & Engineering',
    metricPipelinesVal: '100%',
    metricPipelinesLabel: 'Automated CI/CD Delivery',
    metricScaleVal: 'Enterprise',
    metricScaleLabel: 'Banking Grade Scale (WONDR)',
    metricCertVal: 'ACA',
    metricCertLabel: 'Alibaba Cloud Certified',

    // Featured Projects
    projectsBadge: 'Featured Architecture',
    projectsHeading: 'Systems & Infrastructure Projects',
    projectsSubheading: 'Production-grade CI/CD pipelines, enterprise container orchestration, observability, and banking microfrontends.',
    
    p1Title: 'WONDR by BNI Mobile CI/CD Automation',
    p1Category: 'CI/CD & Mobile Release',
    p1Org: 'WONDR by BNI',
    p1Desc: 'End-to-end continuous integration and delivery architecture for Android and iOS banking apps, integrating Jenkins pipelines, Fastlane automation, HashiCorp Vault secrets, and multi-channel distribution.',
    p1Impact: 'Automated manual release cycles into reliable, secure pipelines across Firebase App Distribution & Apple App Store Connect.',

    p2Title: 'OpenShift Enterprise Microservices & YAML Templating',
    p2Category: 'Cloud & Orchestration',
    p2Org: 'Core Banking Infrastructure',
    p2Desc: 'Orchestration and deployment automation for on-premises OpenShift Kubernetes clusters, designing reusable YAML pipeline templates and dynamic Groovy deployment scripts.',
    p2Impact: 'Standardized microservice onboarding and eliminated deployment drifts across hybrid on-prem clusters.',

    p3Title: 'Elastic APM Telemetry & Kafka Stream Stabilization',
    p3Category: 'Observability & Streaming',
    p3Org: 'Application Observability',
    p3Desc: 'Auto-instrumentation of Java enterprise microservices using Elastic APM Java Agent, along with deep diagnosis and resolution of Kafka cluster disk imbalance issues.',
    p3Impact: 'Restored distributed event streaming throughput and provided real-time latency tracing across core banking services.',

    p4Title: 'BNI Mobile Banking Microsites & Single-Spa Microfrontends',
    p4Category: 'Frontend & Microfrontends',
    p4Org: 'PT Bank Negara Indonesia Tbk',
    p4Desc: 'High-traffic commercial partner microsites embedded within BNI Mobile Banking (Traveloka, Bluebird, Lifestyle) and single-spa microfrontend architecture for state agencies.',
    p4Impact: 'Delivered seamless native-webview hybrid performance serving millions of active bank customers.',

    // Experience
    expBadge: 'Work Experience',
    expHeading: 'Career Journey',

    // Experience entries
    exp1Role: 'DevOps Engineer',
    exp1Company: 'WONDR by BNI — PT Bank Negara Indonesia Tbk',
    exp1Period: 'Nov 2024 — Present',
    exp1Type: 'Full-time',
    exp1Points: [
      'Built and maintained CI/CD pipelines for Android and iOS applications using Jenkins, Fastlane, integrated with Vault, Firebase App Distribution, and App Store Connect.',
      'Developed dynamic deployment scripting using Groovy (Jenkinsfile) and Shell scripts for release automation.',
      'Managed on-premises OpenShift infrastructure, including microservice deployment and YAML-based pipeline templating.',
      'Integrated Elastic APM Java Agent for automatic instrumentation on Java applications.',
      'Diagnosed and resolved Kafka disk usage imbalance.',
    ],

    exp2Role: 'Frontend Developer',
    exp2Company: 'PT Bank Negara Indonesia (Persero) Tbk',
    exp2Period: 'Apr 2022 — Nov 2024',
    exp2Type: 'Full-time',
    exp2Points: [
      'Developed microsite projects integrated with BNI Mobile Banking (Bluebird, Traveloka, Lifestyle).',
      'Completed microfrontend dashboards for BP Tapera, KKP, and SKK Migas.',
    ],

    exp3Role: 'Intern Frontend Developer',
    exp3Company: 'PT Bank Negara Indonesia (Persero) Tbk',
    exp3Period: 'Feb 2022 — Apr 2022',
    exp3Type: 'Internship',
    exp3Points: [
      'Implemented microfrontend architecture using Single-spa JavaScript for the OPFA project.',
    ],

    exp4Role: 'Production Control Management System Data Entry',
    exp4Company: 'Sembcorp Marine Ltd',
    exp4Period: 'Oct 2021 — Jan 2022',
    exp4Type: 'Contract',
    exp4Points: [
      'Managed progressive documentation for Fabrication Records and Material Traceability Numbers.',
    ],

    exp5Role: 'Information Technology Support Staff',
    exp5Company: 'PT FAJAR MAS MURNI',
    exp5Period: 'Jan 2019 — Feb 2019',
    exp5Type: 'Internship',
    exp5Points: [
      'Developed a web ticketing system using .NET and Bootstrap.',
    ],

    // Certifications
    certBadge: 'Licenses & Certifications',
    certHeading: 'Certifications',
    verifiedCert: 'Verified Credential',

    // Skills
    skillsBadge: 'Tech Stack',
    skillsHeading: 'Technical Expertise',
    tabAll: 'All Technologies',
    tabCicd: 'CI/CD & Automation',
    tabCloud: 'Cloud & Orchestration',
    tabObservability: 'Observability & Streaming',
    tabFrontend: 'Frontend & Web',

    // Contact
    contactBadge: 'Get In Touch',
    contactHeading: 'Let’s Build Resilient Systems Together',
    contactDesc: 'Open for DevOps, Cloud Infrastructure, and Platform Engineering roles or collaborations. Let’s connect to discuss how I can help streamline your engineering lifecycle.',
    timezoneText: 'Jakarta, Indonesia (WIB / UTC+7)',
    availabilityText: 'Available for opportunities',
    sendMessage: 'Send an Email',
    orConnect: 'Or find me on professional platforms:',

    // Footer
    footerText: 'Built with Next.js, Tailwind CSS & Framer Motion.',

    // Photo modal
    photoClose: 'Close photo',
    photoView: 'View profile photo',
  },

  id: {
    // Nav
    navProjects: 'Proyek',
    navExperience: 'Pengalaman',
    navCertifications: 'Sertifikasi',
    navSkills: 'Keahlian',
    navContact: 'Kontak',

    // Hero
    statusBadge: 'Tersedia untuk peluang baru',
    role: 'DevOps Engineer & Platform Automation',
    bio: 'DevOps Engineer dengan fondasi kuat di frontend architecture, berpengalaman dalam otomatisasi pipeline CI/CD, orkestrasi container, dan observabilitas aplikasi. Berdedikasi menjembatani development dan operations untuk menghadirkan deployment perangkat lunak yang andal, aman, dan cepat dalam skala perbankan.',
    contactCta: 'Hubungi Saya',
    copyEmail: 'Salin Email',
    emailCopied: 'Email berhasil disalin ke clipboard!',
    viewProjectsCta: 'Lihat Arsitektur',

    // Hero Pipeline Simulation
    pipelineTitle: 'WONDR_CI_CD_PIPELINE',
    pipelineBranch: 'main : release-v2.4.0',
    pipelineTriggerBtn: 'Jalankan Pipeline',
    pipelineRunning: 'Menjalankan Pipeline...',
    pipelineSuccess: 'Semua Tahap Berhasil',
    stepCommit: 'Git commit push: release-candidate',
    stepBuild: 'Jenkins build & Groovy script lolos',
    stepVault: 'HashiCorp Vault: injeksi rahasia aman',
    stepFastlane: 'Fastlane: artefak iOS & Android dibuat',
    stepDeploy: 'OpenShift cluster: zero-downtime deploy',
    stepMonitor: 'Elastic APM: telemetri aktif & sehat',

    // Metrics Bar
    metricYearsVal: '4+',
    metricYearsLabel: 'Tahun Pengalaman Teknologi',
    metricPipelinesVal: '100%',
    metricPipelinesLabel: 'Otomatisasi Rilis CI/CD',
    metricScaleVal: 'Enterprise',
    metricScaleLabel: 'Skala Perbankan (WONDR)',
    metricCertVal: 'ACA',
    metricCertLabel: 'Tersertifikasi Alibaba Cloud',

    // Featured Projects
    projectsBadge: 'Arsitektur Unggulan',
    projectsHeading: 'Sistem & Proyek Infrastruktur',
    projectsSubheading: 'Pipeline CI/CD skala produksi, orkestrasi kontainer enterprise, observabilitas sistem, dan microfrontend perbankan.',
    
    p1Title: 'Otomatisasi CI/CD Mobile WONDR by BNI',
    p1Category: 'CI/CD & Rilis Mobile',
    p1Org: 'WONDR by BNI',
    p1Desc: 'Arsitektur continuous integration dan continuous delivery menyeluruh untuk aplikasi perbankan Android dan iOS, mengintegrasikan pipeline Jenkins, otomatisasi Fastlane, keamanan HashiCorp Vault, dan distribusi multi-channel.',
    p1Impact: 'Mengotomatiskan siklus rilis manual menjadi pipeline yang andal dan aman ke Firebase App Distribution & Apple App Store Connect.',

    p2Title: 'Microservices Enterprise OpenShift & YAML Templating',
    p2Category: 'Cloud & Orkestrasi',
    p2Org: 'Infrastruktur Inti Perbankan',
    p2Desc: 'Orkestrasi dan otomatisasi deployment untuk kluster Kubernetes OpenShift on-premises, merancang template pipeline YAML yang dapat digunakan kembali dan skrip deployment dinamis Groovy.',
    p2Impact: 'Menstandardisasi onboarding microservice dan mengeliminasi perbedaan konfigurasi rilis di seluruh kluster on-prem.',

    p3Title: 'Telemetri Elastic APM & Stabilisasi Data Stream Kafka',
    p3Category: 'Observabilitas & Streaming',
    p3Org: 'Observabilitas Aplikasi',
    p3Desc: 'Instrumentasi otomatis microservice enterprise Java menggunakan Elastic APM Java Agent, disertai diagnosis mendalam dan resolusi ketidakseimbangan disk kluster Kafka.',
    p3Impact: 'Memulihkan kestabilan throughput event streaming terdistribusi dan memberikan pelacakan latensi real-time di seluruh layanan perbankan.',

    p4Title: 'Microsite BNI Mobile Banking & Single-Spa Microfrontend',
    p4Category: 'Frontend & Microfrontend',
    p4Org: 'PT Bank Negara Indonesia Tbk',
    p4Desc: 'Proyek microsite mitra komersial dengan trafik tinggi di dalam BNI Mobile Banking (Traveloka, Bluebird, Lifestyle) serta arsitektur single-spa microfrontend untuk instansi pemerintah.',
    p4Impact: 'Menghadirkan performa hybrid native-webview yang mulus dan cepat melayani jutaan nasabah aktif perbankan.',

    // Experience
    expBadge: 'Pengalaman Kerja',
    expHeading: 'Perjalanan Karier',

    // Experience entries
    exp1Role: 'DevOps Engineer',
    exp1Company: 'WONDR by BNI — PT Bank Negara Indonesia Tbk',
    exp1Period: 'Nov 2024 — Sekarang',
    exp1Type: 'Penuh Waktu',
    exp1Points: [
      'Membangun dan memelihara pipeline CI/CD untuk aplikasi Android dan iOS menggunakan Jenkins, Fastlane, yang terintegrasi dengan Vault, Firebase App Distribution, dan App Store Connect.',
      'Mengembangkan scripting deployment dinamis menggunakan Groovy (Jenkinsfile) dan Shell scripts untuk otomatisasi rilis.',
      'Mengelola infrastruktur OpenShift on-premises, termasuk deployment microservice dan templating pipeline berbasis YAML.',
      'Mengintegrasikan Elastic APM Java Agent untuk instrumentasi otomatis pada aplikasi Java.',
      'Mendiagnosis dan menyelesaikan ketidakseimbangan penggunaan disk Kafka.',
    ],

    exp2Role: 'Frontend Developer',
    exp2Company: 'PT Bank Negara Indonesia (Persero) Tbk',
    exp2Period: 'Apr 2022 — Nov 2024',
    exp2Type: 'Penuh Waktu',
    exp2Points: [
      'Mengembangkan proyek microsite yang terintegrasi dengan BNI Mobile Banking (Bluebird, Traveloka, Lifestyle).',
      'Menyelesaikan dashboard microfrontend untuk BP Tapera, KKP, dan SKK Migas.',
    ],

    exp3Role: 'Intern Frontend Developer',
    exp3Company: 'PT Bank Negara Indonesia (Persero) Tbk',
    exp3Period: 'Feb 2022 — Apr 2022',
    exp3Type: 'Magang',
    exp3Points: [
      'Mengimplementasikan arsitektur microfrontend menggunakan Single-spa JavaScript untuk proyek OPFA.',
    ],

    exp4Role: 'Production Control Management System Data Entry',
    exp4Company: 'Sembcorp Marine Ltd',
    exp4Period: 'Okt 2021 — Jan 2022',
    exp4Type: 'Kontrak',
    exp4Points: [
      'Mengelola dokumentasi progresif untuk Fabrication Records dan Material Traceability Numbers.',
    ],

    exp5Role: 'Information Technology Support Staff',
    exp5Company: 'PT FAJAR MAS MURNI',
    exp5Period: 'Jan 2019 — Feb 2019',
    exp5Type: 'Magang',
    exp5Points: [
      'Mengembangkan sistem web ticketing menggunakan .NET dan Bootstrap.',
    ],

    // Certifications
    certBadge: 'Lisensi & Sertifikasi',
    certHeading: 'Sertifikasi',
    verifiedCert: 'Kredensial Terverifikasi',

    // Skills
    skillsBadge: 'Tech Stack',
    skillsHeading: 'Keahlian Teknis',
    tabAll: 'Semua Teknologi',
    tabCicd: 'CI/CD & Otomatisasi',
    tabCloud: 'Cloud & Orkestrasi',
    tabObservability: 'Observabilitas & Streaming',
    tabFrontend: 'Frontend & Web',

    // Contact
    contactBadge: 'Hubungi Saya',
    contactHeading: 'Mari Membangun Sistem yang Andal Bersama',
    contactDesc: 'Terbuka untuk posisi DevOps, Cloud Infrastructure, dan Platform Engineering atau kolaborasi teknis. Mari berdiskusi tentang bagaimana saya dapat membantu mengoptimalkan lifecycle engineering Anda.',
    timezoneText: 'Jakarta, Indonesia (WIB / UTC+7)',
    availabilityText: 'Tersedia untuk peluang baru',
    sendMessage: 'Kirim Email',
    orConnect: 'Atau terhubung di platform profesional:',

    // Footer
    footerText: 'Dibuat dengan Next.js, Tailwind CSS & Framer Motion.',

    // Photo modal
    photoClose: 'Tutup foto',
    photoView: 'Lihat foto profil',
  },
};

export default translations;
