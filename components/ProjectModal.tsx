import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollLock } from "@/hooks/useScrollLock";

type ProjectModalProps = {
  project: {
    title: string;
    description: string;
    images: string[];
    technologies: string[];
    role?: string;
    period: string;
  };
  isOpen?: boolean;
};

export const ProjectModal = ({ project, isOpen = true }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useScrollLock(isOpen);

  // Reset state when project changes or modal is closed
  useEffect(() => {
    if (!isOpen) {
      setCurrentImageIndex(0);
      setDirection(0);
      setIsAnimating(false);
    }
  }, [project, isOpen]);

  const handlePreviousImage = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="relative h-96 w-full overflow-hidden rounded-lg">
        <AnimatePresence
          initial={false}
          custom={direction}
          onExitComplete={() => setIsAnimating(false)}
        >
          {project.images[currentImageIndex] && (
            <motion.div
              key={currentImageIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
              style={{ width: "100%", height: "100%" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {project.images.length > 1 && (
          <>
            <button
              onClick={handlePreviousImage}
              disabled={isAnimating}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 p-2 text-white transition-colors ${
                isAnimating ? "opacity-50" : "hover:bg-black/70"
              }`}
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={handleNextImage}
              disabled={isAnimating}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 p-2 text-white transition-colors ${
                isAnimating ? "opacity-50" : "hover:bg-black/70"
              }`}
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setDirection(index > currentImageIndex ? 1 : -1);
                    setIsAnimating(true);
                    setCurrentImageIndex(index);
                  }}
                  disabled={isAnimating}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex
                      ? "bg-black"
                      : isAnimating
                      ? "bg-black/10"
                      : "bg-black/20 hover:bg-black/40"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <h2 className="text-2xl font-bold text-gray-800 text-center">
        {project.title}
      </h2>

      <div>
        <h3 className="mb-2 text-lg font-semibold text-gray-700">概要</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>

      {/* 役割 */}
      {project.role && (
        <div>
          <h3 className="mb-2 text-lg font-semibold text-gray-700">役割</h3>
          <p className="text-gray-600">{project.role}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-gray-700">
            技術スタック
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-700 rounded border border-blue-200/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-gray-700">期間</h3>
          <p className="text-gray-600">{project.period}</p>
        </div>
      </div>
    </div>
  );
};
