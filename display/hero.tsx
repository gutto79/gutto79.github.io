import Image from "next/image";
import { scrollToSection } from "@/utils/scroll";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { elementRef: buttonsRef, isVisible: buttonsVisible } =
    useScrollAnimation({
      threshold: 0.1,
      triggerOnce: false,
    });

  return (
    <section className="h-[calc(100vh-64px)] flex items-center justify-center text-white relative overflow-hidden soccer-pitch-alt">
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0">
        {/* Floating Soccer Balls */}
        <div className="absolute top-20 left-20">
          <span className="soccer-ball-float text-4xl opacity-30">⚽</span>
        </div>
        <div className="absolute top-40 right-32">
          <span
            className="soccer-ball-bounce text-3xl opacity-25"
            style={{ "--delay": "0.5s" } as React.CSSProperties}
          >
            ⚽
          </span>
        </div>
        <div className="absolute bottom-32 left-40">
          <span className="rotate-scale text-5xl opacity-20">⚽</span>
        </div>
        <div className="absolute bottom-20 right-20">
          <span
            className="pulse-animation text-4xl opacity-30"
            style={{ "--delay": "1s" } as React.CSSProperties}
          >
            ⚽
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Title with Gamba Style */}
          <div
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={`mb-8 scroll-animate-scale ${
              titleVisible ? "scroll-visible" : "scroll-hidden from-scale"
            }`}
          >
            <h1
              className="text-4xl md:text-6xl font-bold tracking-wider text-white mb-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              GENKI KIMURA
            </h1>
            <h2
              className="text-2xl md:text-4xl text-blue-200 font-medium"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              Portfolio
            </h2>
          </div>

          {/* CTA Buttons with Soccer Theme */}
          <div
            ref={buttonsRef as React.RefObject<HTMLDivElement>}
            className={`flex flex-col sm:flex-row gap-6 justify-center scroll-animate ${
              buttonsVisible
                ? "scroll-visible scroll-stagger-1"
                : "scroll-hidden from-down"
            }`}
          >
            <button
              onClick={() => scrollToSection("profile")}
              className="group px-8 py-4 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover-gamba"
              style={{
                background: "linear-gradient(135deg, #0066cc 0%, #002d72 100%)",
                fontFamily: "Inter, sans-serif",
                animation: "kickoffFade 2s ease-out 1s both",
              }}
            >
              <span className="flex items-center justify-center gap-2">
                About Me <span className="soccer-ball"></span>
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
              onClick={() => scrollToSection("works")}
              className="group px-8 py-4 border-2 border-blue-300 text-blue-300 rounded-xl font-bold hover:bg-blue-300 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{
                fontFamily: "Inter, sans-serif",
                animation: "kickoffFade 2s ease-out 1.2s both",
              }}
            >
              <span className="flex items-center justify-center gap-2">
                VIEW WORKS
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-xs text-blue-200 uppercase tracking-wider font-semibold"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            SCROLL
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

      {/* Bottom Border Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </section>
  );
};

export default Hero;
