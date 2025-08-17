import Image from "next/image";
import { skillCategories } from "@/data/skills";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { elementRef: explanationRef, isVisible: explanationVisible } =
    useScrollAnimation({
      threshold: 0.1,
      triggerOnce: false,
    });
  const { elementRef: skillsGridRef, isVisible: skillsGridVisible } =
    useScrollAnimation({
      threshold: 0.1,
      triggerOnce: false,
    });

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden text-white soccer-pitch-alt"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-8 sm:mb-12 md:mb-16 scroll-animate ${
              titleVisible ? "scroll-visible" : "scroll-hidden from-down"
            }`}
          >
            <div className="relative inline-block mb-4">
              <span className="text-5xl mr-4">⭐️</span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white inline-block relative"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                SKILLS
              </h2>
            </div>
            <div
              className="w-[140px] h-1 mx-auto"
              style={{ background: "linear-gradient(90deg, #0066cc, #002d72)" }}
            ></div>
          </div>

          {/* Skill Level Explanation */}
          <div
            ref={explanationRef as React.RefObject<HTMLDivElement>}
            className={`mb-8 sm:mb-12 p-4 sm:p-6 md:p-8 card-background rounded-xl sm:rounded-2xl scroll-animate ${
              explanationVisible
                ? "scroll-visible scroll-stagger-1"
                : "scroll-hidden from-down"
            }`}
          >
            <h3
              className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 text-center relative"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              スキルレベルの説明
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-blue-100">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="flex gap-0.5 mt-1 shrink-0">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">
                        ⚽
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="font-medium text-white">(リードレベル)</p>
                    <p className="text-sm">
                      複雑な問題解決やシステム設計を主導し、メンバーの指導もできる。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(3)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">
                        ⚽
                      </span>
                    ))}
                    <span className="text-gray-500 text-sm">⚽</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">(実務レベル)</p>
                    <p className="text-sm">
                      チームの一員として自律的に担当業務の開発を進めることができる。研究や長期インターン等で継続的に用いている。
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(2)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">
                        ⚽
                      </span>
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <span key={i} className="text-gray-500 text-sm">
                        ⚽
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="font-medium text-white">(基礎開発レベル)</p>
                    <p className="text-sm">
                      自力で調べながら、小規模で単純なアプリケーションや機能を作成できる。開発で用いたことがある。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="flex gap-0.5 mt-1">
                    <span className="text-yellow-400 text-sm">⚽</span>
                    {[...Array(3)].map((_, i) => (
                      <span key={i} className="text-gray-500 text-sm">
                        ⚽
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="font-medium text-white">(入門レベル)</p>
                    <p className="text-sm">
                      学部や院の授業で触れ、基本的な操作ができる。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid - Parallel Category Cards */}
          <div 
            ref={skillsGridRef as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 scroll-animate ${
              skillsGridVisible ? "scroll-visible" : "scroll-hidden from-down"
            }`}
          >
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="card-background rounded-xl p-6 h-fit"
              >
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-2xl">⚽</span>
                        <h3
                          className="text-lg sm:text-xl font-bold text-white"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {category.name}
                        </h3>
                      </div>

                      {/* Skills as vertical compact cards */}
                      <div className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group border border-blue-400/20"
                          >
                            {/* Icon */}
                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform bg-white rounded">
                              <Image
                                src={skill.iconPath}
                                alt={skill.name}
                                width={20}
                                height={20}
                                className="w-5 h-5"
                              />
                            </div>

                            {/* Skill Info */}
                            <div className="flex-1 min-w-0">
                              <h4
                                className="text-sm font-semibold text-white truncate"
                                style={{ fontFamily: "Inter, sans-serif" }}
                              >
                                {skill.name}
                              </h4>
                              {/* TOEIC Score or Soccer Ball Rating */}
                              {skill.name === "TOEIC" ? (
                                <div className="text-sm font-bold text-yellow-400 mt-1">
                                  Score: {skill.level}
                                </div>
                              ) : (
                                <div className="flex gap-0.5 mt-1">
                                  {[...Array(4)].map((_, i) => (
                                    <span
                                      key={i}
                                      className={`text-xs ${
                                        i < skill.level
                                          ? "text-yellow-400"
                                          : "text-gray-600"
                                      }`}
                                    >
                                      ⚽
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
