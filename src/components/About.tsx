import { useState } from "react";
import { motion } from "motion/react";
import { User, Award, Code2, MapPin, GraduationCap, Briefcase, ChevronRight, Sparkles } from "lucide-react";
import ProfileImage from "./ProfileImage";
import regeneratedAboutImage from "../assets/images/profile.jpg";

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const stats = [
    { label: "Academic Projects", value: "5+", icon: Code2, color: "text-purple-500" },
    { label: "Core Skills Learned", value: "12+", icon: Award, color: "text-pink-500" },
    { label: "University Level", value: "BCA", icon: GraduationCap, color: "text-blue-500" },
    { label: "Dual Role", value: "Student+Work", icon: Briefcase, color: "text-emerald-500" }
  ];

  const highlights = [
    "Passionate, self-motivated frontend, PHP, Python, and Java developer.",
    "Specializes in responsive web solutions, user-friendly layouts, and robust SQL database systems.",
    "BCA student at the University of Kota (UOK) keeping up robust academic performance.",
    "Consistently exploring modern libraries like Next.js and Tailwind CSS to build production-ready applications.",
    "Currently gaining hands-on corporate experience at OPPYO Innovations Pvt. Ltd. Company."
  ];

  return (
    <section
      id="about"
      className={`py-20 relative overflow-hidden ${
        darkMode ? "bg-slate-900/30" : "bg-purple-50/20"
      }`}
    >
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
            <User className="h-3 w-3" />
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-gradient pr-1"
          >
            My Story, Ambition & Core Expertise
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Column 1: Abstract Vector Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 15 }}
              className="relative w-72 h-[340px] sm:w-80 sm:h-[380px] rounded-2xl p-1 bg-gradient-to-tr from-purple-600 via-pink-400 to-blue-500 shadow-2xl overflow-hidden group"
            >
              {/* Overlay Glass */}
              <div className={`w-full h-full rounded-2xl flex flex-col justify-center items-center p-6 text-center ${
                darkMode ? "bg-slate-950/95" : "bg-white/95"
              }`}>
                {/* Photo frame with hover zoom action */}
                <div className="mb-4">
                  <ProfileImage darkMode={darkMode} sizeClasses="w-36 h-36 sm:w-40 sm:h-40" customSrc={regeneratedAboutImage} />
                </div>
                
                <h4 className="font-display font-bold text-lg mb-1 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Renu Pareta
                </h4>
                <p className="text-xs font-mono text-slate-400">Kota, Rajasthan, India</p>

                <div className={`mt-4 pt-3 border-t w-full text-xs font-medium ${darkMode ? "border-slate-800 text-slate-400" : "border-slate-100 text-slate-600"}`}>
                  Aspiring Full Stack Engineer
                </div>
                <div className="mt-2.5 flex items-center gap-1.5 justify-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping inline-block" />
                  <span className="text-[10px] font-mono text-green-500 font-semibold uppercase">Open to Opportunities</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Bio details */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <h3 className={`text-xl sm:text-2xl font-display font-semibold mb-4 ${
                darkMode ? "text-slate-100" : "text-slate-800"
              }`}>
                Bridging Learning and Industry Exposure
              </h3>
              <p className={`text-base leading-relaxed mb-4 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}>
                I am a passionate and self-motivated Web Developer from **Kota, Rajasthan**. Currently managing professional responsibilities with **OPPYO Innovations Pvt. Ltd. Company** while simultaneously pursuing my **Bachelor of Computer Applications (BCA)** at the **University of Kota (UOK)**, I successfully balance corporate experience and academic studies.
              </p>
              <p className={`text-base leading-relaxed ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}>
                My journey centers around mastering modern frontend design, crafting lightweight web panels, and deploying efficient database services. I enjoy turning structured logic into beautiful digital web realities.
              </p>
            </motion.div>

            {/* List with chevron ticks */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="flex items-start gap-2.5"
                >
                  <span className="mt-1 flex-shrink-0 p-0.5 rounded-full bg-purple-500/10 text-purple-500">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                  <span className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats list */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-dashed border-purple-900/15">
              {stats.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.05 }}
                    className={`p-3.5 rounded-xl border flex flex-col justify-between ${
                      darkMode ? "bg-slate-900/60 border-purple-900/30" : "bg-white border-purple-100/70"
                    } shadow-sm`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-2xl font-display font-extrabold ${stat.color}`}>
                        {stat.value}
                      </span>
                      <IconComp className="h-4 w-4 text-purple-400/80" />
                    </div>
                    <span className={`text-xs font-medium tracking-tight ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
