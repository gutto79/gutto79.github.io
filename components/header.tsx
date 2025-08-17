import { useState, useEffect } from "react";
import { scrollToSection } from "@/utils/scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 backdrop-blur-md border-b border-gray-700/50 z-50 transition-transform duration-700 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
      }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white flex items-center gap-2">
            <span style={{ fontFamily: "Inter, sans-serif" }}>
              Genki Kimura Portfolio
            </span>
          </div>

          <div
            className="hidden md:flex space-x-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <button
              onClick={() => scrollToSection("profile")}
              className="text-gray-300 hover:text-white transition-colors font-semibold hover:scale-105 duration-300"
            >
              PROFILE
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-white transition-colors font-semibold hover:scale-105 duration-300"
            >
              SKILLS
            </button>
            <button
              onClick={() => scrollToSection("works")}
              className="text-gray-300 hover:text-white transition-colors font-semibold hover:scale-105 duration-300"
            >
              WORKS
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-white transition-colors font-semibold hover:scale-105 duration-300"
            >
              CONTACT
            </button>
          </div>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 mt-1 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 mt-1 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div
            className="md:hidden mt-4 py-4 border-t border-gray-700/50"
            style={{ animation: "fadeInDown 0.3s ease-out" }}
          >
            <div
              className="flex flex-col space-y-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <button
                onClick={() => handleScroll("profile")}
                className="text-gray-300 hover:text-white transition-colors text-right font-semibold"
              >
                PROFILE
              </button>
              <button
                onClick={() => handleScroll("skills")}
                className="text-gray-300 hover:text-white transition-colors text-right font-semibold"
              >
                SKILLS
              </button>
              <button
                onClick={() => handleScroll("works")}
                className="text-gray-300 hover:text-white transition-colors text-right font-semibold"
              >
                WORKS
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="text-gray-300 hover:text-white transition-colors text-right font-semibold"
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
