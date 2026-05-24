import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Download, FileText, Sparkles, MapPin, ExternalLink, Mail, Phone, Calendar } from "lucide-react";
import ProfileImage from "./ProfileImage";
import regeneratedHeroImage from "../assets/images/profile.jpg";

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const words = [
    "BCA Student",
    "Web Developer",
    "Frontend Specialist",
    "Aspiring Full-Stack Developer"
  ];

  const typingSpeed = 120;
  const deletingSpeed = 60;
  const wordDelay = 2500;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && typedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), wordDelay);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  // Floating background blobs styles based on theme
  const blobClassOne = darkMode
    ? "bg-purple-600/20 blur-[130px]"
    : "bg-purple-400/20 blur-[110px]";
  const blobClassTwo = darkMode
    ? "bg-pink-600/20 blur-[130px]"
    : "bg-pink-400/20 blur-[110px]";
  const blobClassThree = darkMode
    ? "bg-blue-600/15 blur-[130px]"
    : "bg-blue-400/15 blur-[110px]";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Dynamic Ambient Background Blobs */}
      <div className={`absolute top-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse ${blobClassOne}`} />
      <div className={`absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full translate-x-1/2 translate-y-1/2 ${blobClassTwo}`} style={{ animationDuration: "8s" }} />
      <div className={`absolute top-1/2 right-1/3 w-[25vw] h-[25vw] rounded-full animate-bounce ${blobClassThree}`} style={{ animationDuration: "12s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center z-10">
        {/* Profile Avatar Image */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="relative inline-block mb-6 group/profile"
        >
          <ProfileImage darkMode={darkMode} sizeClasses="w-36 h-36" customSrc={regeneratedHeroImage} />
          
          {/* Active Status Indicator */}
          <span className="absolute bottom-1 right-2.5 w-5 h-5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full flex items-center justify-center z-10">
            <span className="w-2 h-2 bg-white rounded-full animate-ping" />
          </span>
        </motion.div>

        {/* Sparkle Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border uppercase mb-6 ${
            darkMode
              ? "bg-purple-950/40 border-purple-800/50 text-purple-300"
              : "bg-purple-50 border-purple-200 text-purple-700"
          }`}
        >
          <Sparkles className="h-3.5 w-3.5 text-pink-500 animate-spin" style={{ animationDuration: "3s" }} />
          Portfolio Website
        </motion.div>

        {/* Big Name Hook */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight mb-4"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">Renu Pareta</span>
        </motion.h1>

        {/* Dynamic Typed Subheader */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="min-h-[40px] mb-6 flex justify-center items-center"
        >
          <span className={`font-mono text-lg sm:text-2xl font-bold tracking-tight ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
            I am a <span className="text-purple-600 dark:text-purple-400">{typedText}</span>
            <span className="inline-block w-1 h-6 bg-pink-500 ml-1 animate-pulse border-r" />
          </span>
        </motion.div>

        {/* Supporting statement */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className={`max-w-2xl mx-auto text-base sm:text-lg mb-10 leading-relaxed font-sans ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Building modern, responsive, and creative web solutions. Based out of Kota, Rajasthan,
          I combine academic insights with professional responsibility to build pristine digital experiences.
        </motion.p>

        {/* Dynamic Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            id="hero-cta-projects"
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 over to-pink-500 text-white font-medium hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 pointer"
          >
            View Projects
            <ArrowRight className="h-4.5 w-4.5" />
          </a>

          <a
            id="hero-cta-contact"
            href="#contact"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium border hover:scale-105 transition-all duration-300 ${
              darkMode
                ? "bg-slate-900 border-purple-900 text-purple-300 hover:bg-slate-800 hover:border-purple-600"
                : "bg-white border-purple-100 text-purple-700 hover:bg-purple-50 hover:border-purple-300"
            }`}
          >
            Contact Me
          </a>

          <button
            id="hero-download-resume"
            onClick={() => setShowResumeModal(true)}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium transition-all duration-300 ${
              darkMode
                ? "bg-purple-950/40 hover:bg-purple-900/60 text-white border border-purple-800"
                : "bg-purple-100/80 hover:bg-purple-200 text-purple-800 border border-purple-200"
            }`}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </button>
        </motion.div>
      </div>

      {/* Bounce indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <div className={`w-6 h-10 rounded-full border-2 p-1 ${darkMode ? "border-slate-800" : "border-slate-300"}`}>
          <div className="w-1.5 h-2.5 rounded-full bg-purple-500 mx-auto animate-bounce mt-1" />
        </div>
      </div>

      {/* Simulated Resume Modal Drawer */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-opacity-70 bg-slate-950">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl border ${
                darkMode ? "bg-slate-900 border-purple-900/50 text-slate-100" : "bg-white border-purple-100 text-slate-900"
              }`}
            >
              <div className="sticky top-0 z-10 p-4 flex justify-between items-center border-b bg-opacity-95 backdrop-blur-sm shadow-sm justify-between ${
                darkMode ? 'bg-slate-900 border-purple-950' : 'bg-white border-purple-50'
              }">
                <div className="flex items-center gap-2 font-display font-semibold">
                  <FileText className="text-purple-600 h-5 w-5" />
                  <span>Resume - Renu Pareta</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const element = document.createElement("a");
                      const file = new Blob([
`==================================================================
                          RENU PARETA
==================================================================
BCA Student | Web Developer | Frontend Developer | Aspiring Full Stack Developer
Kota, Rajasthan, India | +91-8503813532 | renupareta20@gmail.com
LinkedIn: www.linkedin.com/in/renupareta
GitHub: https://github.com/Renupareta

------------------------------------------------------------------
PROFESSIONAL SUMMARY
------------------------------------------------------------------
Passionate and self-motivated BCA student with strong interest in web development, frontend technologies, and modern full-stack applications. Skilled in HTML, CSS, JavaScript, PHP, Python, Java, MySQL, and Next.js with experience in developing multiple academic and management system projects. Focused on building responsive, user-friendly, and visually appealing web applications while continuously learning modern technologies and improving development skills.

------------------------------------------------------------------
EDUCATION
------------------------------------------------------------------
Bachelor of Computer Applications (BCA) - Graduate
University of Kota (UOK)

------------------------------------------------------------------
TECHNICAL SKILLS
------------------------------------------------------------------
* Frontend Development:
  - HTML, CSS, JavaScript, Tailwind CSS, Responsive Web Design, Next.js
* Backend Development:
  - PHP, Python, Java
* Database & Tools:
  - MySQL, DBMS, Figma, MS Office
* Soft Skills:
  - Communication, Teamwork, Problem Solving, Creativity, Fast Learner, Time Management

------------------------------------------------------------------
EXPERIENCE
------------------------------------------------------------------
Working Professional — OPPYO Innovations Pvt. Ltd. Company
Currently managing professional responsibilities alongside academic studies while gaining practical communication, teamwork, and work management experience.

------------------------------------------------------------------
ACHIEVEMENTS
------------------------------------------------------------------
* Built multiple academic and management system projects.
* Learning modern full-stack development technologies.
* Developed responsive and user-friendly websites.
* Strong understanding of frontend development concepts.
* Experience with databases and web applications.
* Continuously improving development and design skills.

------------------------------------------------------------------
SERVICES
------------------------------------------------------------------
* Frontend Website Development
* Responsive Web Design
* UI/UX Design
* PHP Web Applications
* Portfolio Website Design
* Database Management Systems

------------------------------------------------------------------
LANGUAGES
------------------------------------------------------------------
* Hindi
* English

------------------------------------------------------------------
DECLARATION
------------------------------------------------------------------
I hereby declare that the above information is true and correct to the best of my knowledge and belief.

Renu Pareta`
                      ], {type: 'text/plain'});
                      element.href = URL.createObjectURL(file);
                      element.download = "Renu_Pareta_Resume.txt";
                      document.body.appendChild(element);
                      element.click();
                      document.body.removeChild(element);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download Copy
                  </button>
                  <button
                    onClick={() => setShowResumeModal(false)}
                    className={`p-1.5 rounded-lg border text-sm ${
                      darkMode ? "border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white" : "border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Resume Body */}
              <div className="p-6 sm:p-10 font-sans space-y-8">
                {/* Header info */}
                <div className="text-center sm:text-left sm:flex justify-between items-start pb-6 border-b border-dashed border-purple-900/20">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-display font-black text-purple-600 bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 text-transparent">
                      Renu Pareta
                    </h2>
                    <p className="text-sm font-semibold text-pink-500 font-mono mt-1">
                      BCA Student | Web Developer | Frontend Developer | Aspiring Full Stack Developer
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-purple-500" /> Kota, Rajasthan, India
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="h-3.5 w-3.5 text-purple-500" /> renupareta20@gmail.com
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="h-3.5 w-3.5 text-purple-500" /> +91-8503813532
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 flex flex-col items-center sm:items-end gap-1 text-xs font-mono">
                    <a href="https://github.com/Renupareta" target="_blank" rel="noreferrer" className="text-purple-500 hover:underline flex items-center gap-1">
                      github.com/Renupareta <ExternalLink className="h-3 w-3" />
                    </a>
                    <a href="https://www.linkedin.com/in/renupareta" target="_blank" rel="noreferrer" className="text-purple-500 hover:underline flex items-center gap-1">
                      linkedin.com/in/renupareta <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Brief Summary */}
                <div>
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-purple-500 mb-2 border-l-2 border-purple-500 pl-2">
                    Professional Summary
                  </h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Passionate and self-motivated BCA student with strong interest in web development, frontend technologies, and modern full-stack applications. Skilled in HTML, CSS, JavaScript, PHP, Python, Java, MySQL, and Next.js with experience in developing multiple academic and management system projects. Focused on building responsive, user-friendly, and visually appealing web applications while continuously learning modern technologies and improving development skills.
                  </p>
                </div>

                {/* Education & Experience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Edu */}
                  <div className="space-y-4">
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-purple-500 border-l-2 border-purple-500 pl-2">
                      Education
                    </h3>
                    <div className={`p-4 rounded-xl border ${darkMode ? "bg-slate-950/60 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm font-bold">Bachelor of Computer Applications (BCA)</span>
                        <span className="text-xs font-mono text-purple-500 font-semibold px-2 py-0.5 rounded-full bg-purple-500/10">Graduate</span>
                      </div>
                      <p className="text-xs text-purple-500 font-medium mb-2">University of Kota (UOK)</p>
                      <p className="text-xs text-slate-400">
                        Acquired rigorous knowledge of computer concepts, Object-Oriented systems, programming syntaxes, responsive layout structures, and relational databases.
                      </p>
                    </div>
                  </div>

                  {/* Exp */}
                  <div className="space-y-4">
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-purple-500 border-l-2 border-purple-500 pl-2">
                      Experience
                    </h3>
                    <div className={`p-4 rounded-xl border ${darkMode ? "bg-slate-950/60 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm font-bold">Working Professional</span>
                        <span className="text-xs font-mono text-pink-500 font-semibold px-2 py-0.5 rounded-full bg-pink-500/10 font-bold animate-pulse">Present</span>
                      </div>
                      <p className="text-xs text-pink-500 font-medium mb-1">OPPYO Innovations Pvt. Ltd. Company</p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Currently managing professional responsibilities alongside academic studies while gaining valuable communication, teamwork, and overall work management experiences.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical Skills Category Subdivision */}
                <div>
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-purple-500 mb-3 border-l-2 border-purple-500 pl-2">
                    Technical Skills
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className={`p-3 rounded-lg border ${darkMode ? "bg-slate-950/20 border-slate-800" : "bg-slate-50 border-slate-200/50"}`}>
                      <h4 className="text-xs font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 uppercase mb-1.5">Frontend Dev</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">HTML, CSS, JavaScript, Tailwind CSS, Responsive Design, Next.js</p>
                    </div>
                    <div className={`p-3 rounded-lg border ${darkMode ? "bg-slate-950/20 border-slate-800" : "bg-slate-50 border-slate-200/50"}`}>
                      <h4 className="text-xs font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 uppercase mb-1.5">Backend Dev</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">PHP, Python, Java</p>
                    </div>
                    <div className={`p-3 rounded-lg border ${darkMode ? "bg-slate-950/20 border-slate-800" : "bg-slate-50 border-slate-200/50"}`}>
                      <h4 className="text-xs font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 uppercase mb-1.5">Database & Tools</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">MySQL, DBMS, Figma, MS Office</p>
                    </div>
                    <div className={`p-3 rounded-lg border ${darkMode ? "bg-slate-950/20 border-slate-800" : "bg-slate-50 border-slate-200/50"}`}>
                      <h4 className="text-xs font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 uppercase mb-1.5">Soft Skills</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Communication, Teamwork, Problem Solving, Fast Learner</p>
                    </div>
                  </div>
                </div>

                {/* Achievements & Services Split Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-purple-500 mb-2 border-l-2 border-purple-500 pl-2">
                      Achievements
                    </h3>
                    <ul className="text-xs text-slate-400 space-y-1 bg-purple-500/5 p-3.5 rounded-xl border border-purple-500/10">
                      <li>• Built multiple academic & management system projects.</li>
                      <li>• Learning modern full-stack development technologies.</li>
                      <li>• Developed responsive and user-friendly websites.</li>
                      <li>• Strong understanding of frontend development concepts.</li>
                      <li>• Experience with databases and web applications.</li>
                      <li>• Continuously improving development and design skills.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-purple-500 mb-2 border-l-2 border-purple-500 pl-2">
                      Services Provided
                    </h3>
                    <ul className="text-xs text-slate-400 space-y-1 bg-pink-500/5 p-3.5 rounded-xl border border-pink-500/10">
                      <li>• Frontend Website Development</li>
                      <li>• Responsive Web Design</li>
                      <li>• UI/UX Layout Design (Figma)</li>
                      <li>• PHP Web Applications with MySQL</li>
                      <li>• Customized Portfolio Website Projects</li>
                      <li>• Database Management Systems (DBMS)</li>
                    </ul>
                  </div>
                </div>

                {/* Languages & Declaration */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4 border-t border-dashed border-purple-900/10 text-xs text-slate-400">
                  <div>
                    <span className="font-bold text-purple-500 block uppercase mb-1 text-[10px]">Languages:</span>
                    <span>Hindi, English</span>
                  </div>
                  <div className="sm:text-right max-w-sm">
                    <span className="font-bold text-purple-500 block uppercase mb-1 text-[10px]">Declaration:</span>
                    <span className="italic text-[11px]">"I hereby declare that the above information is true and correct to the best of my knowledge and belief."</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
