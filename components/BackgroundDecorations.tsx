"use client";

interface BackgroundDecorationsProps {
  className?: string;
}

const BackgroundDecorations = ({
  className = "",
}: BackgroundDecorationsProps) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* 大きな背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-[700px] h-[700px] bg-cyan-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[550px] h-[550px] bg-sky-500/7 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default BackgroundDecorations;
