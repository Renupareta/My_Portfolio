import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Layers, Code2, Play, Layout, Hammer, X, Monitor, Cpu } from "lucide-react";
import ProjectSandbox from "./ProjectSandbox";

interface ProjectsProps {
  darkMode: boolean;
}

interface ProjectItem {
  id: number;
  title: string;
  tech: string[];
  category: "all" | "php" | "python" | "java" | "frontend" | "javascript" | "database" | "nextjs";
  description: string;
  demoUrl?: string;
  githubUrl?: string;
  iconBg: string;
  vectorId: string;
  features: string[];
}

export default function Projects({ darkMode }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "php" | "python" | "java" | "frontend" | "javascript" | "database" | "nextjs">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { label: "All Works", value: "all" },
    { label: "PHP", value: "php" },
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "Frontend", value: "frontend" },
    { label: "JavaScript", value: "javascript" },
    { label: "MySQL / DBMS", value: "database" },
    { label: "Next.js", value: "nextjs" }
  ];

  const projectsData: ProjectItem[] = [
    {
      id: 1,
      title: "Student Management System",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      category: "php",
      description: "A secure web portal designed for database records, student directories, and academic tracking.",
      demoUrl: "",
      githubUrl: "https://github.com/Renupareta",
      iconBg: "from-purple-500 to-indigo-500",
      vectorId: "student-sys-php",
      features: [
        "Relational database structure with MySQL logs",
        "Secure student records directory lists",
        "Dynamic session tracking and query updates"
      ]
    },
    {
      id: 2,
      title: "Event Management System",
      tech: ["Python" , "tkinter", "MySQL"],
      category: "python",
      description: "A Python management script to organize event registrations, schedules, and active attendee lists.",
      demoUrl: "",
      githubUrl: "https://github.com/Renupareta",
      iconBg: "from-blue-500 to-indigo-600",
      vectorId: "event-sys",
      features: [
        "Modular event allocation mechanics",
        "Guest list sorting and search structures",
        "On-device memory-efficient registry"
      ]
    },
    {
      id: 3,
      title: "Police Complaint Management System",
      tech: ["Python","tkinter", "MySQL"],
      category: "python",
      description: "A Python precinct management desk for listing citizen complaints, FIR reports, and investigation logs.",
      demoUrl: "",
      githubUrl: "https://github.com/Renupareta",
      iconBg: "from-red-500 to-orange-500",
      vectorId: "police-sys",
      features: [
        "FIR tracking and ID creation schemas",
        "Officer log status and precinct categories",
        "Simple robust incident filing workflows"
      ]
    },
    {
      id: 4,
      title: "Cloth Management System",
      tech: ["Python","tkinter", "MySQL"],
      category: "python",
      description: "An administrative Python stock control tracker to manage garments, price listings, and supply trends.",
      demoUrl: "",
      githubUrl: "https://github.com/Renupareta",
      iconBg: "from-teal-500 to-emerald-500",
      vectorId: "cloth-sys",
      features: [
        "Retail inventory calculation routines",
        "Critical low stock item alerts",
        "Price computation ledger matrix"
      ]
    },
    {
      id: 5,
      title: "Hotel Management System",
      tech: ["Python","tkinter", "MySQL"],
      category: "python",
      description: "A neat Python scheduler designed for booking rooms, vacant/occupied status indicators, and checkout evaluations.",
      demoUrl: "",
      githubUrl: "https://github.com/Renupareta",
      iconBg: "from-cyan-500 to-blue-600",
      vectorId: "hotel-sys",
      features: [
        "Interactive room status matrix controls",
        "Night stay billing estimations",
        "Automated check-in rosters"
      ]
    },
    {
      id: 6,
      title: "Jewellery Shop Management System",
      tech: ["Python","tkinter", "MySQL"],
      category: "python",
      description: "A Python calculation utility designed gold weight evaluations, making charges, and relational invoice ledgers.",
      demoUrl: "",
      githubUrl: "https://github.com/Renupareta",
      iconBg: "from-yellow-500 to-amber-600",
      vectorId: "jewel-sys",
      features: [
        "Accurate metal rate multiplier engines",
        "Custom billing tax percentage calculations",
        "Supply and purchase record logs"
      ]
    },
    {
      id: 7,
      title: "Employee Management System",
      tech: ["Java" , "Mysql"],
      category: "java",
      description: "A Java server-side application built cataloging corporate payroll numbers, employee archives, and departments.",
      demoUrl: "",
      githubUrl: "https://github.com/Renupareta",
      iconBg: "from-purple-600 to-pink-500",
      vectorId: "employee-sys",
      features: [
        "Corporate personnel directory grids",
        "Simple payroll multiplier bonus routines",
        "Strict OOP design patterns"
      ]
    },
    {
      id: 8,
      title: "Student Management System",
      tech: ["Java" , "Mysql"],
      category: "java",
      description: "A Java student database workspace utilizing transcript files and JDBC queries for performance mapping.",
      demoUrl: "",
      githubUrl: "https://github.com/Renupareta",
      iconBg: "from-indigo-500 to-blue-600",
      vectorId: "student-sys-java",
      features: [
        "Dynamic transcript CGPA estimators",
        "Efficient index query lookup matrices",
        "Secure on-device data stream arrays"
      ]
    },
    {
      id: 9,
      title: "Zomato Website Clone",
      tech: ["HTML", "CSS", "JavaScript" , "Bootstrap"],
      category: "frontend",
      description: "A responsive Zomato homepage layout featuring meal category filters and an interactive cart calculation workspace.",
      demoUrl: "https://github.com/Renupareta",
      githubUrl: "https://github.com/Renupareta",
      iconBg: "from-rose-500 to-red-600",
      vectorId: "zomato-clone",
      features: [
        "Fully responsive media query designs",
        "Add-to-cart checkout simulations",
        "Interactive hover transition states"
      ]
    },
    {
      id: 10,
      title: "Scanner App",
      tech: ["Html","CSS", "JavaScript" , "Bootstrap"],
      category: "javascript",
      description: "A sleek browser scanner application simulating real-time file filters, image contrasts, and crop bounds.",
      demoUrl: "",
      githubUrl: "https://github.com/Renupareta",
      iconBg: "from-sky-500 to-blue-500",
      vectorId: "scanner-app",
      features: [
        "Live CSS canvas brightness rules",
        "Monochrome toggle adjustments",
        "Interactive slider controllers"
      ]
    },
    {
      id: 11,
      title: "Weather API App",
      tech: ["JavaScript", "API"],
      category: "javascript",
      description: "An asynchronous web application requesting climatic metrics, temps, and weather vectors from a public API.",
      demoUrl: "",
      githubUrl: "https://github.com/Renupareta",
      iconBg: "from-indigo-400 to-purple-600",
      vectorId: "weather-app",
      features: [
        "Asynchronous JSON parsing routines",
        "Visual weather conditions state engine",
        "Responsive desktop layout grids"
      ]
    },
    {
      id: 12,
      title: "Game Project",
      tech: ["Html","CSS", "JavaScript" , "Bootstrap"],
      category: "javascript",
      description: "A dynamic arcade experience utilizing a coordinates loop to track falling asteroids and scores.",
      demoUrl: "",
      githubUrl: "https://github.com/Renupareta",
      iconBg: "from-pink-500 to-violet-600",
      vectorId: "game-project",
      features: [
        "High performance rendering tick loops",
        "On-screen movement boundary controls",
        "Incremental rating mechanics"
      ]
    },
    {
      id: 13,
      title: "Food Delivery Management System",
      tech: ["MySQL", "DBMS"],
      category: "database",
      description: "A highly relational database mapping schema designed for food delivery tracking, rider details, and orders.",
      demoUrl: "",
      githubUrl: "https://github.com/Renupareta",
      iconBg: "from-emerald-500 to-teal-600",
      vectorId: "food-db",
      features: [
        "Optimized foreign key constraint layouts",
        "Efficient group-by analytics queries",
        "Clean, error-free relational schema maps"
      ]
    },
    {
      id: 14,
      title: "Book Editor Project",
      tech: ["Next.js"],
      category: "nextjs",
      description: "An author draft editor workspace managing word counts, estimated reading times, and font faces.",
      demoUrl: "",
      githubUrl: "https://github.com/Renupareta",
      iconBg: "from-fuchsia-500 to-purple-700",
      vectorId: "book-editor",
      features: [
        "Live Word metrics parsing structures",
        "Serif, normal, and Mono typography switch decks",
        "Responsive, minimal editing container"
      ]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(proj => proj.category === activeFilter);

  const renderProjectVisual = (vectorId: string) => {
    switch (vectorId) {
      case "student-sys-php":
        return (
          <code className="text-[10px] text-purple-400 block p-3 font-mono leading-tight whitespace-pre">
            {`$conn = new mysqli($h, $u, $p, $db);\n$result = $conn->query(\n  "SELECT * FROM students"\n);\n// Connected to PHP MySQL`}
          </code>
        );
      case "event-sys":
        return (
          <code className="text-[10px] text-blue-400 block p-3 font-mono leading-tight whitespace-pre">
            {`events = ["Conf", "Dinner"]\ndef add_guest(name, ev):\n    events.append((name, ev))\n    print(f"Added {name}")`}
          </code>
        );
      case "police-sys":
        return (
          <code className="text-[10px] text-red-400 block p-3 font-mono leading-tight whitespace-pre">
            {`fir_id = "FIR-1092"\ndef log_fir(citizen, category):\n    # Save to police dataset\n    print(f"Logged FIR for {citizen}")`}
          </code>
        );
      case "cloth-sys":
        return (
          <code className="text-[10px] text-emerald-400 block p-3 font-mono leading-tight whitespace-pre">
            {`cloth_stock = {"Shirt": 45}\ndef get_available(sku):\n    return cloth_stock.get(sku, 0)`}
          </code>
        );
      case "hotel-sys":
        return (
          <code className="text-[10px] text-cyan-400 block p-3 font-mono leading-tight whitespace-pre">
            {`rooms = {"101": "Vacant"}\ndef check_in(room, guest):\n    rooms[room] = f"Booked by {guest}"`}
          </code>
        );
      case "jewel-sys":
        return (
          <code className="text-[10px] text-amber-400 block p-3 font-mono leading-tight whitespace-pre">
            {`gold_rate = 7400\ndef get_invoice(g_weight):\n    raw = gold_rate * g_weight\n    return raw + (raw * 0.12) # charges`}
          </code>
        );
      case "employee-sys":
        return (
          <code className="text-[10px] text-pink-400 block p-3 font-mono leading-tight whitespace-pre">
            {`public class StaffEmployee {\n    private double salary;\n    public double findStaffBonus() {\n        return this.salary * 0.15;\n    }\n}`}
          </code>
        );
      case "student-sys-java":
        return (
          <code className="text-[10px] text-indigo-400 block p-3 font-mono leading-tight whitespace-pre">
            {`public class Student {\n    private String name;\n    private double cgpa;\n    // Connected via JDBC Connection\n}`}
          </code>
        );
      case "zomato-clone":
        return (
          <div className="p-3.5 flex flex-col justify-between h-full text-rose-400">
            <div className="border border-rose-500/25 rounded p-1 flex justify-between items-center bg-rose-500/5">
              <span className="text-[9px] font-mono font-bold">🍔 Zomato Red Clone</span>
              <span className="text-[8px] bg-rose-600 text-white px-1 rounded font-bold font-sans">100% Rep</span>
            </div>
            <div className="h-6 w-full bg-slate-800/80 rounded flex items-center justify-around">
              <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-ping" />
              <div className="h-1 bg-slate-700 w-12 rounded" />
            </div>
          </div>
        );
      case "scanner-app":
        return (
          <div className="flex items-center justify-center h-full gap-2 text-sky-400">
            <Layout className="h-6 w-6 animate-pulse" />
            <span className="text-[10px] font-mono font-semibold">SCAN STATE: READY</span>
          </div>
        );
      case "weather-app":
        return (
          <div className="p-3.5 font-mono text-[9px] text-indigo-400 space-y-1">
            <div className="flex justify-between">
              <span>City: Kota, IN</span>
              <span>Temp: 32°C</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Wind: 14 km/h</span>
              <span>Humidity: 45%</span>
            </div>
          </div>
        );
      case "game-project":
        return (
          <div className="flex flex-col items-center justify-center h-full gap-1 p-2 text-pink-400">
            <div className="text-[11px] font-mono font-bold animate-bounce text-pink-500">PLAY GAME</div>
            <span className="text-[9px] font-mono text-slate-500 font-bold">Arcade Obstacle Shooter</span>
          </div>
        );
      case "food-db":
        return (
          <code className="text-[10px] text-emerald-400 block p-3 font-mono leading-tight whitespace-pre">
            {`CREATE TABLE orders (\n    order_id INT PRIMARY KEY,\n    rider_id INT,\n    amount DECIMAL(10,2)\n);`}
          </code>
        );
      case "book-editor":
        return (
          <div className="p-3.5 flex flex-col justify-between h-full bg-fuchsia-950/20 text-fuchsia-400 border border-fuchsia-500/10 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[9px] font-mono font-bold uppercase">Novel Editor Draft</span>
              <span className="text-[8px] font-mono text-slate-500">Active Counting</span>
            </div>
            <div className="h-1 bg-fuchsia-500/20 w-full rounded" />
            <div className="h-1 bg-fuchsia-500/20 w-[90%] rounded" />
          </div>
        );
      default:
        return <Hammer className="h-8 w-8 text-slate-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider mb-3 ${
              darkMode ? "bg-purple-950/50 text-purple-300 border border-purple-900/50" : "bg-purple-100 text-purple-700 border border-purple-200"
            }`}
          >
            <Layers className="h-3 w-3 animate-pulse text-purple-500" />
            Interactive Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl text-gradient pr-1"
          >
            Academic & Independent Creations
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Navigation list */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value as any)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-display font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30 scale-105"
                    : darkMode
                    ? "bg-slate-900/70 text-slate-400 hover:text-white border border-purple-900/20 hover:border-purple-500/30"
                    : "bg-purple-50/80 text-purple-700 hover:bg-purple-100 border border-purple-100 hover:border-purple-300"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Animated Project Grid layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`rounded-3xl border overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ${
                  darkMode
                    ? "bg-slate-900/40 border-purple-900/20 hover:border-purple-500/50"
                    : "bg-white border-purple-100 hover:border-purple-300"
                }`}
              >
                <div>
                  {/* Dynamic stylized Tech Preview Panel */}
                  <div className={`h-40 relative flex items-center justify-center overflow-hidden border-b ${
                    darkMode ? "bg-slate-950/80 border-purple-950" : "bg-purple-50/50 border-purple-50/50"
                  }`}>
                    {/* Floating colored grid blocks */}
                    <div className="absolute inset-0 bg-grid-slate-900 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.4))]" />
                    <div className={`p-4 rounded-2xl w-[85%] h-[80%] border flex flex-col justify-between overflow-hidden shadow-inner cursor-pointer transition-transform group-hover:scale-102 ${
                      darkMode ? "bg-slate-900/80 border-purple-900/20" : "bg-white border-purple-100"
                    }`}
                    onClick={() => setSelectedProject(project)}
                    >
                      {/* Window dot headers */}
                      <div className="flex gap-1 items-center border-b pb-1.5 border-dashed border-purple-900/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <span className="text-[9px] font-mono text-slate-500 ml-1">ParaNode IDE IDE</span>
                      </div>
                      
                      {/* Rendering project mock visual panel */}
                      <div className="flex-1 mt-1.5 overflow-hidden">
                        {renderProjectVisual(project.vectorId)}
                      </div>
                    </div>
                  </div>

                  {/* Body Info block */}
                  <div className="p-6">
                    <h3 className={`text-base font-display font-bold mb-2 group-hover:text-purple-500 transition-colors ${
                      darkMode ? "text-white" : "text-slate-800"
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-xs leading-relaxed mb-6 block min-h-[48px] ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}>
                      {project.description}
                    </p>

                    {/* Tech badging list */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className={`text-[10px] font-mono px-2.5 py-1 rounded-md transition-all ${
                            darkMode
                              ? "bg-purple-950/50 text-purple-300 border border-purple-900/40 hover:border-purple-500/50"
                              : "bg-purple-50 text-purple-800 border border-purple-100 hover:border-purple-300"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className={`px-6 pb-6 pt-4 flex flex-col gap-3 border-t border-dashed ${
                  darkMode ? "border-purple-950 bg-slate-950/20" : "border-purple-100 bg-purple-50/20"
                }`}>
                  <div className="flex gap-2.5 items-center justify-between">
                    {/* View Code OR Private Project */}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1 text-xs font-mono font-bold hover:underline py-1 px-1.5 rounded transition ${
                          darkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-purple-600"
                        }`}
                      >
                        <Github className="h-3.5 w-3.5" />
                        View Code
                      </a>
                    ) : (
                      <span className={`flex items-center gap-1 text-xs font-mono font-semibold py-1 px-1.5 rounded cursor-not-allowed select-none ${
                        darkMode ? "text-slate-600" : "text-slate-400"
                      }`}>
                        <Github className="h-3.5 w-3.5 opacity-50" />
                        Private Project
                      </span>
                    )}

                    {/* Live Demo OR Demo Coming Soon */}
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-display font-extrabold text-pink-500 hover:text-pink-400 hover:translate-x-0.5 transition-all cursor-pointer"
                      >
                        Live Demo
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className={`inline-flex items-center gap-1 text-xs font-display font-semibold select-none ${
                        darkMode ? "text-slate-600" : "text-slate-400"
                      }`}>
                        Demo Coming Soon
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2 px-4 rounded-xl text-xs font-display font-extrabold text-center transition-all bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white shadow-md hover:shadow-purple-500/10 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Simulated Applet Pop-up Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.4 }}
                className={`relative w-full max-w-4xl h-[85vh] md:h-[75vh] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl border ${
                  darkMode ? "bg-slate-900 border-purple-900/40" : "bg-white border-purple-100"
                }`}
              >
                {/* Close Button Trigger */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full hover:bg-red-500/10 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Left Panel: Description & Details */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-b md:border-b-0 md:border-r border-purple-900/15">
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono uppercase bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20 font-bold">
                      {selectedProject.category.toUpperCase()} WORKSPACE
                    </span>
                    <h3 className={`text-xl sm:text-2xl font-display font-black leading-tight ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}>
                      {selectedProject.title}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}>
                      {selectedProject.description}
                    </p>

                    <div>
                      <h4 className="text-[10px] font-mono uppercase text-slate-500 font-bold mb-2 flex items-center gap-1.5">
                        <Cpu className="h-3.5 w-3.5 text-purple-500" /> Key Engineered Features:
                      </h4>
                      <ul className="space-y-1.5">
                        {selectedProject.features.map((feat, i) => (
                           <li key={i} className="text-xs flex items-start gap-2 text-slate-400">
                            <span className="text-pink-500 font-bold mt-0.5">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-mono uppercase text-slate-500 font-bold mb-2 flex items-center gap-1.5">
                        <Code2 className="h-3.5 w-3.5 text-purple-500" /> Developed Using:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tech.map((t) => (
                          <span
                            key={t}
                            className={`text-[9px] font-mono px-2 py-0.5 rounded-md ${
                              darkMode ? "bg-slate-950 text-purple-300" : "bg-slate-100 text-purple-800"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-dashed border-purple-900/10 flex flex-wrap gap-3 mt-6">
                    {selectedProject.githubUrl ? (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-display text-xs font-bold text-center transition flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/10 hover:shadow-purple-700/20"
                      >
                        <Github className="h-4 w-4" /> View Source Code
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-500 font-display text-xs font-bold text-center cursor-not-allowed flex items-center justify-center gap-1.5"
                      >
                        <Github className="h-4 w-4 opacity-50" /> Private Project
                      </button>
                    )}
                    
                    {selectedProject.demoUrl ? (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 rounded-xl border border-pink-500/30 text-pink-500 hover:bg-pink-500/5 font-display text-xs font-bold text-center transition flex items-center justify-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" /> Real Deployment
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 py-2.5 rounded-xl border border-dashed border-slate-700 text-slate-500 font-display text-xs font-semibold text-center cursor-not-allowed flex items-center justify-center gap-1"
                      >
                        Demo Coming Soon
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Panel: Simulated Live Sandbox Applet */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-start bg-slate-950/10">
                  <div className="mb-4">
                    <h4 className="text-[10px] font-mono uppercase text-pink-500 font-bold tracking-wider flex items-center gap-1">
                      <Monitor className="h-3.5 w-3.5 animate-pulse" /> Sandbox Console Simulator
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-normal">
                      Interact in real-time with this simulated engine demonstrating the relational algorithms running on-device.
                    </p>
                  </div>

                  <div className="flex-1 min-h-[300px]">
                    <ProjectSandbox projectId={selectedProject.id} darkMode={darkMode} />
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
