import { useState, useEffect } from "react";
import { useScrollLock } from "@/hooks/useScrollLock";
import type {
  UseProjectModalProps,
  UseProjectModalReturn,
} from "@/types/project";

export const useProjectModal = ({
  project,
  isOpen = true,
}: UseProjectModalProps): UseProjectModalReturn => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useScrollLock(isOpen);

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

  const handleImageSelect = (index: number) => {
    if (isAnimating) return;
    setDirection(index > currentImageIndex ? 1 : -1);
    setIsAnimating(true);
    setCurrentImageIndex(index);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  return {
    currentImageIndex,
    direction,
    isAnimating,
    handlePreviousImage,
    handleNextImage,
    handleImageSelect,
    handleAnimationComplete,
  };
};
