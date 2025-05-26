import Image from "next/image";
import { scrollToSection } from "@/utils/scroll";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-2xl">
                Genki Kimura
              </span>
            </h1>
            <div className="text-3xl md:text-5xl font-bold tracking-wider">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-2xl">
                Portfolio
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => scrollToSection("PROFILE")}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <span className="flex items-center justify-center gap-2">
                About Me
                <Image
                  src="/icons/arrow-right.svg"
                  alt="Arrow right"
                  width={16}
                  height={16}
                  className="group-hover:translate-x-1 transition-transform brightness-0 invert"
                />
              </span>
            </button>
            <button
              onClick={() => scrollToSection("WORKS")}
              className="group px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-400/25"
            >
              <span className="flex items-center justify-center gap-2">
                View Works
                <Image
                  src="/icons/arrow-right.svg"
                  alt="Arrow right"
                  width={16}
                  height={16}
                  className="group-hover:translate-x-1 transition-transform group-hover:brightness-0 group-hover:invert"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(95%) contrast(101%)",
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 uppercase tracking-wider">
            Scroll
          </span>
          <Image
            src="/icons/arrow-down.svg"
            alt="Scroll down"
            width={24}
            height={24}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(95%) contrast(101%)",
            }}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </section>
  );
};

export default Hero;
