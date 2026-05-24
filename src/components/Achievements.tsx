import { motion } from "motion/react";
import { Award, Star, Flame, Sparkles, Trophy } from "lucide-react";

interface AchievementsProps {
  darkMode: boolean;
}

export default function Achievements({ darkMode }: AchievementsProps) {
  const achievementsList = [
    {
      title: "Academic Web Systems Creator",
      sub: "BCA Practical Assignments",
      detail: "Engineered and configured multiple web-based database utilities from scratch, including an Online voting interface and college Student tracking management directories with standard PHP.",
      metric: "5 Systems Done",
      badge: "Collegiate Project Award",
      icon: Trophy,
      tint: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      title: "Active Full Stack Learner",
      sub: "Independent Online Tech Stack",
      detail: "Consistently researching Next.js frameworks, serverless hosting structures, and TypeScript specifications to graduate from standard local models to server-side enterprise apps.",
      metric: "TypeScript Core",
      badge: "Self Directed",
      icon: Flame,
      tint: "text-pink-500",
      bg: "bg-pink-500/10"
    },
    {
      title: "Fluid Mobile Design Specialist",
      sub: "UI/UX Modeling Expert",
      detail: "Tuned responsive grids, interactive touch layouts, and micro-padding adjustments to produce mobile web models that conform perfectly to standard screens without rendering errors.",
      metric: "Figma to Tailwind v4",
      badge: "Design Mastery",
      icon: Star,
      tint: "text-purple-500",
      bg: "bg-purple-500/10"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
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
            <Award className="h-3.5 w-3.5 text-pink-500" />
            Achievements
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-gradient pr-1"
          >
            Honors & Learning Milestones
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Milestone Deck Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsList.map((ach, index) => {
            const IconComp = ach.icon;
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between relative group hover:shadow-xl transition-all duration-300 ${
                  darkMode
                    ? "bg-slate-900/40 border-purple-900/20 hover:border-purple-800"
                    : "bg-white border-purple-100 hover:border-purple-300"
                }`}
              >
                {/* Floating shine decoration */}
                <div className="absolute top-4 right-4 text-purple-500/20 group-hover:text-purple-500/40 transition-colors">
                  <Sparkles className="h-4 w-4 animate-spin" style={{ animationDuration: "12s" }} />
                </div>

                <div>
                  <div className={`p-3 rounded-2xl w-fit ${ach.bg} mb-6 flex items-center justify-center`}>
                    <IconComp className={`h-6 w-6 ${ach.tint}`} />
                  </div>

                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-pink-500 block mb-1">
                    {ach.sub}
                  </span>

                  <h3 className={`text-lg font-display font-extrabold mb-3 leading-tight ${
                    darkMode ? "text-slate-100" : "text-slate-800"
                  }`}>
                    {ach.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-6 ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}>
                    {ach.detail}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-dashed border-purple-900/10">
                  <span className={`text-[10.5px] font-mono font-bold uppercase ${ach.tint}`}>
                    {ach.metric}
                  </span>
                  
                  <span className={`px-2.5 py-1 rounded-full text-[9px] font-semibold tracking-wide border font-mono ${
                    darkMode ? "bg-slate-950 border-purple-900 text-purple-300" : "bg-purple-50 border-purple-200 text-purple-700"
                  }`}>
                    {ach.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
