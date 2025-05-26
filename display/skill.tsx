import Image from "next/image";
import { Star } from "lucide-react";
import BackgroundDecorations from "@/components/BackgroundDecorations";
import { renderStars } from "@/utils/skills";
import { skillCategories } from "@/data/skills";
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50 relative overflow-hidden"
    >
      <BackgroundDecorations />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl border-b-4 border-blue-600 pb-2 font-bold text-gray-800 mb-4 inline-block relative">
              Skills
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]"></div>
            </h2>
          </div>

          {/* スキルレベルの説明 */}
          <div className="mb-12 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center relative">
              スキルレベルの説明
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-600">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50/50 transition-colors duration-300">
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">(リードレベル)</p>
                    <p className="text-sm">
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
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-8">
                  <h3
                    className={`text-2xl font-bold text-gray-800 mb-4 inline-block px-6 py-3 rounded-2xl bg-gradient-to-r ${category.bgColor} border-2 border-white/50 shadow-lg`}
                  >
                    {category.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-blue-100/50"
                    >
                      <div className="text-center">
                        {/* アイコン */}
                        <div className="flex justify-center mb-4">
                          <div
                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.bgColor} flex items-center justify-center shadow-sm border border-white/50`}
                          >
                            <Image
                              src={skill.iconPath}
                              alt={skill.name}
                              width={32}
                              height={32}
                              className="w-8 h-8"
                            />
                          </div>
                        </div>

                        {/* スキル名 */}
                        <h4 className="text-base font-semibold text-gray-800 mb-3 leading-tight">
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
