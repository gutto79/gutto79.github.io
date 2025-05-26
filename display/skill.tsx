import Image from "next/image";
import { Star } from "lucide-react";
import BackgroundDecorations from "@/components/BackgroundDecorations";
import { renderStars } from "@/utils/skills";
import { skillCategories } from "@/data/skills";
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50 relative overflow-hidden"
    >
      <BackgroundDecorations />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="relative inline-block mb-4">
              <Image
                src="/icons/skills.svg"
                alt="Skills icon"
                width={48}
                height={48}
                className="absolute left-[-70px] top-1/2 transform -translate-y-1/2"
              />
              <h2 className="text-3xl sm:text-4xl border-b-4 border-blue-600 pb-2 font-bold text-gray-800 inline-block relative">
                Skills
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]"></div>
              </h2>
            </div>
          </div>

          {/* スキルレベルの説明 */}
          <div className="mb-8 sm:mb-12 p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-blue-100/50">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6 text-center relative">
              スキルレベルの説明
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-gray-600">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg hover:bg-blue-50/50 transition-colors duration-300">
                  <div className="flex gap-0.5 mt-1 shrink-0">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">
                      (リードレベル)
                    </p>
                    <p className="text-xs sm:text-sm">
                      複雑な問題解決やシステム設計を主導し、メンバーの指導もできる。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50/50 transition-colors duration-300">
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(3)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">(実務レベル)</p>
                    <p className="text-sm">
                      チームの一員として自律的に担当業務の開発を進めることができる。研究や長期インターンで継続的に使用している。
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50/50 transition-colors duration-300">
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(2)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gray-300" />
                    ))}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      (基礎開発レベル)
                    </p>
                    <p className="text-sm">
                      自力で調べながら、小規模で単純なアプリケーションや機能を作成できる。開発で用いたことがある。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50/50 transition-colors duration-300">
                  <div className="flex gap-0.5 mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {[...Array(3)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gray-300" />
                    ))}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">(入門レベル)</p>
                    <p className="text-sm">
                      学部や院の授業で触れ、基本的な操作ができる。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* カテゴリーごとのスキル表示 */}
          <div className="space-y-8 sm:space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-6 sm:mb-8">
                  <h3
                    className={`text-xl sm:text-2xl font-bold text-gray-800 mb-4 inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r ${category.bgColor} border-2 border-white/50 shadow-lg`}
                  >
                    {category.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-blue-100/50"
                    >
                      <div className="text-center">
                        {/* アイコン */}
                        <div className="flex justify-center mb-3 sm:mb-4">
                          <div
                            className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.bgColor} flex items-center justify-center shadow-sm border border-white/50`}
                          >
                            <Image
                              src={skill.iconPath}
                              alt={skill.name}
                              width={32}
                              height={32}
                              className="w-6 h-6 sm:w-8 sm:h-8"
                            />
                          </div>
                        </div>

                        {/* スキル名 */}
                        <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3 leading-tight">
                          {skill.name}
                        </h4>

                        {/* スキルレベル */}
                        <div className="mb-2">
                          {renderStars(skill.level, skill.name)}
                        </div>
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
