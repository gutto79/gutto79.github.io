import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Language",
      skills: [
        {
          name: "TypeScript",
          level: 4,
          icon: (
            <Image
              src="/icons/typescript.svg"
              alt="TypeScript"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          ),
          description: "",
          details: [],
        },
        {
          name: "Python",
          level: 4,
          icon: (
            <Image
              src="/icons/python.svg"
              alt="Python"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          ),
          description: "",
          details: [],
        },
        {
          name: "Ruby",
          level: 3,
          icon: (
            <Image
              src="/icons/ruby.svg"
              alt="Ruby"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          ),
          description: "",
          details: [],
        },
        {
          name: "Java",
          level: 2,
          icon: (
            <Image
              src="/icons/java.svg"
              alt="Java"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          ),
          description: "",
          details: [],
        },
        {
          name: "R",
          level: 1,
          icon: (
            <Image
              src="/icons/r.svg"
              alt="R"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          ),
          description: "",
          details: [],
        },
      ],
    },
    {
      name: "Framework",
      skills: [
        {
          name: "Next.js",
          level: 4,
          icon: (
            <Image
              src="/icons/nextjs.svg"
              alt="Next.js"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          ),
          description: "",
          details: [],
        },
        {
          name: "Ruby on Rails",
          level: 3,
          icon: (
            <Image
              src="/icons/rails.svg"
              alt="Ruby on Rails"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          ),
          description: "",
          details: [],
        },
        {
          name: "React",
          level: 3,
          icon: (
            <Image
              src="/icons/react.svg"
              alt="React"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          ),
          description: "",
          details: [],
        },
        {
          name: "Vite",
          level: 3,
          icon: (
            <Image
              src="/icons/vite.svg"
              alt="Vite"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          ),
          description: "",
          details: [],
        },
      ],
    },
    {
      name: "DB & Cloud Service",
      skills: [
        {
          name: "RDB",
          level: 3,
          icon: (
            <Image
              src="/icons/database.svg"
              alt="Database"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          ),
          description: "",
          details: [],
        },
        {
          name: "Supabase",
          level: 3,
          icon: (
            <Image
              src="/icons/supabase.svg"
              alt="Supabase"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          ),
          description: "",
          details: [],
        },
      ],
    },
    {
      name: "Dev Tools",
      skills: [
        {
          name: "Git / GitHub",
          level: 4,
          icon: (
            <Image
              src="/icons/git.svg"
              alt="Git"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          ),
          description: "",
          details: [],
        },
      ],
    },
    {
      name: "Others",
      skills: [
        {
          name: "TOEIC",
          level: 895,
          icon: (
            <Image
              src="/icons/toeic.svg"
              alt="TOEIC"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          ),
          description: "",
          details: [],
        },
      ],
    },
  ];

  const renderStars = (level: number, name?: string) => {
    // TOEICスコアの場合は特別な表示
    if (name === "TOEIC") {
      return (
        <div className="flex flex-col items-end">
          <div className="text-2xl font-bold text-blue-600">{level}</div>
          <div className="text-sm text-gray-500">2024年4月取得</div>
        </div>
      );
    }

    if (level > 100) return `${level}`; // その他のスコア表示の場合

    const stars = [];
    const fullStars = Math.floor(level);
    const hasHalfStar = level % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-5 h-5 fill-yellow-400 text-yellow-400"
        />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="w-5 h-5 fill-yellow-400 text-yellow-400"
        />
      );
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }

    return <div className="flex gap-0.5">{stars}</div>;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-2 inline-block">
              Skills
            </h2>
          </div>

          {/* スキルレベルの説明 */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              スキルレベルの説明
            </h3>
            <div className="space-y-2 text-gray-600">
              <p>
                ⭐️⭐️⭐️⭐️⭐️ (プロフェッショナルレベル)
                <br />
                ライブラリを構築できるレベル。複雑な問題解決や指導が可能
              </p>
              <p>
                ⭐️⭐️⭐️⭐️ (実務レベル)
                <br />
                長期インターンや研究で継続的に使用している技術。
              </p>
              <p>
                ⭐️⭐️⭐️ (開発可能レベル)
                <br />
                継続的に使用してはいないが、開発に使用したことがある技術。
              </p>
              <p>
                ⭐️⭐️ (基礎理解レベル)
                <br />
                学部や院の授業以外でも触れたことがあるが開発に使用したことのない技術。
              </p>
              <p>
                ⭐️ (入門レベル)
                <br />
                学部や院の授業で触れた技術。
              </p>
            </div>
          </div>

          {/* カテゴリーごとのスキル表示 */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      {/* アイコン */}
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-gray-700 [&>svg]:w-10 [&>svg]:h-10">
                        {skill.icon}
                      </div>

                      {/* スキル詳細 */}
                      <div className="flex-grow">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {skill.name}
                          </h3>
                          <div className="text-sm font-medium text-gray-600">
                            {renderStars(skill.level, skill.name)}
                          </div>
                        </div>

                        {skill.description && (
                          <div className="text-gray-600 mb-3 whitespace-pre-line">
                            {skill.description}
                          </div>
                        )}

                        {/* 詳細タグ */}
                        <div className="flex flex-wrap gap-2">
                          {skill.details.map((detail, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-700 rounded-full border border-blue-200/50"
                            >
                              {detail}
                            </span>
                          ))}
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
