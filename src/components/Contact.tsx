import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Send, Linkedin, Github, Instagram, MapPin, CheckCircle, AlertCircle, Sparkles } from "lucide-react";

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    setIsSubmitting(true);
    // Simulate API pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }, 1800);
  };

  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/renupareta", icon: Linkedin, color: "hover:text-blue-500 hover:bg-blue-500/10" },
    { label: "GitHub", href: "https://github.com/Renupareta", icon: Github, color: "hover:text-purple-400 hover:bg-purple-500/10" },
    { label: "Email", href: "mailto:renupareta20@gmail.com", icon: Mail, color: "hover:text-pink-500 hover:bg-pink-500/10" },
    { label: "Instagram", href: "https://instagram.com", icon: Instagram, color: "hover:text-rose-500 hover:bg-rose-500/10" }
  ];

  return (
    <section id="contact" className={`py-20 relative overflow-hidden ${
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
            <Mail className="h-3 w-3" />
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-gradient pr-1"
          >
            Connect With Me Today!
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Form + details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Details side block */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className={`text-xl font-display font-bold ${darkMode ? "text-white" : "text-slate-800"}`}>
                Let's Build Something Impactful
              </h3>
              
              <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                Interested in recruiting, consulting, or offering technical collaborative projects? 
                I manage live client queries and corporate operations at OPPO alongside my BCA semesters, 
                proving high-capacity project management and rapid adaptation.
              </p>

              {/* Contact item stats */}
              <div className="space-y-4 pt-4">
                <div className={`p-4 rounded-2xl flex items-center gap-4 border ${
                  darkMode ? "bg-slate-900/40 border-purple-900/10" : "bg-white border-purple-100"
                }`}>
                  <span className="p-3 rounded-xl bg-purple-500/10 text-purple-500 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Primary Base</span>
                    <span className={`text-sm font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>Kota, Rajasthan, India</span>
                  </div>
                </div>

                <div className={`p-4 rounded-2xl flex items-center gap-4 border ${
                  darkMode ? "bg-slate-900/40 border-purple-900/10" : "bg-white border-purple-100"
                }`}>
                  <span className="p-3 rounded-xl bg-pink-500/10 text-pink-500 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Email Inbox</span>
                    <a href="mailto:renupareta20@gmail.com" className="text-sm font-semibold text-purple-500 hover:underline">
                      renupareta20@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social linkages */}
            <div className="space-y-3 pt-6 border-t border-dashed border-purple-900/10">
              <span className={`text-[11px] font-mono font-bold tracking-wider uppercase ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}>
                FIND ME ACROSS DIGITAL NETWORKS:
              </span>
              <div className="flex gap-2.5">
                {socialLinks.map((soc) => {
                  const SvgComp = soc.icon;
                  return (
                    <a
                      key={soc.label}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-center pointer ${soc.color} ${
                        darkMode ? "bg-slate-900/70 border-purple-900/20 text-slate-400" : "bg-white border-purple-100 text-slate-600"
                      }`}
                      title={soc.label}
                    >
                      <SvgComp className="h-4.5 w-4.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form container side block */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden backdrop-blur-sm ${
              darkMode ? "bg-slate-900/40 border-purple-900/30" : "bg-white border-purple-100"
            }`}>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className={`text-xs font-mono font-bold uppercase tracking-wider ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}>
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${
                      darkMode ? "bg-slate-950 border-purple-900/40 text-white" : "bg-purple-50/50 border-purple-100 text-slate-800"
                    }`}
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className={`text-xs font-mono font-bold uppercase tracking-wider ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}>
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${
                      darkMode ? "bg-slate-950 border-purple-900/40 text-white" : "bg-purple-50/50 border-purple-100 text-slate-800"
                    }`}
                    placeholder="name@example.com"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className={`text-xs font-mono font-bold uppercase tracking-wider ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}>
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none ${
                      darkMode ? "bg-slate-950 border-purple-900/40 text-white" : "bg-purple-50/50 border-purple-100 text-slate-800"
                    }`}
                    placeholder="What are you building?"
                  />
                </div>

                {/* Control Feedback line */}
                <AnimatePresence mode="wait">
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3.5 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500 text-xs font-medium flex items-center gap-2"
                    >
                      <CheckCircle className="h-4.5 w-4.5 text-green-500" />
                      <span>Thank you, Renu will receive your message soon!</span>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-medium flex items-center gap-2"
                    >
                      <AlertCircle className="h-4.5 w-4.5 text-red-500" />
                      <span>All input fields are required before sending message.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Button Submit */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-sm hover:translate-y-[-1px] active:translate-y-[1px] hover:shadow-lg disabled:opacity-50 transition-all flex items-center justify-center gap-2 pointer`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
