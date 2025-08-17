import { useContact } from "@/hooks/useContact";
import { contactLinks } from "@/data/contact";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { copied, handleCopyEmail } = useContact();

  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden text-white soccer-pitch-alt"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-12 scroll-animate ${
              titleVisible ? "scroll-visible" : "scroll-hidden from-up"
            }`}
          >
            <div className="relative inline-block mb-4">
              <span className="text-5xl mr-4">📬</span>
              <h2
                className="text-4xl font-bold text-white inline-block tracking-wide"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                CONTACT
              </h2>
            </div>
            <div
              className="w-[180px] h-1 mx-auto"
              style={{ background: "linear-gradient(90deg, #0066cc, #002d72)" }}
            ></div>
          </div>

          {/* Contact Cards */}
          <div
            ref={cardsRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {contactLinks.map((link, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-6 card-background rounded-lg hover-gamba transition-all duration-300 min-w-[320px] group scroll-animate ${
                  cardsVisible
                    ? `scroll-visible scroll-stagger-${index + 1}`
                    : "scroll-hidden from-right"
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{
                      background:
                        "linear-gradient(135deg, #0066cc 0%, #002d72 100%)",
                    }}
                  >
                    {link.name === "Email" ? (
                      <span className="text-2xl">✉️</span>
                    ) : (
                      <Image
                        src="/icons/git.svg"
                        alt="GitHub"
                        width={24}
                        height={24}
                        className="brightness-0 invert"
                      />
                    )}
                  </div>
                  <h4
                    className="font-semibold text-white text-lg"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.name}
                  </h4>
                </div>
                {link.type === "contact" ? (
                  <div className="flex items-center space-x-2">
                    <span
                      className="text-blue-200 break-all"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {link.value}
                    </span>
                    <button
                      onClick={() => handleCopyEmail(link.value)}
                      className="p-2 hover:bg-white/20 rounded transition-colors group/copy"
                      aria-label="Copy email address"
                    >
                      <Image
                        src={copied ? "/icons/check.svg" : "/icons/copy.svg"}
                        alt={copied ? "Check mark" : "Copy icon"}
                        width={20}
                        height={20}
                        className={`${
                          copied ? "text-green-400" : "text-blue-300"
                        } transition-colors brightness-0 invert group-hover/copy:scale-110`}
                      />
                    </button>
                  </div>
                ) : (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-200 hover:text-blue-100 transition-colors hover:scale-105 duration-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <span className="break-all">{link.value}</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
