"use client";

const LoadingScreen = ({ isExiting }: { isExiting?: boolean }) => {
  return (
    <div className={`fixed inset-0 w-screen h-screen z-50 flex items-center justify-center transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`} style={{ background: "linear-gradient(135deg, #002d72 0%, #001a4d 100%)" }}>
      <div className="flex flex-col items-center">
        <div className="soccer-ball-container">
          <span className="text-8xl animate-roll inline-block" style={{ transform: "translateX(-100px)" }}>⚽</span>
        </div>
        <p className="mt-8 text-2xl font-bold text-blue-200 animate-pulse">
          Loading...
        </p>
      </div>
      <style jsx>{`
        @keyframes roll {
          from {
            transform: translateX(-100px) rotate(0deg);
          }
          to {
            transform: translateX(100px) rotate(720deg);
          }
        }
        
        .animate-roll {
          animation: roll 2s ease-in-out infinite alternate;
        }
        
        .soccer-ball-container {
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;