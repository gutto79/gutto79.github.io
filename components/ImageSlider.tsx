import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useImageSlider } from "@/hooks/useImageSlider";
import { slideVariants, slideTransition } from "@/utils/slider";

type ImageSliderProps = {
  images: string[];
  title: string;
  isOpen?: boolean;
  className?: string;
};

export const ImageSlider = ({
  images,
  title,
  isOpen = true,
  className = "",
}: ImageSliderProps) => {
  const {
    currentImageIndex,
    direction,
    isAnimating,
    handlePreviousImage,
    handleNextImage,
    handleImageSelect,
    handleAnimationComplete,
  } = useImageSlider({ images, isOpen });

  if (images.length === 0) {
    return (
      <div
        className={`relative h-[250px] sm:h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl bg-gray-50 shadow-lg ${className}`}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-gray-400 text-sm">No Image</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative h-[250px] sm:h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl bg-gray-50 shadow-lg ${className}`}
    >
      <AnimatePresence
        initial={false}
        custom={direction}
        onExitComplete={handleAnimationComplete}
      >
        {images[currentImageIndex] && (
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
                src={images[currentImageIndex]}
                alt={`${title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {images.length > 1 && (
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
            {images.map((_, index) => (
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
  );
};
