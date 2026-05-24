import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Quote, Star, Sparkles, Heart } from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Check touch capability
  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  // Sync cursor positioning
  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isTouchDevice]);

  // Section Tracking via Intersection Observer
  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "projects", "services", "achievements", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((secId) => {
      const el = document.getElementById(secId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const testimonials = [
    {
      quote: "Renu Pareta demonstrated outstanding tenacity in building local Student portals. Her SQL configurations and PHP scripting are neat and secure.",
      author: "Collegiate Mentor / Reviewer",
      role: "BCA Department Review System",
      stars: 5
    },
    {
      quote: "Meticulous focus on details. She handles OPPO customer operations and service lines with great maturity, carrying the same high communication clarity into her web designs.",
      author: "Operation Lead Services",
      role: "Retail Corporate OPPO Group",
      stars: 5
    },
    {
      quote: "Renu has an innate eyes-for-design. Her Figma grid structures are optimized correctly, and her transition to Tailwind stylesheets is pixel-perfect.",
      author: "Freelance Creative Collaborator",
      role: "User Experience Labs",
      stars: 5
    }
  ];

  return (
    <div
      id="app-root"
      className={`min-h-screen transition-colors duration-500 font-sans ${
        darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Premium custom trailing cursor */}
      {!isTouchDevice && (
        <motion.div
          id="custom-cursor-follower"
          className="fixed top-0 left-0 w-8 h-8 rounded-full border border-pink-500/40 pointer-events-none z-50 mix-blend-difference hidden md:block"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16
          }}
          transition={{ type: "spring", stiffness: 450, damping: 30 }}
        />
      )}

      {/* Primary Particles System Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles darkMode={darkMode} />
      </div>

      {/* Context Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Header */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} activeSection={activeSection} />

        {/* Hero Section */}
        <Hero darkMode={darkMode} />

        {/* About Section */}
        <About darkMode={darkMode} />

        {/* Skills Section */}
        <Skills darkMode={darkMode} />

        {/* Experience Section */}
        <Experience darkMode={darkMode} />

        {/* Projects Filter view */}
        <Projects darkMode={darkMode} />

        {/* Services Showcase */}
        <Services darkMode={darkMode} />

        {/* Achievements Honours deck */}
        <Achievements darkMode={darkMode} />

        {/* Testimonials section layout */}
        <section id="testimonials" className={`py-20 relative overflow-hidden ${
          darkMode ? "bg-slate-900/30" : "bg-purple-50/20"
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider mb-3 ${
                  darkMode ? "bg-purple-950/50 text-purple-300 border border-purple-900/50" : "bg-purple-100 text-purple-700 border border-purple-200"
                }`}
              >
                <MessageSquare className="h-3.5 w-3.5" />
                Recommendations
              </motion.div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gradient pr-1">
                Collaborative Testimonials
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
            </div>

            {/* Quote Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((test, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
                    darkMode ? "bg-slate-900/40 border-purple-900/10" : "bg-white border-purple-100"
                  } shadow-sm group hover:shadow-md transition-all`}
                >
                  <div className="space-y-4">
                    <Quote className="h-8 w-8 text-purple-500/35" />
                    <p className={`text-xs sm:text-sm italic leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                      "{test.quote}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-dashed border-purple-900/10 flex items-center justify-between">
                    <div>
                      <h4 className={`text-xs font-display font-extrabold ${darkMode ? "text-slate-100" : "text-slate-800"}`}>
                        {test.author}
                      </h4>
                      <p className="text-[10px] text-purple-500 font-mono mt-0.5">{test.role}</p>
                    </div>

                    <div className="flex gap-0.5">
                      {Array.from({ length: test.stars }).map((_, stIdx) => (
                        <Star key={stIdx} className="h-3 w-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section Form */}
        <Contact darkMode={darkMode} />

        {/* Footer info & Credits */}
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
