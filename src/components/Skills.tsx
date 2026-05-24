import { motion } from "motion/react";
import { Award, BrainCircuit, CheckCircle, Code2, Sparkles } from "lucide-react";

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  const technicalSkills = [
    { name: "HTML5 / CSS3", level: 95, category: "Frontend" },
    { name: "JavaScript (ES6+)", level: 88, category: "Frontend" },
    { name: "PHP", level: 82, category: "Backend" },
    { name: "MySQL / DBMS", level: 85, category: "Database" },
    { name: "Next.js", level: 78, category: "Fullstack" },
    { name: "Java", level: 80, category: "Programming" },
    { name: "Python", level: 75, category: "Programming" },
    { name: "UI/UX Design", level: 85, category: "Design" },
    { name: "Responsive Web Design", level: 95, category: "Design" },
    { name: "Figma", level: 80, category: "Tools" },
    { name: "MS Office Suite", level: 90, category: "Tools" }
  ];

  const softSkills = [
    { name: "Communication", description: "Polished via retail front-desk and student leadership responsibilities." },
    { name: "Teamwork", description: "Collaborates on academic projects and professional group structures." },
    { name: "Fast Learner", description: "Rapid adaptation to frameworks and corporate environments." },
    { name: "Problem Solving", description: "Structured analytical approaches developed during BCA algorithms studies." },
    { name: "Creativity", description: "Designing visual UI/UX models and elegant portfolio elements." },
    { name: "Time Management", description: "Proved by managing active job duties at OPPO along with full BCA studies." }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
            <BrainCircuit className="h-3 w-3" />
            Skills Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-gradient pr-1"
          >
            My Expertise & Attributes
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Column 1: Technical with Progress Bars */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="p-2 rounded-xl bg-purple-500/10 text-purple-500">
                <Code2 className="h-5 w-5" />
              </span>
              <h3 className={`text-xl font-display font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>
                Technical Competence
              </h3>
            </div>

            <div className={`p-6 rounded-2xl border ${
              darkMode ? "bg-slate-900/40 border-purple-900/30" : "bg-white border-purple-100"
            } space-y-5 shadow-sm`}>
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between items-center text-sm">
                    <span className={`font-medium ${darkMode ? "text-slate-200" : "text-slate-700"}`}>
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded ${
                        darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-500"
                      }`}>
                        {skill.category}
                      </span>
                      <span className="font-mono text-xs font-semibold text-purple-500">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  {/* Progress bar container */}
                  <div className={`h-2 w-full rounded-full overflow-hidden ${
                    darkMode ? "bg-slate-800" : "bg-slate-100"
                  }`}>
                    {/* Active bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Soft Skills with Cards */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="p-2 rounded-xl bg-pink-500/10 text-pink-500">
                <Award className="h-5 w-5" />
              </span>
              <h3 className={`text-xl font-display font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>
                Soft Capabilities
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`p-5 rounded-2xl border flex flex-col justify-between group hover:shadow-md transition-shadow ${
                    darkMode
                      ? "bg-slate-900/40 border-purple-900/20 hover:border-purple-800"
                      : "bg-white border-purple-100 hover:border-purple-300"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="p-1 rounded bg-pink-500/10 text-pink-500 group-hover:scale-110 transition-transform">
                        <CheckCircle className="h-3.5 w-3.5" />
                      </span>
                      <span className={`font-display font-medium text-sm sm:text-base ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}>
                        {skill.name}
                      </span>
                    </div>
                    <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Extra Fun Addition: GitHub Contribution placeholder grid */}
            <div className={`p-5 rounded-2xl border space-y-4 ${
              darkMode ? "bg-slate-900/40 border-purple-900/20" : "bg-white border-purple-100"
            }`}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-pink-500 animate-bounce" />
                  <span className={`text-xs font-mono font-bold tracking-tight ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                    GITHUB CONTRIBUTION ESTIMATE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-purple-400 hover:underline cursor-pointer">
                  254 Commits Year-to-Date
                </span>
              </div>
              
              {/* Box grid layout */}
              <div className="flex flex-wrap gap-1">
                {Array.from({ length: 42 }).map((_, i) => {
                  let bgColor = "bg-slate-800";
                  if (!darkMode) bgColor = "bg-slate-100";
                  if (i % 7 === 1) bgColor = "bg-purple-900/40 dark:bg-purple-950/80";
                  if (i % 5 === 2) bgColor = "bg-purple-500/60 dark:bg-purple-800/60";
                  if (i % 9 === 0) bgColor = "bg-purple-400";
                  if (i % 11 === 3) bgColor = "bg-pink-500";
                  
                  return (
                    <div
                      key={i}
                      className={`w-3.5 h-3.5 rounded-xs transition-colors duration-300 hover:scale-125 ${bgColor}`}
                      title={`${i + 2} Commits on last Wed`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
