import { useState, useEffect } from "react";

const PROJECTS = [
  {
    id: 1,
    name: "ResumeCraft",
    tagline: "Resume / CV Builder Dashboard",
    description:
      "A sleek resume builder dashboard built with Next.js 16 and Tailwind CSS. Lets users create, customize, and export professional resumes with a real-time preview interface.",
    tech: ["Next.js", "Tailwind CSS", "React"],
    category: "Web App",
    github: "https://github.com/bramhagulavani/ResumeCraft",
    livedemo: "https://resume-craft-pied.vercel.app/",
    color: "#6EE7B7",
    icon: "📄",
    readme: `# ResumeCraft\nResume/CV Builder Dashboard built with Next.js 16 + Tailwind CSS.\n\n## Features\n- Real-time preview\n- Multiple templates\n- Export to PDF\n- Tailwind-powered UI\n\n## Status\nWork In Progress 🚧`,
  },
  {
    id: 2,
    name: "Audit Log System",
    tagline: "Node.js + JWT + RBAC + MongoDB",
    description:
      "Enterprise-grade audit logging system with JWT authentication, role-based access control (RBAC), MongoDB event storage, and export functionality for compliance tracking.",
    tech: ["Node.js", "MongoDB", "JWT", "RBAC"],
    category: "Backend",
    github: "https://github.com/bramhagulavani/auditlogsystem",
    color: "#FCD34D",
    icon: "🔐",
    readme: `# Audit Log System\nNode.js Audit Log System with JWT auth, RBAC, MongoDB logging & exports.\n\n## Features\n- JWT-based Authentication\n- Role-Based Access Control\n- MongoDB event persistence\n- Log export (CSV/JSON)\n- RESTful API`,
  },
  {
    id: 3,
    name: "Annapurna Mess",
    tagline: "Mess / Canteen Management System",
    description:
      "A complete mess management system for hostels and institutions. Handles menu planning, meal bookings, attendance, and billing for cafeteria-style dining operations.",
    tech: ["PHP", "MySQL", "HTML/CSS", "Bootstrap"],
    category: "Web App",
    github: "https://github.com/bramhagulavani/annapurna-mess",
    color: "#F9A8D4",
    icon: "🍽️",
    readme: `# Annapurna Mess\nMess & Canteen Management System.\n\n## Features\n- Menu management\n- Meal booking\n- Student attendance tracking\n- Billing & reports\n- Admin dashboard`,
  },
  {
    id: 4,
    name: "AI Number Plate Recognition",
    tagline: "ANPR System — Diploma Mega Project",
    description:
      "AI-powered Automatic Number Plate Recognition (ANPR) system using computer vision and machine learning. Detects and reads vehicle license plates from images and video streams in real-time.",
    tech: ["Python", "OpenCV", "Machine Learning", "TensorFlow"],
    category: "AI / ML",
    github: "https://github.com/bramhagulavani/AI-number-plate-recognition",
    color: "#818CF8",
    icon: "🤖",
    readme: `# AI Number Plate Recognition\nAutomatic Number Plate Recognition (ANPR) System — Diploma Mega Project.\n\n## Features\n- Real-time plate detection\n- OCR for plate reading\n- OpenCV image processing\n- Machine learning model\n- Video stream support`,
  },
  {
    id: 12,
    name: "AI Debugging Assistant",
    tagline: "LLM-Powered Dev Tool — Industry Portfolio Project",
    description:
      "Context-aware AI debugging tool that analyzes code errors, traces root causes, and suggests fixes in real time. It parses stack traces and AST structure to give GPT-4o full codebase context, and includes WebSocket streaming, session history, and semantic similar-bug detection using vector embeddings.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "GPT-4o",
      "Tree-sitter",
      "Pinecone",
      "PostgreSQL",
      "VS Code Extension",
    ],
    category: "AI / ML",
    github: "https://github.com/bramhagulavani/ai-debug-assistant",
    color: "#22D3EE",
    icon: "🧠",
    readme: `# AI Debugging Assistant\nLLM-Powered Dev Tool — Industry Portfolio Project.\n\n## Highlights\n- Context-aware debugging assistant\n- Root-cause tracing from stack traces\n- AST-aware code understanding with Tree-sitter\n- Real-time WebSocket streaming\n- Session history and semantic similar-bug retrieval\n\n## Stack\nPython, FastAPI, React, GPT-4o, Tree-sitter, Pinecone, PostgreSQL, VS Code Extension\n\n## GitHub\nhttps://github.com/bramhagulavani/ai-debug-assistant`,
  },
  {
    id: 13,
    name: "Fake News Detector",
    tagline: "NLP Classification Project — Portfolio Project",
    description:
      "AI-powered fake news detection system built with NLP and machine learning. Classifies whether a news article is Real or Fake with 95.13% accuracy, trained on 72,134 real-world news articles.",
    tech: ["Python", "NLP", "scikit-learn", "Streamlit"],
    category: "AI / ML",
    github: "https://github.com/bramhagulavani/fake-news-detector",
    color: "#A78BFA",
    icon: "📰",
    readme: `# Fake News Detector\nNLP Classification Project — Portfolio Project.\n\n## Highlights\n- Detects whether news is Real or Fake\n- 95.13% classification accuracy\n- Trained on 72,134 real-world articles\n- Streamlit-powered interactive interface\n\n## Stack\nPython, NLP, scikit-learn, Streamlit\n\n## GitHub\nhttps://github.com/bramhagulavani/fake-news-detector`,
  },
  {
    id: 14,
    name: "Student Score Predictor",
    tagline: "Regression ML Project — Portfolio Project",
    description:
      "ML-powered student performance prediction system using regression models. Predicts student math scores from personal and academic factors while comparing Linear Regression, Random Forest, and XGBoost models.",
    tech: ["Python", "scikit-learn", "XGBoost", "Streamlit"],
    category: "AI / ML",
    github: "https://github.com/bramhagulavani/student-score-predictor",
    color: "#38BDF8",
    icon: "📈",
    readme: `# Student Score Predictor\nRegression ML Project — Portfolio Project.\n\n## Highlights\n- Predicts student math performance\n- Uses personal and academic input factors\n- Compares Linear Regression, Random Forest, and XGBoost\n- Streamlit app for interactive prediction\n\n## Stack\nPython, scikit-learn, XGBoost, Streamlit\n\n## GitHub\nhttps://github.com/bramhagulavani/student-score-predictor`,
  },
  {
    id: 15,
    name: "Plant Disease Detector AI",
    tagline: "PlantVillage CNN — Personal AI Project",
    description:
      "AI-powered plant disease detection system using computer vision and transfer learning. Detects and classifies 38 plant leaf diseases from photos in real time with 94.16% accuracy.",
    tech: ["Python", "TensorFlow", "MobileNetV2", "Gradio", "Transfer Learning"],
    category: "AI / ML",
    github: "https://github.com/bramhagulavani/plant-disease-ai",
    color: "#4ADE80",
    icon: "🌿",
    readme: `# Plant Disease Detector AI\nPlantVillage CNN — Personal AI Project.\n\n## Highlights\n- Detects and classifies 38 plant leaf diseases\n- Transfer-learning pipeline with MobileNetV2\n- Real-time image-based inference\n- 94.16% accuracy on PlantVillage-style data\n- Gradio interface for quick testing\n\n## Stack\nPython, TensorFlow, MobileNetV2, Gradio, Transfer Learning\n\n## GitHub\nhttps://github.com/bramhagulavani/plant-disease-ai`,
  },
  {
    id: 5,
    name: "Vehicle Record Management",
    tagline: "Complete Vehicle Database System",
    description:
      "A comprehensive vehicle record management system with CRUD operations, owner tracking, registration management, and search capabilities for managing large vehicle databases.",
    tech: ["Java", "MySQL", "JDBC", "Swing"],
    category: "Database",
    github: "https://github.com/bramhagulavani/Vehicel-Record-Management-System",
    color: "#FCA5A5",
    icon: "🚗",
    readme: `# Vehicle Record Management System\nComprehensive vehicle database management system.\n\n## Features\n- Vehicle CRUD operations\n- Owner management\n- Registration tracking\n- Search & filter\n- Report generation`,
  },
  {
    id: 6,
    name: "Employee Payroll (DBMS)",
    tagline: "SQL-Based Payroll Management",
    description:
      "A DBMS project implementing complete employee payroll management with salary calculations, deductions, tax handling, department management, and payslip generation using advanced SQL.",
    tech: ["SQL", "PL/SQL", "DBMS", "Oracle"],
    category: "Database",
    github: "https://github.com/bramhagulavani/DBMS-Employee-Payroll",
    color: "#86EFAC",
    icon: "💰",
    readme: `# DBMS Employee Payroll\nEmployee payroll management using advanced database concepts.\n\n## Features\n- Salary calculation\n- Deductions & allowances\n- Department management\n- Payslip generation\n- Tax computation\n- Stored procedures & triggers`,
  },
  {
    id: 7,
    name: "React Car Rental",
    tagline: "Full-Featured Car Rental Platform",
    description:
      "A fully functional car rental application built during internship at iGAP Technologies. Features vehicle browsing, booking management, availability checking, and a modern responsive UI.",
    tech: ["React.js", "CSS3", "JavaScript", "REST API"],
    category: "Web App",
    github: "https://github.com/bramhagulavani/react-car-rental",
    color: "#67E8F9",
    icon: "🚙",
    readme: `# React Car Rental\nFull-featured car rental platform built with React.\n\n## Features\n- Vehicle catalog & search\n- Booking management\n- Date-based availability\n- Responsive design\n- Component-based architecture\n\nBuilt during internship at iGAP Technologies.`,
  },
  {
    id: 8,
    name: "C++ Mini Games",
    tagline: "Collection of Console Games in C++",
    description:
      "A collection of classic mini-games implemented in C++ showcasing core programming concepts like OOP, data structures, algorithms, and game logic in a terminal environment.",
    tech: ["C++", "OOP", "DSA", "Console"],
    category: "Systems",
    github: "https://github.com/bramhagulavani/cpp-mini-games",
    color: "#FDE68A",
    icon: "🎮",
    readme: `# C++ Mini Games\nCollection of classic console games implemented in C++.\n\n## Games Included\n- Tic Tac Toe\n- Number Guessing\n- Snake (Console)\n- Memory Game\n\n## Concepts\n- OOP principles\n- Data structures\n- Game algorithms`,
  },
  {
    id: 9,
    name: "Student Management Portal",
    tagline: "Complete Student Information System",
    description:
      "A web-based student management portal for educational institutions with features for managing student records, attendance, grades, course enrollment, and generating academic reports.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    category: "Web App",
    github: "https://github.com/bramhagulavani/student-management-portal",
    color: "#C4B5FD",
    icon: "🎓",
    readme: `# Student Management Portal\nWeb-based student information management system.\n\n## Features\n- Student registration\n- Attendance tracking\n- Grade management\n- Course enrollment\n- Report generation\n- Admin & faculty roles`,
  },
  {
    id: 10,
    name: "Java Mini Game",
    tagline: "Object-Oriented Game in Java",
    description:
      "An interactive mini-game built in Java demonstrating object-oriented programming principles, GUI development with Swing/AWT, event handling, and game state management.",
    tech: ["Java", "Swing", "AWT", "OOP"],
    category: "Systems",
    github: "https://github.com/bramhagulavani/java-mini-game",
    color: "#FDBA74",
    icon: "☕",
    readme: `# Java Mini Game\nInteractive mini-game built in Java with Swing GUI.\n\n## Features\n- Graphical interface (Swing)\n- Event handling\n- Score tracking\n- Game state management\n- OOP design patterns`,
  },
  {
    id: 11,
    name: "StudyBuddy Refactored",
    tagline: "AI-Powered Study Assistant App",
    description:
      "A refactored study companion application that helps students organize study material, create flashcards, set study schedules, and track learning progress with a clean modern interface.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "LocalStorage"],
    category: "Web App",
    github: "https://github.com/bramhagulavani/studybuddy-refactored",
    color: "#A5F3FC",
    icon: "📚",
    readme: `# StudyBuddy Refactored\nRefactored AI-powered study assistant application.\n\n## Features\n- Study material organizer\n- Flashcard creator\n- Study schedule planner\n- Progress tracking\n- Clean refactored codebase`,
  },
];

