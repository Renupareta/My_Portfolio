import { motion } from "motion/react";
import { Briefcase, GraduationCap, MapPin, Calendar, Building, Sparkles } from "lucide-react";

interface ExperienceProps {
  darkMode: boolean;
}

export default function Experience({ darkMode }: ExperienceProps) {
  const experiences = [
    {
      type: "work",
      role: "Working Professional",
      organization: "OPPYO Innovations Pvt. Ltd. Company",
      location: "Kota, Rajasthan, India",
      period: "2024 - Present (Active Status)",
      description: "Managing professional responsibilities alongside academic studies while gaining valuable industry exposure, hands-on administrative workflows, and mastering collaborative team dynamics, communication, and work management.",
      bullets: [
        "Juggling active career roles with university-level BCA education successfully.",
        "Strengthening communication pipelines, client relationship guidelines, and reporting workflows.",
        "Leveraging key operational principles to design clean, high-performance dashboards."
      ]
    },
    {
      type: "education",
      role: "Bachelor of Computer Applications (BCA)",
      organization: "University of Kota (UOK)",
      location: "Kota, Rajasthan, India",
      period: "2023 - Present (Academic Pursuits)",
      description: "Active undergraduate college student focusing on computer architectures, backend/frontend programming theories, database management principles, and modular system integrations.",
      bullets: [
        "Consistent academic scorer in web and programming subjects.",
        "Built multiple academic mock projects using HTML, PHP, and databases.",
        "Acquired foundational training in Data Structures, Java, and DBMS systems."
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 relative overflow-hidden ${
      darkMode ? "bg-slate-900/30" : "bg-purple-50/20"
    }`}>
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
            <Briefcase className="h-3 w-3" />
            My Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-gradient pr-1"
          >
            Dual Focus: Industry & Academia
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Work / Study Comparative Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => {
            const isWork = exp.type === "work";
            const BadgeIcon = isWork ? Briefcase : GraduationCap;
            
            return (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300 ${
                  darkMode
                    ? "bg-slate-900/50 border-purple-900/30 hover:border-purple-700"
                    : "bg-white border-purple-100 hover:border-purple-300"
                }`}
              >
                {/* Visual Glow overlay */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full -mr-8 -mt-8 ${
                  isWork ? "bg-purple-500/10" : "bg-pink-500/10"
                } blur-xl`} />

                <div>
                  {/* Badge & Dates */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold leading-none bg-purple-500/10 text-purple-400">
                      <BadgeIcon className="h-3.5 w-3.5 text-purple-500" />
                      {isWork ? "CORPORATE SPACE" : "ACADEMIC SPACE"}
                    </div>
                    <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                      <Calendar className="h-3.5 w-3.5 text-purple-400" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Institution Details */}
                  <div className="mb-4">
                    <h3 className={`text-xl font-display font-bold leading-snug group-hover:text-purple-500 transition-colors ${
                      darkMode ? "text-white" : "text-slate-800"
                    }`}>
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5 text-xs font-medium text-slate-400">
                      <span className="flex items-center gap-1">
                        <Building className="h-3 w-3" /> {exp.organization}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Narrative details */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {exp.description}
                  </p>

                  {/* Core Takeaways */}
                  <div className="space-y-2.5 border-t border-dashed border-purple-900/15 pt-5">
                    <h4 className="text-xs font-mono font-bold tracking-wider text-pink-500 uppercase mb-2">
                      Key Highlights:
                    </h4>
                    {exp.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-500" />
                        <span className={`text-xs ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <div className={`p-1.5 rounded-full border flex items-center justify-center ${
                    darkMode ? "bg-slate-950 border-purple-900/40 text-purple-400" : "bg-purple-50 border-purple-200 text-purple-600"
                  }`}>
                    <Sparkles className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
