export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  clientOrRole: string;
  description: string;
  longDescription: string;
  techStack: string[];
  keyHighlights: string[];
  architecture?: string[];
  previewUrl?: string;
  githubUrl?: string;
  imageCol1: string;
  imageCol2: string;
  imageCol3: string;
  bannerColor: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName?: string }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  skillsUsed: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Oussama Moujane",
    brand: "OUSSAMA DEV",
    title: "Full Stack & Mobile Developer",
    location: "Marrakech, Morocco",
    email: "moujane1023@gmail.com",
    phone: "+212 693-805596",
    whatsapp: "212693805596",
    languages: [
      { name: "French", level: "Fluent (Courant)" },
      { name: "English", level: "Fluent (Courant)" },
      { name: "Spanish", level: "Intermediate (Intermédiaire)" },
    ],
    bio: "Full Stack & Mobile Developer specializing in high-performance web applications, cross-platform mobile solutions, and scalable SaaS backends. Driven by modern UI/UX design, performance optimization, and robust software architecture.",
    longBio: "Passionate software engineer trained at École Racine Marrakech. Experienced in front-end (React, Next.js, Tailwind CSS), back-end (Laravel, Node.js, Django), cross-platform mobile (Flutter, React Native), and database architecture (MongoDB, MySQL, Firebase). I build reliable, production-ready platforms that combine sleek visual design with efficient backend engineering.",
    avatarUrl: "/assets/oussama_portrait.jpg",
    logoUrl: "/assets/oussama_logo.jpg",
    githubUrl: "https://github.com/neveritodv",
    linkedinUrl: "https://www.linkedin.com/in/oussama-moujan-20a787342/",
  },

  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Production Projects", value: "6+" },
    { label: "Tech Stack Tools", value: "15+" },
    { label: "Client Satisfaction", value: "100%" },
  ],

  hardSkills: [
    {
      category: "Languages",
      items: ["PHP", "JavaScript", "TypeScript", "Dart", "Java", "Python", "C", "C++", "C#"],
    },
    {
      category: "Web Development",
      items: ["React.js", "Next.js", "Laravel", "Node.js", "Express.js", "Tailwind CSS", "WordPress", "HTML5/CSS3"],
    },
    {
      category: "Mobile & Desktop",
      items: ["Flutter", "React Native", "Java Swing", ".NET", "ImGui"],
    },
    {
      category: "Backend & Frameworks",
      items: ["Django", "Flask", "REST APIs", "WebSockets", "Socket.io", "Laravel Sail", "Docker"],
    },
    {
      category: "Databases & Cloud",
      items: ["MySQL", "MongoDB", "SQLite", "SQL Server", "Firebase Firestore"],
    },
  ],

  softSkills: [
    "Creativity & UX Focus",
    "Autonomy & Initiative",
    "Team Collaboration",
    "Adaptability",
    "Problem Solving & Debugging",
    "Effective Communication",
  ],

  experiences: [
    {
      role: "Fullstack Web Developer Intern",
      company: "Stage Développement Web (Laravel / React)",
      period: "February 2026",
      location: "Marrakech, Morocco",
      type: "Internship",
      description: [
        "Architected and engineered a robust RESTful backend API using Laravel 12 (PHP 8.2) with Eloquent ORM.",
        "Built responsive, dynamic user interfaces in React 18 with Tailwind CSS for optimal user experience.",
        "Seamlessly connected frontend and backend through type-safe API endpoints and state handlers.",
        "Participated in bug resolution, code audits, performance tuning, and application maintenance.",
      ],
      skillsUsed: ["Laravel 12", "React 18", "Tailwind CSS", "REST API", "MySQL", "Vite"],
    },
    {
      role: "Full Stack Developer Training & Projects",
      company: "École Racine",
      period: "2024 - 2026",
      location: "Marrakech, Morocco",
      type: "Formation & Practical Projects",
      description: [
        "In-depth training in modern web engineering, mobile development, and object-oriented software design.",
        "Conducted multi-disciplinary projects collaborating with design and dev teams.",
        "Mastered clean coding practices, database modeling, software quality assurance, and unit testing.",
      ],
      skillsUsed: ["Full Stack", "Mobile Dev", "Database Design", "Agile", "Software Quality"],
    },
    {
      role: "Graduation Project (PFE) - Intelligent Logistics Platform",
      company: "École Racine Marrakech",
      period: "Final Year Project",
      location: "Marrakech, Morocco",
      type: "PFE Project",
      description: [
        "Engineered an event-scale meal delivery & promo logistics platform for large crowds (CAN, festivals).",
        "Developed 2 Flutter mobile apps (Client & Driver) with live GPS geolocation tracking via WebSockets.",
        "Integrated AI pathfinding (A* algorithm) for crowd flows and LSTM neural networks for order spike forecasting.",
        "Benchmarked system at 1800+ concurrent requests with under 200ms API response time.",
      ],
      skillsUsed: ["Flutter", "Node.js", "Express", "MongoDB", "WebSockets", "A* Algorithm", "LSTM"],
    },
  ],

  services: [
    {
      number: "01",
      title: "Web Application Development",
      description:
        "Building responsive, ultra-fast web platforms using React, Next.js, and Tailwind CSS on the frontend paired with Laravel or Node.js on the backend.",
    },
    {
      number: "02",
      title: "Cross-Platform Mobile Apps",
      description:
        "Developing native-quality iOS and Android applications with Flutter and React Native featuring real-time geolocation, offline support, and smooth UI.",
    },
    {
      number: "03",
      title: "SaaS & Multi-Tenant Backends",
      description:
        "Architecting secure multi-tenant backends, RESTful APIs, role-based access control (RBAC), database isolation, and third-party integrations (WhatsApp, Stripe).",
    },
    {
      number: "04",
      title: "Real-Time Systems & AI Logic",
      description:
        "Integrating WebSockets for live tracking, real-time messaging, IoT/GPS streams, and smart algorithmic features (predictive forecasting, pathfinding).",
    },
    {
      number: "05",
      title: "Database Modeling & API Design",
      description:
        "Designing scalable relational (MySQL, SQL Server) and NoSQL (MongoDB, Firebase) schemas with strict query optimization and security rules.",
    },
  ],

  projects: [
    {
      id: "meal-racine",
      number: "01",
      title: "Meal Racine (Racine Delivery)",
      subtitle: "Intelligent Event Logistics & Food Delivery Platform",
      category: "Mobile",
      clientOrRole: "Graduation Project (PFE)",
      description:
        "Comprehensive food and promo delivery platform for high-density event environments (CAN, festivals) with real-time GPS tracking and AI order prediction.",
      longDescription:
        "Meal Racine is an end-to-end event logistics and delivery platform engineered specifically for dense crowd environments like stadium tournaments and festivals. It features two Flutter mobile applications (for Clients and Delivery Drivers), a back-office administration portal in React.js, and a Node.js/Express backend powered by MongoDB geospatial 2dsphere indexing. Real-time GPS coordinates stream over Socket.io WebSockets with under 500ms latency. The system incorporates an adapted A* pathfinding algorithm for pedestrian crowd routing and an LSTM neural network model for predicting order spikes based on weather, match schedules, and location data.",
      techStack: ["Flutter", "React.js", "Node.js", "Express", "MongoDB", "WebSockets", "JWT", "A* Algorithm", "LSTM"],
      keyHighlights: [
        "2 Native Flutter Mobile Apps (Client & Driver) with live map navigation",
        "Back-office admin portal with Material-UI live supervision map",
        "Geospatial 2dsphere indexing in MongoDB for proximity matching",
        "Sub-200ms API response time under 500 req/sec stress test",
        "Stress tested up to 1,800+ concurrent requests using Artillery",
      ],
      architecture: [
        "Frontend: Flutter (Dart) Mobile Apps + React.js Admin Dashboard",
        "Backend: Node.js / Express microservices + JWT auth",
        "Database: MongoDB with geospatial indexes + Redis cache",
        "Realtime: WebSockets (Socket.io) with bidirectional GPS stream",
      ],
      previewUrl: "#",
      githubUrl: "https://github.com/neveritodv",
      imageCol1: "/assets/meal_racine_1.jpg",
      imageCol2: "/assets/meal_racine_2.jpg",
      imageCol3: "/assets/meal_racine_3.jpg",
      bannerColor: "from-purple-900 via-pink-800 to-indigo-950",
    },
    {
      id: "dreams-rent",
      number: "02",
      title: "Dreams Rent (Rental-Cars)",
      subtitle: "SaaS Fleet Management & Automated WhatsApp Relay",
      category: "SaaS",
      clientOrRole: "Internship Project (Stage)",
      description:
        "Multi-tenant car rental agency management platform with automated WhatsApp contract dispatch microservice and regulatory fleet tracking.",
      longDescription:
        "Dreams Rent is a multi-tenant SaaS platform built for car rental agency operations. Built on Laravel 12 (PHP 8.2) and MySQL, it isolates tenant data securely using strict policy rules. It features a custom Node.js + Express microservice utilizing whatsapp-web.js to automatically dispatch digital rental contracts, invoices, and booking confirmations directly to clients' WhatsApp accounts. The platform includes full fleet management (insurance renewals, technical inspections, oil change schedules), dynamic PDF contract generation with digital signatures, and accounting modules calculating per-vehicle ROI.",
      techStack: ["Laravel 12", "Node.js", "Express", "whatsapp-web.js", "MySQL", "Tailwind CSS", "Docker", "Vite"],
      keyHighlights: [
        "Multi-Tenant architecture with strict agency data isolation",
        "Automated WhatsApp Bridge microservice sending real-time PDF contracts",
        "Regulatory fleet tracking (Assurances, Vignettes, Visites techniques)",
        "Financial dashboard tracking revenue, expenses, and vehicle profitability",
        "Static code audit passing Larastan & PHP Insights with PSR-12 standard",
      ],
      architecture: [
        "Backend: Laravel 12 MVC + Eloquent ORM + Docker Sail",
        "Microservice: Node.js wa-bridge for automated WhatsApp notifications",
        "Frontend: Blade Templates + Tailwind CSS + Vite",
        "Security: Spatie Laravel-Permission RBAC (Admin, Manager, Agent)",
      ],
      previewUrl: "#",
      githubUrl: "https://github.com/neveritodv",
      imageCol1: "/assets/dreams_rent_1.jpg",
      imageCol2: "/assets/dreams_rent_2.jpg",
      imageCol3: "/assets/dreams_rent_3.jpg",
      bannerColor: "from-[#111216] via-[#1A1C23] to-[#252834]",
    },
    {
      id: "atlas-ethereal",
      number: "03",
      title: "Atlas Ethereal",
      subtitle: "Premium Frontend for Luxury Moroccan Expeditions",
      category: "Web",
      clientOrRole: "Client Web App",
      description:
        "High-end luxury expedition booking platform for Morocco's High Atlas Mountains and Sahara dunes featuring custom interactive vector mapping.",
      longDescription:
        "Atlas Ethereal is an editorial, high-end web platform designed for luxury expeditions in Morocco. Engineered with React 19, TypeScript, Vite, and Tailwind CSS, the application delivers a cinematic user interface. Key features include a custom interactive SVG Morocco vector map with animated radar pins and gold-gradient paths, an asymmetric layout engine with parallax scroll effects, a dynamic client-side expedition planner with live filtering, and floating-label booking funnels optimized for both desktop and mobile.",
      techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Lucide React"],
      keyHighlights: [
        "Custom SVG Morocco vector map with animated radar location pins",
        "Cinematic dark-mode luxury color scheme with amber/gold accents",
        "Touch-optimized horizontal scroll and asymmetric layout engine",
        "Fluid client-side expedition filter collapsing cleanly to mobile",
        "Zero third-party map bloat for instant sub-second page loads",
      ],
      architecture: [
        "Frontend: React 19 + TypeScript + Vite",
        "Styling: Tailwind CSS custom tokens (Deep stone #0c0a09, Amber/Gold accents)",
        "Motion: Framer Motion touch-optimized cinematic transitions",
      ],
      previewUrl: "#",
      githubUrl: "https://github.com/neveritodv",
      imageCol1: "/assets/atlas_ethereal_1.jpg",
      imageCol2: "/assets/atlas_ethereal_2.jpg",
      imageCol3: "/assets/atlas_ethereal_3.jpg",
      bannerColor: "from-stone-900 via-amber-950 to-neutral-900",
    },
    {
      id: "marco-kesh",
      number: "04",
      title: "Marco Kesh",
      subtitle: "Café & Restaurant Digital POS & Management System",
      category: "Full Stack",
      clientOrRole: "Commercial Solution",
      description:
        "Custom management digital backbone for cafés and restaurants handling instant orders, QR item scanning, stock alerts, and rush forecasting.",
      longDescription:
        "Marco Kesh is an all-in-one digital POS and administration platform engineered for high-volume cafés and restaurants. Built with a Laravel 11 + Sanctum backend and React 18 + Tailwind CSS frontend, it replaces manual paper workflows with a unified interface. It streamlines order taking (Dine-in, Takeaway, Delivery), integrates QR code product scanning via ZXing, auto-calculates cashier totals and discounts, generates print-ready PDF receipts using jsPDF, and monitors inventory levels with low-stock alerts. Crucially, it includes a sales forecasting module predicting peak hours based on historical data.",
      techStack: ["Laravel 11", "React 18", "MySQL", "Tailwind CSS", "Chart.js", "jsPDF", "jsQR", "ZXing"],
      keyHighlights: [
        "Real-time order workflow supporting Dine-in, Takeaway, and Delivery",
        "QR code scanning integration for fast item detail retrieval",
        "Predictive rush hour forecasting algorithm based on historical sales",
        "Smart stock management with automatic low-inventory triggers",
        "One-click PDF receipt generation and sales analytics reporting",
      ],
      architecture: [
        "Backend: Laravel 11 + Sanctum authentication + MySQL",
        "Frontend: React 18 + Vite + Tailwind CSS + Chart.js",
        "Integrations: ZXing QR scanner, jsPDF exporter",
      ],
      previewUrl: "#",
      githubUrl: "https://github.com/neveritodv",
      imageCol1: "/assets/marco_kesh_1.jpg",
      imageCol2: "/assets/marco_kesh_2.jpg",
      imageCol3: "/assets/marco_kesh_3.jpg",
      bannerColor: "from-orange-900 via-amber-800 to-red-950",
    },
    {
      id: "eduflux",
      number: "05",
      title: "EDUFLUX",
      subtitle: "Next-Generation Interactive E-Learning Platform",
      category: "SaaS",
      clientOrRole: "Full Stack Product",
      description:
        "Modern glassmorphism e-learning ecosystem with multi-role portals, course progress analytics, and mentor marketplace.",
      longDescription:
        "EDUFLUX is a next-generation interactive e-learning platform built for students, professors, and administrators. Crafted with React, TypeScript, Tailwind CSS, Node.js, and MongoDB, it offers role-based dashboards tailored for each user archetype. Key capabilities include progress tracking across masterclasses, live Q&A community forums, mentor marketplace scheduling, and an administrative control panel for curriculum and user management.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      keyHighlights: [
        "Role-based authorization (Student, Instructor, Admin)",
        "Sleek Glassmorphism UI with custom dark glow design system",
        "Course completion tracking and certificate issuance",
        "Community Q&A forum and mentor marketplace connection",
      ],
      architecture: [
        "Frontend: React + TypeScript + Tailwind CSS",
        "Backend: Node.js / Express API",
        "Database: MongoDB with Mongoose ODM",
      ],
      previewUrl: "#",
      githubUrl: "https://github.com/neveritodv",
      imageCol1: "/assets/eduflux_1.jpg",
      imageCol2: "/assets/eduflux_2.jpg",
      imageCol3: "/assets/eduflux_3.jpg",
      bannerColor: "from-teal-950 via-emerald-900 to-cyan-950",
    },
    {
      id: "massari-sas",
      number: "06",
      title: "Massari SAS",
      subtitle: "Unified Education Management Platform for Institutions",
      category: "Full Stack",
      clientOrRole: "Institutional Web App",
      description:
        "Comprehensive school management ecosystem connecting Super Admins, Directors, Teachers, Students, and Parents into a single platform.",
      longDescription:
        "Massari SAS is a unified institutional management platform designed to streamline operations for schools and academies. Built with React 18, TypeScript, Tailwind CSS, and Vite, it replaces fragmented spreadsheets with a centralized portal. Modules include class scheduling (Emploi du Temps), exam and grade management, enrollment workflows, financial logistics, messaging, and campus community events.",
      techStack: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "REST API"],
      keyHighlights: [
        "5-Role Tailored Dashboards (Super Admin, Director, Teacher, Student, Parent)",
        "Academic scheduling, exam oversight, and real-time grade tracking",
        "Administrative powerhouse handling enrollment, fees, and digital archives",
        "Integrated messaging hub & parent-teacher meeting coordinator",
      ],
      architecture: [
        "Frontend: React 18 + TypeScript + Vite",
        "Styling: Tailwind CSS custom layout system",
        "Backend Integration: RESTful JSON endpoints",
      ],
      previewUrl: "#",
      githubUrl: "https://github.com/neveritodv",
      imageCol1: "/assets/massari_1.jpg",
      imageCol2: "/assets/massari_2.jpg",
      imageCol3: "/assets/massari_3.jpg",
      bannerColor: "from-blue-950 via-indigo-900 to-slate-950",
    },
  ],
};
