import { useState, useEffect } from "react";
import { motion } from "motion/react";
import userUploadedPhoto from "../assets/images/profile_photo_1779464823301.png";

interface ProfileImageProps {
  darkMode: boolean;
  className?: string;
  sizeClasses?: string;
  customSrc?: string | { src?: string };
}

export default function ProfileImage({
  darkMode,
  className = "",
  sizeClasses = "w-36 h-36 sm:w-40 sm:h-40",
  customSrc,
}: ProfileImageProps) {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasFailedAll, setHasFailedAll] = useState(false);

  const getSrcString = (src: any): string => {
    if (!src) return "";
    if (typeof src === "string") return src;
    if (typeof src === "object" && src.src) return src.src;
    return "";
  };

  const cleanCustomSrc = getSrcString(customSrc);
  const fallbackSrc = getSrcString(userUploadedPhoto);

  const imageSources = [cleanCustomSrc, fallbackSrc, "/profile.jpg", "/profile.png"].filter(
    Boolean
  );

  useEffect(() => {
    setCurrentSrcIndex(0);
    setImageLoaded(false);
    setHasFailedAll(false);
  }, [cleanCustomSrc]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setHasFailedAll(false);
  };

  const handleImageError = () => {
    setImageLoaded(false);

    if (currentSrcIndex < imageSources.length - 1) {
      setCurrentSrcIndex((prev) => prev + 1);
    } else {
      setHasFailedAll(true);
    }
  };

  return (
    <div className={`relative inline-block ${className} group`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-500 rounded-full blur-xl opacity-35 group-hover:opacity-65 transition-opacity duration-500" />

      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative ${sizeClasses} rounded-full p-1 bg-gradient-to-tr from-purple-600 via-pink-400 to-blue-500 shadow-2xl overflow-hidden cursor-pointer`}
      >
        {!hasFailedAll && imageSources[currentSrcIndex] && (
          <img
            src={imageSources[currentSrcIndex]}
            alt="Renu Pareta"
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover rounded-full transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}

        {(!imageLoaded || hasFailedAll) && (
          <div
            className={`absolute inset-1 rounded-full flex items-center justify-center ${
              darkMode ? "bg-slate-950" : "bg-purple-50"
            }`}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-pink-400 to-blue-500 opacity-80" />
          </div>
        )}
      </motion.div>
    </div>
  );
}