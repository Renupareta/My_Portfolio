import React from "react";
import { motion } from "motion/react";

interface ProfileImageProps {
  darkMode: boolean;
  className?: string;
  sizeClasses?: string;
  customSrc?: string;
}

export default function ProfileImage({
  darkMode,
  className = "",
  sizeClasses = "w-40 h-40 sm:w-48 sm:h-48",
  customSrc = "/profile.jpg",
}: ProfileImageProps) {
  return (
    <div className={`relative inline-block ${className} group`}>
      
      {/* Glow Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 blur-2xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

      {/* Main Profile Container */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative ${sizeClasses} rounded-full p-[4px] bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 shadow-2xl`}
      >
        
        {/* Image Wrapper */}
        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900">
          <img
            src={customSrc || "/profile.jpg"}
            alt="Renu Pareta"
            className="w-full h-full object-cover rounded-full block"
            draggable={false}
          />
        </div>
      </motion.div>
    </div>
  );
}