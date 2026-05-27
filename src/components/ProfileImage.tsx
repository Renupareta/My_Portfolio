import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { User, Sparkles } from "lucide-react";
import userUploadedPhoto from "../assets/images/profile_photo_1779464823301.png";

interface ProfileImageProps {
  darkMode: boolean;
  className?: string; // Additional classes for custom sizing/margins
  sizeClasses?: string; // Standardized square size classes like "w-36 h-36"
  customSrc?: any; // Optional custom image source (string or StaticImageData)
}

export default function ProfileImage({
  darkMode,
  className = "",
  sizeClasses = "w-36 h-36 sm:w-40 sm:h-40",
  customSrc
}: ProfileImageProps) {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasFailedAll, setHasFailedAll] = useState(false);

  // Helper to resolve string path from either plain string or Next.js static asset object structure
  const getSrcString = (src: any): string => {
    if (!src) return "";
    if (typeof src === "object") {
      if (src.src) return src.src;
      if (src.default) {
        if (typeof src.default === "object" && src.default.src) {
          return src.default.src;
        }
        return String(src.default);
      }
    }
    return String(src);
  };

  // Dynamically resolve base URL path prefix on client-side (important for GitHub Pages vs. Vercel)
  const getBasePath = (): string => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      if (pathname.includes("/My_Portfolio")) {
        return "/My_Portfolio/";
      }
    }
    return "/";
  };

  const baseUrl = getBasePath();
  const cleanCustomSrc = getSrcString(customSrc);

  // List of standard simple paths to look for the user's uploaded real photo
  const imageSources = [
    ...(cleanCustomSrc ? [cleanCustomSrc] : []),
    getSrcString(userUploadedPhoto),
    // Public directory path fallbacks (auto-copied in next.config.mjs build prepping step)
    `${baseUrl}assets/images/profile_photo_1779464823301.png`,
    `${baseUrl}profile_photo_1779464823301.png`,
    `${baseUrl}assets/images/regenerated_image_1779601885581.jpg`,
    `${baseUrl}regenerated_image_1779601885581.jpg`,
    `${baseUrl}assets/images/regenerated_image_1779601887655.jpg`,
    `${baseUrl}regenerated_image_1779601887655.jpg`,
    `${baseUrl}profile.jpg`,
    `${baseUrl}profile.png`,
    `${baseUrl}profile.jpeg`
  ].filter(Boolean);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setHasFailedAll(false);
  };

  const handleImageError = () => {
    if (currentSrcIndex < imageSources.length - 1) {
      setCurrentSrcIndex((prev) => prev + 1);
    } else {
      setHasFailedAll(true);
    }
  };

  // Reset states if sources change (unlikely, but good practice)
  useEffect(() => {
    setImageLoaded(false);
    setHasFailedAll(false);
    setCurrentSrcIndex(0);
  }, []);

  return (
    <div className={`relative inline-block ${className} group`}>
      {/* 1. Soft Dynamic Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-500 rounded-full blur-xl opacity-35 group-hover:opacity-65 transition-opacity duration-500" />

      {/* 2. Gradient Border Container with Hover scale animation */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative ${sizeClasses} rounded-full p-1 bg-gradient-to-tr from-purple-600 via-pink-400 to-blue-500 shadow-2xl overflow-hidden cursor-pointer`}
      >
        {/* Dynamic Image / Elegant SVG Switch */}
        {!hasFailedAll ? (
          <img
            src={imageSources[currentSrcIndex]}
            alt="Renu Pareta"
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover rounded-full transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-1 absolute"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : null}

        {/* Beautiful, Minimal, Elegant Vector Avatar Placeholder (Neutral & Professional Style) */}
        {(!imageLoaded || hasFailedAll) && (
          <div className="w-full h-full rounded-full overflow-hidden select-none">
            <svg
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full transition-all duration-300"
            >
              <defs>
                <linearGradient id="bgGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e1b4b" /> {/* deep purple-950 */}
                  <stop offset="100%" stopColor="#020617" /> {/* dark slate-950 */}
                </linearGradient>
                <linearGradient id="bgGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#faf5ff" /> {/* soft purple-50 */}
                  <stop offset="100%" stopColor="#f0f9ff" /> {/* light sky-50 */}
                </linearGradient>
                <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" /> {/* purple-500 */}
                  <stop offset="50%" stopColor="#ec4899" /> {/* pink-500 */}
                  <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
                </linearGradient>
                <linearGradient id="avatarGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" /> {/* violet-600 */}
                  <stop offset="100%" stopColor="#4f46e5" /> {/* indigo-600 */}
                </linearGradient>
                <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feOffset dx="0" dy="5" />
                  <feGaussianBlur stdDeviation="5" result="offset-blur" />
                  <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                  <feFlood floodColor="black" floodOpacity="0.4" result="color" />
                  <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                  <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                </filter>
              </defs>

              {/* Background with responsive matching theme gradients */}
              <circle
                cx="256"
                cy="256"
                r="256"
                fill={`url(${darkMode ? "#bgGradDark" : "#bgGradLight"})`}
              />

              {/* Subtle Elegant Geometric Line Details */}
              <circle
                cx="256"
                cy="256"
                r="240"
                stroke={darkMode ? "rgba(168, 85, 247, 0.08)" : "rgba(124, 58, 237, 0.05)"}
                strokeWidth="1.5"
                strokeDasharray="8 6"
              />
              <circle
                cx="256"
                cy="256"
                r="200"
                stroke={darkMode ? "rgba(236, 72, 153, 0.06)" : "rgba(79, 70, 229, 0.03)"}
                strokeWidth="1.5"
              />

              {/* Grid dots overlay for a refined engineering aesthetic */}
              <g opacity={darkMode ? "0.15" : "0.08"}>
                <circle cx="150" cy="150" r="1.5" fill={darkMode ? "#ec4899" : "#4f46e5"} />
                <circle cx="200" cy="150" r="1.5" fill={darkMode ? "#ec4899" : "#4f46e5"} />
                <circle cx="256" cy="150" r="1.5" fill={darkMode ? "#ec4899" : "#4f46e5"} />
                <circle cx="312" cy="150" r="1.5" fill={darkMode ? "#ec4899" : "#4f46e5"} />
                <circle cx="362" cy="150" r="1.5" fill={darkMode ? "#ec4899" : "#4f46e5"} />
                
                <circle cx="150" cy="200" r="1.5" fill={darkMode ? "#ec4899" : "#4f46e5"} />
                <circle cx="362" cy="200" r="1.5" fill={darkMode ? "#ec4899" : "#4f46e5"} />

                <circle cx="150" cy="256" r="1.5" fill={darkMode ? "#ec4899" : "#4f46e5"} />
                <circle cx="362" cy="256" r="1.5" fill={darkMode ? "#ec4899" : "#4f46e5"} />
              </g>

              {/* Minimalist, Clean Silhouette of Head and Shoulders */}
              <g filter="url(#innerShadow)">
                {/* Shoulders / Body contour */}
                <path
                  d="M140 405C140 335 192 295 256 295C320 295 372 335 372 405C372 435 365 460 350 480H162C147 460 140 435 140 405Z"
                  fill={`url(${darkMode ? "#avatarGrad" : "#avatarGradLight"})`}
                  opacity="0.9"
                />
                
                {/* Head circle portrait contour */}
                <circle
                  cx="256"
                  cy="195"
                  r="62"
                  fill={`url(${darkMode ? "#avatarGrad" : "#avatarGradLight"})`}
                />
              </g>

              {/* Technical / Designer Center Cutouts to form an elegant clean collar outline */}
              <path
                d="M236 295 C236 295 256 315 276 295"
                stroke={darkMode ? "#020617" : "#faf5ff"}
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>
        )}
      </motion.div>
    </div>
  );
}
