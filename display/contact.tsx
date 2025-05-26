import BackgroundDecorations from "@/components/BackgroundDecorations";
import { useContact } from "@/hooks/useContact";
import { contactLinks } from "@/data/contact";
import Image from "next/image";

const Contact = () => {
  const { copied, handleCopyEmail } = useContact();

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden"
    >
      <BackgroundDecorations />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-4">
              <Image
                src="/icons/connect.svg"
                alt="Connect icon"
                width={48}
                height={48}
                className="absolute left-[-70px] top-1/2 transform -translate-y-1/2"
              />
              <h2 className="text-4xl font-bold text-gray-800 pb-2 border-b-4 border-blue-600 inline-block tracking-wide">
                Connect
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {contactLinks.map((link, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow min-w-[320px]"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center">
                    {link.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800">{link.name}</h4>
                </div>
                {link.type === "contact" ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600 break-all">
                      {link.value}
                    </span>
                    <button
                      onClick={() => handleCopyEmail(link.value)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      aria-label="Copy email address"
                    >
                      <Image
                        src={copied ? "/icons/check.svg" : "/icons/copy.svg"}
                        alt={copied ? "Check mark" : "Copy icon"}
                        width={20}
                        height={20}
                        className={`${
                          copied ? "text-green-500" : "text-gray-900"
                        } transition-colors`}
                      />
                    </button>
                  </div>
                ) : (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
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
