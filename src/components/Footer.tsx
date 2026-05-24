import { ArrowUp, Sparkles } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className={`py-8 border-t transition-colors duration-300 ${
        darkMode ? "bg-slate-950 border-purple-900/20 text-slate-400" : "bg-white border-purple-100 text-slate-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Credit section */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
            <Sparkles className="h-3.5 w-3.5 text-pink-500 animate-pulse" />
            <span className={darkMode ? "text-slate-300" : "text-slate-800"}>
              Designed & Developed by <span className="font-semibold text-purple-500 font-display">Renu Pareta</span>
            </span>
          </div>

          {/* Copyright section */}
          <div className="text-[11px] font-mono tracking-wide">
            © {year} Kota, Rajasthan, India. All Rights Reserved.
          </div>

          {/* Scroll to Top Circle button */}
          <button
            id="scroll-to-top-btn"
            onClick={handleScrollToTop}
            className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center hover:scale-110 pointer ${
              darkMode
                ? "bg-slate-900 border-purple-900/40 text-purple-400 hover:text-white hover:border-purple-600"
                : "bg-purple-50 border-purple-200 text-purple-600 hover:bg-purple-100 hover:border-purple-300"
            }`}
            title="Scroll to Top"
            aria-label="Scroll to top of the page"
          >
            <ArrowUp className="h-4 w-4" />
          </button>

        </div>
      </div>
    </footer>
  );
}
