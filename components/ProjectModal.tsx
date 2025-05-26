import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useProjectModal } from "@/hooks/useProjectModal";
import { slideVariants, slideTransition } from "@/utils/projectModal";
import type { Project } from "@/types/project";

type ProjectModalProps = {
  project: Project;
  isOpen?: boolean;
};

export const ProjectModal = ({ project, isOpen = true }: ProjectModalProps) => {
  const {
    currentImageIndex,
    direction,
    isAnimating,
    handlePreviousImage,
    handleNextImage,
    handleImageSelect,
    handleAnimationComplete,
  } = useProjectModal({ project, isOpen });

  return (
    <div className="flex h-full flex-col gap-8">
      {/* 画像スライダー */}
      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl bg-gray-50 shadow-lg">
        <AnimatePresence
          initial={false}
          custom={direction}
          onExitComplete={handleAnimationComplete}
        >
          {project.images[currentImageIndex] && (
            <motion.div
              key={currentImageIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
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
              <Image
                src="/icons/arrow-left.svg"
                alt="Previous"
                width={20}
                height={20}
                className="brightness-0"
              />
            </button>
            <button
              onClick={handleNextImage}
              disabled={isAnimating}
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 p-3 text-gray-800 shadow-lg transition-all ${
                isAnimating ? "opacity-50" : "hover:bg-white hover:scale-110"
              }`}
              aria-label="Next image"
            >
              <Image
                src="/icons/arrow-right.svg"
                alt="Next"
                width={20}
                height={20}
                className="brightness-0"
              />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageSelect(index)}
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

      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center pb-3 sm:pb-4 border-b-2 border-gray-100">
          {project.title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {project.description}
        </p>
      </div>

      {project.features && (
        <div className="bg-blue-50/50 rounded-xl p-4 sm:p-6 shadow-sm">
          <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Image
              src="/icons/sparkles.svg"
              alt="Features"
              width={24}
              height={24}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(95%) contrast(101%)",
              }}
            />
            主な機能
          </h3>
          <div className="flex flex-col gap-2 sm:gap-3">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-2 sm:gap-3 bg-white/50 rounded-lg p-2 sm:p-3 shadow-sm"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span className="text-sm sm:text-base text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.role && (
        <div className="bg-gray-50/50 rounded-xl p-4 sm:p-6 shadow-sm">
          <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Image
              src="/icons/users.svg"
              alt="Role"
              width={24}
              height={24}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(52%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(95%)",
              }}
            />
            担当
          </h3>
          <div className="flex flex-col gap-2 sm:gap-3">
            {project.role.map((role, index) => (
              <div
                key={index}
                className="flex items-start gap-2 sm:gap-3 bg-white/50 rounded-lg p-2 sm:p-3 shadow-sm"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                <span className="text-sm sm:text-base text-gray-700">
                  {role}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.considerations && (
        <div className="bg-green-50/50 rounded-xl p-4 sm:p-6 shadow-sm">
          <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Image
              src="/icons/sparkles.svg"
              alt="Considerations"
              width={24}
              height={24}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)",
              }}
            />
            工夫点・意識した点
          </h3>
          <div className="flex flex-col gap-2 sm:gap-3">
            {project.considerations.map((consideration, index) => (
              <div
                key={index}
                className="flex items-start gap-2 sm:gap-3 bg-white/50 rounded-lg p-2 sm:p-3 shadow-sm"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2 bg-green-500 rounded-full flex-shrink-0"></span>
                <span className="text-sm sm:text-base text-gray-700">
                  {consideration}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-blue-50/50 rounded-xl p-4 sm:p-6 shadow-sm">
          <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Image
              src="/icons/code.svg"
              alt="Technologies"
              width={24}
              height={24}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(95%) contrast(101%)",
              }}
            />
            技術スタック
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-white/80 text-blue-700 rounded-lg border border-blue-300 shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-50/50 rounded-xl p-4 sm:p-6 shadow-sm">
          <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Image
              src="/icons/calendar.svg"
              alt="Period"
              width={24}
              height={24}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(52%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(95%)",
              }}
            />
            期間
          </h3>
          <p className="text-sm sm:text-base text-gray-700 bg-white/80 rounded-lg p-2 sm:p-3 shadow-sm">
            {project.period}
          </p>
        </div>
      </div>
    </div>
  );
};
