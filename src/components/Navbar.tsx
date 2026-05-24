import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
}

export default function Navbar({ darkMode, toggleDarkMode, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Experience", href: "experience" },
    { label: "Projects", href: "projects" },
    { label: "Services", href: "services" },
    { label: "Honours", href: "achievements" },
    { label: "Contact", href: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 90; // Precise sticky header height cushion
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3.5 backdrop-blur-md shadow-lg border-b bg-opacity-80 " +
            (darkMode
              ? "bg-slate-950/80 border-purple-900/30"
              : "bg-white/80 border-purple-100")
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleScrollToSection(e, "home")}
            className="flex items-center gap-2 group font-display font-bold text-xl tracking-wide select-none"
          >
            <span className="p-1 px-3 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
              RP
            </span>
            <span className={`transition-colors duration-300 font-display font-black ${darkMode ? "text-white" : "text-slate-900"}`}>
              Renu<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Pareta</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1 list-none">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={`#${item.href}`}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className={`relative px-4 py-2 rounded-full text-xs font-display font-semibold tracking-wider uppercase transition-all duration-300 ${
                      isActive
                        ? darkMode
                          ? "text-purple-300"
                          : "text-purple-700"
                        : darkMode
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-600 hover:text-purple-600"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeBubble"
                        className={`absolute inset-0 rounded-full -z-10 ${
                          darkMode ? "bg-purple-950/50 border border-purple-800/20" : "bg-purple-50 border border-purple-100"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              id="theme-toggle-btn"
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-full border transition-all duration-300 cursor-pointer focus:outline-none ${
                darkMode
                  ? "bg-slate-900 border-purple-900/40 text-yellow-500 hover:bg-slate-850 hover:border-yellow-400"
                  : "bg-slate-100 border-purple-100 text-purple-700 hover:bg-slate-200"
              }`}
              title="Toggle Theme"
              aria-label="Toggle dark/light theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-4.5 w-4.5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-4.5 w-4.5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Icon */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg md:hidden cursor-pointer transition-colors ${
                darkMode ? "text-slate-300 hover:text-white hover:bg-slate-900" : "text-slate-600 hover:text-purple-600 hover:bg-purple-50"
              }`}
              aria-label="Open primary menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b overflow-hidden ${
              darkMode ? "bg-slate-950 border-purple-900/40" : "bg-white border-purple-100"
            }`}
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.href}
                    href={`#${item.href}`}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold uppercase transition-all tracking-wide ${
                      isActive
                        ? darkMode
                          ? "bg-purple-950/60 text-purple-300 border-l-4 border-purple-500 pl-3"
                          : "bg-purple-50 text-purple-700 border-l-4 border-purple-600 pl-3"
                        : darkMode
                        ? "text-slate-400 hover:text-white hover:bg-slate-900"
                        : "text-slate-600 hover:text-purple-600 hover:bg-purple-50"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
