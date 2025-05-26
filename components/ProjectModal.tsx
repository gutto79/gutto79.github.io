import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollLock } from "@/hooks/useScrollLock";

type ProjectModalProps = {
  project: {
    title: string;
    description: string;
    features?: string[];
    role?: string[];
    considerations?: string[];
    challenges?: string[];
    learnings?: string[];
    technologies: string[];
    images: string[];
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
    <div className="flex h-full flex-col gap-8">
      {/* 画像スライダー */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-gray-50 shadow-lg">
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
                  className="object-contain p-4"
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
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 p-3 text-gray-800 shadow-lg transition-all ${
                isAnimating ? "opacity-50" : "hover:bg-white hover:scale-110"
              }`}
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
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
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 p-3 text-gray-800 shadow-lg transition-all ${
                isAnimating ? "opacity-50" : "hover:bg-white hover:scale-110"
              }`}
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? "bg-blue-600 scale-125"
                      : isAnimating
                      ? "bg-gray-200"
                      : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* タイトルと説明 */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center pb-4 border-b-2 border-gray-100">
          {project.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">{project.description}</p>
      </div>

      {/* 機能 */}
      {project.features && (
        <div className="bg-blue-50/50 rounded-xl p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold text-gray-800 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
            主な機能
          </h3>
          <div className="flex flex-col gap-3">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/50 rounded-lg p-3 shadow-sm"
              >
                <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 役割 */}
      {project.role && (
        <div className="bg-gray-50/50 rounded-xl p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold text-gray-800 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            担当
          </h3>
          <div className="flex flex-col gap-3">
            {project.role.map((role, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/50 rounded-lg p-3 shadow-sm"
              >
                <span className="w-2 h-2 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span className="text-gray-700">{role}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 工夫・意識した点 */}
      {project.considerations && (
        <div className="bg-green-50/50 rounded-xl p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold text-gray-800 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
            工夫点・意識した点
          </h3>
          <div className="flex flex-col gap-3">
            {project.considerations.map((consideration, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/50 rounded-lg p-3 shadow-sm"
              >
                <span className="w-2 h-2 mt-2 bg-green-500 rounded-full flex-shrink-0"></span>
                <span className="text-gray-700">{consideration}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 技術スタックと期間 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50/50 rounded-xl p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold text-gray-800 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            技術スタック
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm bg-white/80 text-blue-700 rounded-lg border-2 border-blue-300 shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-50/50 rounded-xl p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold text-gray-800 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            期間
          </h3>
          <p className="text-gray-700 bg-white/80 rounded-lg p-3 shadow-sm">
            {project.period}
          </p>
        </div>
      </div>
    </div>
  );
};