const SKILLS = [
  { name: "React.js", level: 90, cat: "Frontend" },
  { name: "Python", level: 85, cat: "Languages" },
  { name: "C++", level: 80, cat: "Languages" },
  { name: "Java", level: 75, cat: "Languages" },
  { name: "Machine Learning", level: 78, cat: "AI/ML" },
  { name: "Node.js", level: 72, cat: "Backend" },
  { name: "MySQL / SQL", level: 85, cat: "Database" },
  { name: "MongoDB", level: 70, cat: "Database" },
  { name: "PHP", level: 68, cat: "Backend" },
  { name: "OpenCV", level: 75, cat: "AI/ML" },
  { name: "Tailwind CSS", level: 88, cat: "Frontend" },
  { name: "Git & GitHub", level: 90, cat: "Tools" },
];

const CATEGORIES = ["All", "Web App", "AI / ML", "Backend", "Database", "Systems"];

function TypeWriter({ text, speed = 60 }) {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (idx < text.length) {
      const t = setTimeout(() => {
        setDisplayed((p) => p + text[idx]);
        setIdx((i) => i + 1);
      }, speed);
      return () => clearTimeout(t);
    }
  }, [idx, text, speed]);
  return <span>{displayed}<span className="animate-pulse">|</span></span>;
}

function ReadmeModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl border"
        style={{ background: "#0d1117", borderColor: project.color + "44" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between p-5 border-b" style={{ background: "#0d1117", borderColor: project.color + "33" }}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.icon}</span>
            <div>
              <h3 className="font-bold text-white text-lg">{project.name}</h3>
              <p className="text-xs" style={{ color: project.color }}>{project.tagline}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors text-2xl leading-none">×</button>
        </div>
        <div className="p-6">
          <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap leading-relaxed"
            style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
            {project.readme}
          </pre>
          <div className="mt-6 flex gap-3">
            {project.livedemo && (
              <a
                href={project.livedemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                style={{ background: "#ffffff0a", color: "#e2e8f0", border: "1px solid #ffffff15" }}
              >
                Live Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
              style={{ background: project.color, color: "#0d1117" }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [showReadme, setShowReadme] = useState(false);
  return (
    <>
      {showReadme && <ReadmeModal project={project} onClose={() => setShowReadme(false)} />}
      <div
        className="relative rounded-2xl p-px overflow-hidden cursor-pointer transition-all duration-300 group"
        style={{
          background: hovered ? `linear-gradient(135deg, ${project.color}66, ${project.color}22)` : "linear-gradient(135deg, #ffffff11, #ffffff05)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered ? `0 20px 60px ${project.color}22` : "none",
          animationDelay: `${index * 80}ms`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="rounded-2xl p-6 h-full flex flex-col" style={{ background: "#0d1117" }}>
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: project.color + "22", border: `1px solid ${project.color}44` }}>
                {project.icon}
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded-full"
                style={{ background: project.color + "22", color: project.color, border: `1px solid ${project.color}44` }}>
                {project.category}
              </span>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>

          {/* Title */}
          <h3 className="text-white font-bold text-lg mb-1 leading-tight">{project.name}</h3>
          <p className="text-xs mb-3" style={{ color: project.color }}>{project.tagline}</p>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded font-mono"
                style={{ background: "#ffffff0a", color: "#94a3b8", border: "1px solid #ffffff10" }}>
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-auto pt-2 border-t" style={{ borderColor: "#ffffff0d" }}>
            <button
              onClick={() => setShowReadme(true)}
              className="flex-1 py-2 rounded-lg text-xs font-semibold transition-all"
              style={{ background: project.color + "22", color: project.color, border: `1px solid ${project.color}33` }}
            >
              📖 README
            </button>
            {project.livedemo && (
              <a
                href={project.livedemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-lg text-xs font-semibold transition-all text-center"
                style={{ background: "#0ea5e922", color: "#7dd3fc", border: "1px solid #0ea5e944" }}
              >
                Live Demo ↗
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg text-xs font-semibold transition-all text-center"
              style={{ background: "#ffffff0a", color: "#94a3b8", border: "1px solid #ffffff10" }}
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function NavBar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["about", "projects", "skills", "contact"];
  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
      style={{ background: "rgba(13,17,23,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid #ffffff0d" }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-bold text-white text-lg tracking-tight flex items-center gap-2">
          <span className="text-green-400 font-mono text-sm">&lt;</span>
          BG
          <span className="text-green-400 font-mono text-sm">/&gt;</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scroll(l)}
              className="text-sm capitalize transition-colors"
              style={{ color: activeSection === l ? "#4ade80" : "#94a3b8" }}
            >
              {l}
            </button>
          ))}
          <a
            href="https://github.com/bramhagulavani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-1.5 rounded-lg font-semibold transition-all"
            style={{ background: "#4ade8022", color: "#4ade80", border: "1px solid #4ade8044" }}
          >
            GitHub ↗
          </a>
        </div>
        <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 pb-4">
          {links.map((l) => (
            <button key={l} onClick={() => scroll(l)} className="text-sm capitalize text-gray-300 text-left px-2">{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    ["about", "projects", "skills", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const handleSubmit = () => {
    if (contactForm.name && contactForm.email && contactForm.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setContactForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div style={{ background: "#060910", color: "#e2e8f0", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=DM+Mono:wght@400;500&display=swap');
        :root { --green: #4ade80; }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #060910; }
        ::-webkit-scrollbar-thumb { background: #4ade8044; border-radius: 3px; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 0 0 #4ade8033; } 50% { box-shadow: 0 0 30px 10px #4ade8011; } }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .float { animation: float 4s ease-in-out infinite; }
        .skill-bar { transition: width 1.2s cubic-bezier(.4,0,.2,1); }
        .grid-bg {
          background-image: linear-gradient(rgba(74,222,128,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(74,222,128,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .glow-text { text-shadow: 0 0 40px #4ade8044; }
        input, textarea { outline: none; }
        input:focus, textarea:focus { border-color: #4ade8066 !important; }
        .card-enter { opacity: 0; animation: fadeUp 0.5s ease forwards; }
      `}</style>

      <NavBar activeSection={activeSection} />

      {/* ── HERO / ABOUT ─────────────────────────────────────────────── */}
      <section id="about" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
        {/* Glow blobs */}
        <div style={{ position:"absolute", top:"20%", left:"10%", width:300, height:300, background:"radial-gradient(circle, #4ade8011 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"20%", right:"10%", width:400, height:400, background:"radial-gradient(circle, #818cf811 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
            style={{ background: "#4ade8015", border: "1px solid #4ade8033", color: "#4ade80" }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities · VIT Pune, India
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight glow-text">
            <span className="text-white">Bramha</span>{" "}
            <span style={{ color: "#4ade80" }}>Gulavani</span>
          </h1>

          {/* Typewriter role */}
          <p className="text-xl md:text-2xl font-mono mb-6" style={{ color: "#94a3b8" }}>
            <TypeWriter text="CSE (AI & ML) Student · Builder · Problem Solver" speed={50} />
          </p>

          {/* About blurb */}
          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-3" style={{ color: "#94a3b8" }}>
            Computer Science (AI & ML) student at{" "}
            <span className="text-white font-semibold">Vishwakarma Institute of Technology, Pune</span>{" "}
            with a CGPA of <span style={{ color: "#4ade80" }} className="font-bold">9.3</span>.
            I build AI-driven solutions, full-stack web apps, and love turning ideas into working code.
          </p>
          <p className="max-w-2xl mx-auto text-base leading-relaxed mb-8" style={{ color: "#64748b" }}>
            Class Representative · Git & GitHub Certified · Hackathon Participant · Badminton Enthusiast
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { label: "Projects", value: "11+" },
              { label: "CGPA", value: "9.3" },
              { label: "Certifications", value: "4+" },
              { label: "Internships", value: "2" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold" style={{ color: "#4ade80" }}>{s.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 rounded-xl font-bold text-sm transition-all"
              style={{ background: "#4ade80", color: "#060910" }}
            >
              View Projects ↓
            </button>
            <a
              href="https://github.com/bramhagulavani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl font-bold text-sm transition-all"
              style={{ background: "#ffffff0a", color: "#e2e8f0", border: "1px solid #ffffff15" }}
            >
              GitHub Profile ↗
            </a>
            <a
              href="https://linkedin.com/in/bramha-vinayak-gulavani-31302a30b"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl font-bold text-sm transition-all"
              style={{ background: "#0077b515", color: "#60a5fa", border: "1px solid #0077b533" }}
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Experience pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[
              { text: "iGAP Technologies · React Intern", icon: "⚡" },
              { text: "Maxgen Technologies · PHP Intern", icon: "🌐" },
              { text: "DIPEX Exhibitor 2025", icon: "🏆" },
            ].map((e) => (
              <div key={e.text} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
                style={{ background: "#ffffff07", border: "1px solid #ffffff10", color: "#94a3b8" }}>
                <span>{e.icon}</span>{e.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-400 font-mono text-sm mb-2 tracking-widest uppercase">{"// my work"}</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {PROJECTS.length} projects spanning AI/ML, full-stack web development, database systems, and systems programming.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={
                  filter === cat
                    ? { background: "#4ade80", color: "#060910" }
                    : { background: "#ffffff0a", color: "#94a3b8", border: "1px solid #ffffff10" }
                }
              >
                {cat}
                <span className="ml-1.5 text-xs opacity-60">
                  {cat === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────────────────── */}
      <section id="skills" className="py-24 px-6 grid-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-400 font-mono text-sm mb-2 tracking-widest uppercase">{"// tech stack"}</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Skills & Tools</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILLS.map((s, i) => (
              <div key={s.name} className="p-4 rounded-xl" style={{ background: "#0d1117", border: "1px solid #ffffff0d" }}>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="text-white text-sm font-semibold">{s.name}</span>
                    <span className="ml-2 text-xs px-1.5 py-0.5 rounded text-green-400"
                      style={{ background: "#4ade8015", border: "1px solid #4ade8022" }}>{s.cat}</span>
                  </div>
                  <span className="text-xs font-mono text-gray-500">{s.level}%</span>
                </div>
                <div className="h-1.5 rounded-full" style={{ background: "#ffffff0d" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${s.level}%`,
                      background: `linear-gradient(90deg, #4ade80, #22d3ee)`,
                      transition: "width 1s ease",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-400 font-mono text-sm mb-2 tracking-widest uppercase">{"// get in touch"}</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Let's Connect</h2>
            <p className="text-gray-500">
              Have a project in mind? Want to collaborate? Or just say hi — I'm always open to a good conversation.
            </p>
          </div>

          {/* Contact cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { label: "Email", value: "bramhagulavani@gmail.com", icon: "✉️", href: "mailto:bramhagulavani@gmail.com" },
              { label: "LinkedIn", value: "bramha-vinayak-gulavani", icon: "💼", href: "https://linkedin.com/in/bramha-vinayak-gulavani-31302a30b" },
              { label: "GitHub", value: "bramhagulavani", icon: "🐙", href: "https://github.com/bramhagulavani" },
            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all"
                style={{ background: "#0d1117", border: "1px solid #ffffff0d" }}>
                <span className="text-xl">{c.icon}</span>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{c.label}</p>
                  <p className="text-sm text-white font-medium">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl" style={{ background: "#0d1117", border: "1px solid #ffffff0d" }}>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                <p className="text-gray-500">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white"
                      style={{ background: "#ffffff07", border: "1px solid #ffffff15", color: "white" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{ background: "#ffffff07", border: "1px solid #ffffff15", color: "white" }}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                    style={{ background: "#ffffff07", border: "1px solid #ffffff15", color: "white" }}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full py-3.5 rounded-xl font-bold text-sm transition-all"
                  style={{ background: "#4ade80", color: "#060910" }}
                >
                  Send Message →
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="py-8 px-6 text-center" style={{ borderTop: "1px solid #ffffff08" }}>
        <p className="text-sm text-gray-600">
          Designed & Built by{" "}
          <span className="text-green-400 font-semibold">Bramha Vinayak Gulavani</span>
          {" "}· VIT Pune · {new Date().getFullYear()}
        </p>
        <p className="text-xs text-gray-700 mt-1 font-mono">
          &lt;/portfolio&gt;
        </p>
      </footer>
    </div>
  );
}