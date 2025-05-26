import { useState, useEffect } from "react";

type UseImageSliderProps = {
  images: string[];
  isOpen?: boolean;
};

type UseImageSliderReturn = {
  currentImageIndex: number;
  direction: number;
  isAnimating: boolean;
  handlePreviousImage: () => void;
  handleNextImage: () => void;
  handleImageSelect: (index: number) => void;
  handleAnimationComplete: () => void;
};

export const useImageSlider = ({
  images,
  isOpen = true,
}: UseImageSliderProps): UseImageSliderReturn => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setCurrentImageIndex(0);
      setDirection(0);
      setIsAnimating(false);
    }
  }, [images, isOpen]);

  const handlePreviousImage = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
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
