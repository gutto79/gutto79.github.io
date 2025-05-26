import { ProjectModal } from "@/components/ProjectModal";
import { PopUp } from "@/components/PopUp";
import Image from "next/image";
import BackgroundDecorations from "@/components/BackgroundDecorations";
import { tagLabels } from "@/types/project";
import { projects } from "@/data/projects";
import { useWorks } from "@/hooks/useWorks";

const Works = () => {
  const { selectedProject, isOpen, handleProjectClick, handleCloseModal } =
    useWorks();

  return (
    <section id="works" className="py-20 bg-gray-50 relative overflow-hidden">
      <BackgroundDecorations />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-2 inline-block">
              Works
            </h2>
          </div>

          {/* プロジェクト一覧 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* プロジェクト画像 */}
                <div className="relative h-48 bg-gray-200 border-b-2 border-gray-200">
                  {project.images.length > 0 ? (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <span className="text-gray-400 text-sm">No Image</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* プロジェクトタイトル */}
                  <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-gray-200 whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.title}
                  </h3>

                  {/* タグ */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full border-2 border-gray-300"
                        >
                          {tagLabels[tag]}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 使用技術 */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-700 rounded border-2 border-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-700 rounded border-2 border-blue-300">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* リンク */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleProjectClick(project.id)}
                      className="group flex-1 text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                    >
                      <span className="flex items-center justify-center gap-2 font-extrabold">
                        Details
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
                        className="group flex-1 text-center px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-xl font-bold hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-400/25"
                      >
                        <span className="flex items-center justify-center gap-2">
                          GitHub
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
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* プロジェクトモーダル */}
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
