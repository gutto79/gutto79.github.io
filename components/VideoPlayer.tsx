import { useRef, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export const VideoPlayer = ({ src, className = "" }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      className={`w-full h-full object-contain ${className}`}
      preload="metadata"
      playsInline
      muted
    >
      <source src={src} type={`video/${src.split(".").pop()}`} />
      <p className="text-center text-gray-500 p-4">
        お使いのブラウザは動画をサポートしていません。
      </p>
    </video>
  );
};
