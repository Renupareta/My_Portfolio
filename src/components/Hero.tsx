import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Download,
  FileText,
  Sparkles,
  MapPin,
  ExternalLink,
  Mail,
  Phone,
} from "lucide-react";
import ProfileImage from "./ProfileImage";
import regeneratedHeroImage from "../assets/images/regenerated_image_1779601885581.jpg";

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
    "Aspiring Full-Stack Developer",
  ];

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length - 1));
      }, 60);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }, 120);
    }

    if (!isDeleting && typedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    }

    if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

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
      <div
        className={`absolute top-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse ${blobClassOne}`}
      />
      <div
        className={`absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full translate-x-1/2 translate-y-1/2 ${blobClassTwo}`}
        style={{ animationDuration: "8s" }}
      />
      <div
        className={`absolute top-1/2 right-1/3 w-[25vw] h-[25vw] rounded-full animate-bounce ${blobClassThree}`}
        style={{ animationDuration: "12s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="relative inline-block mb-6 group/profile"
        >
          <ProfileImage
            darkMode={darkMode}
            sizeClasses="w-36 h-36"
            customSrc={regeneratedHeroImage}
          />

          <span className="absolute bottom-1 right-2.5 w-5 h-5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full flex items-center justify-center z-10">
            <span className="w-2 h-2 bg-white rounded-full animate-ping" />
          </span>
        </motion.div>

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
          <Sparkles
            className="h-3.5 w-3.5 text-pink-500 animate-spin"
            style={{ animationDuration: "3s" }}
          />
          Portfolio Website
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight mb-4"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
            Renu Pareta
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="min-h-[40px] mb-6 flex justify-center items-center"
        >
          <span
            className={`font-mono text-lg sm:text-2xl font-bold tracking-tight ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            I am a{" "}
            <span className="text-purple-600 dark:text-purple-400">
              {typedText}
            </span>
            <span className="inline-block w-1 h-6 bg-pink-500 ml-1 animate-pulse border-r" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className={`max-w-2xl mx-auto text-base sm:text-lg mb-10 leading-relaxed font-sans ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Building modern, responsive, and creative web solutions. Based out of
          Kota, Rajasthan, I combine academic insights with professional
          responsibility to build pristine digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            id="hero-cta-projects"
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
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

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <div
          className={`w-6 h-10 rounded-full border-2 p-1 ${
            darkMode ? "border-slate-800" : "border-slate-300"
          }`}
        >
          <div className="w-1.5 h-2.5 rounded-full bg-purple-500 mx-auto animate-bounce mt-1" />
        </div>
      </div>

      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-slate-950/70">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl border ${
                darkMode
                  ? "bg-slate-900 border-purple-900/50 text-slate-100"
                  : "bg-white border-purple-100 text-slate-900"
              }`}
            >
              <div
                className={`sticky top-0 z-10 p-4 flex justify-between items-center border-b bg-opacity-95 backdrop-blur-sm shadow-sm ${
                  darkMode
                    ? "bg-slate-900 border-purple-950"
                    : "bg-white border-purple-50"
                }`}
              >
                <div className="flex items-center gap-2 font-display font-semibold">
                  <FileText className="text-purple-600 h-5 w-5" />
                  <span>Resume - Renu Pareta</span>
                </div>

                <button
                  onClick={() => setShowResumeModal(false)}
                  className={`p-1.5 rounded-lg border text-sm ${
                    darkMode
                      ? "border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white"
                      : "border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Close
                </button>
              </div>

              <div className="p-6 sm:p-10 font-sans space-y-6">
                <h2 className="text-2xl sm:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  Renu Pareta
                </h2>

                <p className="text-sm font-semibold text-pink-500 font-mono">
                  BCA Student | Web Developer | Frontend Developer | Aspiring
                  Full Stack Developer
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-purple-500" />
                    Kota, Rajasthan, India
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="h-3.5 w-3.5 text-purple-500" />
                    renupareta20@gmail.com
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="h-3.5 w-3.5 text-purple-500" />
                    +91-8503813532
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 text-xs font-mono">
                  <a
                    href="https://github.com/Renupareta"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-500 hover:underline flex items-center gap-1"
                  >
                    github.com/Renupareta <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/renupareta"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-500 hover:underline flex items-center gap-1"
                  >
                    linkedin.com/in/renupareta{" "}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div>
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-purple-500 mb-2 border-l-2 border-purple-500 pl-2">
                    Professional Summary
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      darkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    Passionate and self-motivated BCA student with strong
                    interest in web development, frontend technologies, and
                    modern full-stack applications.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}