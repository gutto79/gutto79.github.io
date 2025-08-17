import { ProjectModal } from "@/display/ProjectModal";
import { PopUp } from "@/components/PopUp";
import Image from "next/image";
import { tagLabels } from "@/types/project";
import { projects } from "@/data/projects";
import { useWorks } from "@/hooks/useWorks";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Works = () => {
  const { selectedProject, isOpen, handleProjectClick, handleCloseModal } =
    useWorks();

  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { elementRef: forwardRef, isVisible: forwardVisible } =
    useScrollAnimation({
      threshold: 0.1,
      triggerOnce: false,
    });
  const { elementRef: midfieldRef, isVisible: midfieldVisible } =
    useScrollAnimation({
      threshold: 0.1,
      triggerOnce: false,
    });

  return (
    <section
      id="works"
      className="py-20 relative overflow-hidden text-white soccer-pitch-alt"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-12 scroll-animate-scale ${
              titleVisible ? "scroll-visible" : "scroll-hidden from-scale"
            }`}
          >
            <div className="relative inline-block mb-4">
              <span className="text-5xl mr-4">🏆</span>
              <h2
                className="text-4xl font-bold text-white inline-block"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                WORKS
              </h2>
            </div>
            <div
              className="w-[160px] h-1 mx-auto"
              style={{ background: "linear-gradient(90deg, #0066cc, #002d72)" }}
            ></div>
          </div>

          {/* 4-3-3 Formation Layout */}
          <div className="space-y-16">
            {/* Forward Line (3 projects) */}
            <div
              ref={forwardRef as React.RefObject<HTMLDivElement>}
              className={`text-center scroll-animate ${
                forwardVisible
                  ? "scroll-visible scroll-stagger-1"
                  : "scroll-hidden from-down"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {projects.slice(0, 3).map((project, index) => (
                  <div
                    key={project.id}
                    className={`card-background rounded-lg border-2 border-blue-400 shadow-lg hover-gamba transition-all duration-300 overflow-hidden group scroll-animate ${
                      forwardVisible
                        ? `scroll-visible scroll-stagger-${index + 2}`
                        : "scroll-hidden from-down"
                    }`}
                  >
                    <div className="relative h-48 bg-gray-800 border-b-2 border-blue-400">
                      {project.images.length > 0 ? (
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                          <span className="text-blue-300 text-sm">
                            No Image
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3
                        className="text-xl font-bold text-white mb-6 pb-3 border-b-2 border-blue-400 whitespace-nowrap overflow-hidden text-ellipsis"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full border border-blue-300 slide-in-left"
                              style={
                                {
                                  "--delay": `${index * 0.2 + tagIndex * 0.1}s`,
                                } as React.CSSProperties
                              }
                            >
                              {tagLabels[tag]}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies
                            .slice(0, 3)
                            .map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 text-sm bg-white/20 text-blue-200 rounded border border-blue-300/50 slide-in-right pulse-animation"
                                style={
                                  {
                                    "--delay": `${
                                      index * 0.2 + techIndex * 0.15
                                    }s`,
                                  } as React.CSSProperties
                                }
                              >
                                {tech}
                              </span>
                            ))}
                          {project.technologies.length > 3 && (
                            <span
                              className="px-3 py-1 text-sm bg-white/20 text-blue-200 rounded border border-blue-300/50 slide-in-right"
                              style={
                                {
                                  "--delay": `${index * 0.2 + 0.6}s`,
                                } as React.CSSProperties
                              }
                            >
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => handleProjectClick(project.id)}
                          className="group flex-1 text-center px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                          style={{
                            background:
                              "linear-gradient(135deg, #0066cc 0%, #002d72 100%)",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          <span className="flex items-center justify-center gap-2 font-extrabold text-white">
                            DETAILS
                            <Image
                              src="/icons/arrow-right.svg"
                              alt="Arrow right"
                              width={16}
                              height={16}
                              className="group-hover:translate-x-1 transition-transform brightness-0 invert"
                            />
                          </span>
                        </button>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-4 py-3 border-2 border-blue-300 rounded-xl hover:bg-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            <Image
                              src="/icons/git.svg"
                              alt="GitHub"
                              width={24}
                              height={24}
                              className="group-hover:brightness-0 transition-all"
                              style={{
                                filter:
                                  "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(95%) contrast(101%)",
                              }}
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Midfield Line (2-3 projects) */}
            {projects.length > 3 && (
              <div
                ref={midfieldRef as React.RefObject<HTMLDivElement>}
                className={`text-center scroll-animate ${
                  midfieldVisible
                    ? "scroll-visible scroll-stagger-2"
                    : "scroll-hidden from-down"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {projects.slice(3).map((project, index) => (
                    <div
                      key={project.id}
                      className={`card-background rounded-lg border-2 border-blue-400 shadow-lg hover-gamba transition-all duration-300 overflow-hidden group scroll-animate ${
                        midfieldVisible
                          ? `scroll-visible scroll-stagger-${index + 3}`
                          : "scroll-hidden from-down"
                      }`}
                    >
                      <div className="relative h-48 bg-gray-800 border-b-2 border-blue-400">
                        {project.images.length > 0 ? (
                          <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                            <span className="text-blue-300 text-sm">
                              No Image
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <h3
                          className="text-xl font-bold text-white mb-6 pb-3 border-b-2 border-blue-400 whitespace-nowrap overflow-hidden text-ellipsis"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {project.title}
                        </h3>

                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full border border-blue-300"
                              >
                                {tagLabels[tag]}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies
                              .slice(0, 3)
                              .map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 text-sm bg-white/20 text-blue-200 rounded border border-blue-300/50"
                                >
                                  {tech}
                                </span>
                              ))}
                            {project.technologies.length > 3 && (
                              <span className="px-3 py-1 text-sm bg-white/20 text-blue-200 rounded border border-blue-300/50">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button
                            onClick={() => handleProjectClick(project.id)}
                            className="group flex-1 text-center px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                            style={{
                              background:
                                "linear-gradient(135deg, #0066cc 0%, #002d72 100%)",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            <span className="flex items-center justify-center gap-2 font-extrabold text-white">
                              DETAILS
                              <Image
                                src="/icons/arrow-right.svg"
                                alt="Arrow right"
                                width={16}
                                height={16}
                                className="group-hover:translate-x-1 transition-transform brightness-0 invert"
                              />
                            </span>
                          </button>
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group px-4 py-3 border-2 border-blue-300 rounded-xl hover:bg-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                              style={{ fontFamily: "Inter, sans-serif" }}
                            >
                              <Image
                                src="/icons/git.svg"
                                alt="GitHub"
                                width={24}
                                height={24}
                                className="group-hover:brightness-0 transition-all"
                                style={{
                                  filter:
                                    "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(95%) contrast(101%)",
                                }}
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <PopUp isOpen={isOpen} onClose={handleCloseModal}>
        {selectedProject && (
          <ProjectModal
            project={
              projects.find((p) => p.id === selectedProject) ?? projects[0]
            }
          />
        )}
      </PopUp>
    </section>
  );
};

export default Works;
