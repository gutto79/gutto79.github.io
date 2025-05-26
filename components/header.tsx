import { useState } from "react";
import { scrollToSection } from "@/utils/scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-blue-500/20 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Portfolio
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("profile")}
              className="text-gray-300 hover:text-blue-400 transition-colors font-semibold"
            >
              Profile
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-blue-400 transition-colors font-semibold"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("works")}
              className="text-gray-300 hover:text-blue-400 transition-colors font-semibold"
            >
              Works
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-blue-400 transition-colors font-semibold"
            >
              Connect
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
          <div className="md:hidden mt-4 py-4 border-t border-blue-500/20">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleScroll("profile")}
                className="text-gray-300 hover:text-blue-400 transition-colors text-right font-semibold"
              >
                Profile
              </button>
              <button
                onClick={() => handleScroll("skills")}
                className="text-gray-300 hover:text-blue-400 transition-colors text-right font-semibold"
              >
                Skills
              </button>
              <button
                onClick={() => handleScroll("works")}
                className="text-gray-300 hover:text-blue-400 transition-colors text-right font-semibold"
              >
                Works
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="text-gray-300 hover:text-blue-400 transition-colors text-right font-semibold"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
