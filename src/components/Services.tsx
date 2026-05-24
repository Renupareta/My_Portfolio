import { motion } from "motion/react";
import { Server, Layout, Sparkles, Smartphone, Code2, Monitor, Globe } from "lucide-react";

interface ServicesProps {
  darkMode: boolean;
}

export default function Services({ darkMode }: ServicesProps) {
  const servicesData = [
    {
      title: "Frontend Website Development",
      description: "Crafting highly aesthetic, robust, and accessible user interfaces using core JavaScript, native HTML5 templates, and React codebases.",
      icon: Code2,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      title: "Responsive Web Design",
      description: "Implementing structural web screens that resize correctly across mobile, tablet, and widescreen computers via Tailwind CSS layouts.",
      icon: Smartphone,
      color: "text-pink-500",
      bg: "bg-pink-500/10"
    },
    {
      title: "UI/UX Modeling & Design",
      description: "Architecting interactive wireframes and design mockups in Figma with user-centric micro-interactions and layout hierarchies.",
      icon: Sparkles,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "PHP Custom Web Applications",
      description: "Deploying secure, state-managed relational database systems using PHP and MySQL query statements with custom administration sections.",
      icon: Server,
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      title: "Portfolio Website Design",
      description: "Building modern personal portfolio websites with outstanding dark/light modes, scroll highlights, and resume modals to hook recruiters.",
      icon: Globe,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Landing Page Conversions",
      description: "Developing hyper-speed, single-scroll performance pages optimized with clear sections and call-to-actions (CTAs) for product marketing.",
      icon: Monitor,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    }
  ];

  return (
    <section id="services" className={`py-20 relative overflow-hidden ${
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
            <Layout className="h-3 w-3" />
            What I Offer
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-gradient pr-1"
          >
            Professional Design & Dev Solutions
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((svc, index) => {
            const IconComp = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`p-6 rounded-3xl border flex flex-col justify-between group hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-slate-900/40 border-purple-900/20 hover:border-purple-800"
                    : "bg-white border-purple-100 hover:border-purple-300"
                }`}
              >
                <div>
                  {/* Icon Block */}
                  <div className={`p-3 rounded-2xl w-fit mb-5 ${svc.bg} flex items-center justify-center`}>
                    <IconComp className={`h-6 w-6 ${svc.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>

                  <h3 className={`text-lg font-display font-bold mb-3 ${
                    darkMode ? "text-slate-100" : "text-slate-800"
                  }`}>
                    {svc.title}
                  </h3>

                  <p className={`text-xs leading-relaxed ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}>
                    {svc.description}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t border-dashed border-purple-900/10 flex justify-end text-xs font-mono font-semibold ${svc.color}`}>
                  Collaborative Design
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
