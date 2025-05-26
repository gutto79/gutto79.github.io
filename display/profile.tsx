import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  return (
    <section
      id="profile"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 inline-block">
              Profile
            </h2>
            <div className="w-[120px] h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* 自己紹介 */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col items-center gap-6 mb-6">
                  <div className="relative w-48 h-48">
                    <Image
                      src="/images/profile/profile.webp"
                      alt="木村原暉のプロフィール画像"
                      fill
                      className="object-cover rounded-lg"
                      priority
                      sizes="(max-width: 768px) 100vw, 192px"
                    />
                  </div>

                  <div className="w-full space-y-3 text-center">
                    <h3 className="text-3xl font-bold text-gray-800">
                      木村原暉(KIMURA GENKI)
                      <br />
                      <div className="mt-3 w-full h-0.5 bg-gray-200"></div>
                      <span className="text-lg font-semibold">
                        京都大学大学院
                        <br />
                        情報学研究科 社会情報学専攻 修士1回生
                        <br />
                        <Link
                          href="https://www.robot.soc.i.kyoto-u.ac.jp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline decoration-1 hover:decoration-2 transition-all"
                        >
                          ヒューマンロボットインタラクション研究室
                        </Link>
                        <br />
                        <Link
                          href="https://starup01.jp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline decoration-1 hover:decoration-2 transition-all"
                        >
                          株式会社STAR UP 受託開発事業部
                        </Link>
                      </span>
                    </h3>
                  </div>
                  <div className="w-full h-0.5 bg-gray-200"></div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  大学院ではヒューマンロボットインタラクション研究室に所属し、
                  教育ロボットが授業内容に基づいたSNS投稿を生成・発信することで学生の学習効果を高める「ロボットによる授業関連SNS投稿生成システム」の研究に取り組んでいる。
                  <br />
                  また、株式会社STAR
                  UPでは主にフロントエンドエンジニアとして、需要予測を組み込んだ発注業務支援アプリの開発に携わっている。
                  <br />
                </p>
              </div>
            </div>

            {/* 経歴 */}
            <div className="max-w-3xl mx-auto">
              <h4 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                career
              </h4>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-36 top-0 h-full w-0.5 bg-blue-200"></div>

                {/* Timeline items */}
                <div className="space-y-8">
                  {/* 学部 */}
                  <div className="relative flex items-start">
                    <div className="w-36 text-right pr-8 flex-shrink-0">
                      <div className="text-lg font-bold text-blue-600 whitespace-nowrap">
                        2021年4月
                      </div>
                    </div>
                    <div className="absolute left-36 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm mt-1"></div>
                    <div className="flex-1 ml-8">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-semibold text-gray-800">
                          京都大学 工学部 情報学科 入学
                        </h5>
                      </div>
                    </div>
                  </div>

                  {/* 研究室配属 */}
                  <div className="relative flex items-start">
                    <div className="w-36 text-right pr-8 flex-shrink-0">
                      <div className="text-lg font-bold text-blue-600 whitespace-nowrap">
                        2024年4月
                      </div>
                    </div>
                    <div className="absolute left-36 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm mt-1"></div>
                    <div className="flex-1 ml-8">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-semibold text-gray-800">
                          ヒューマンロボットインタラクション研究室 配属
                        </h5>
                      </div>
                    </div>
                  </div>

                  {/* STAR UP */}
                  <div className="relative flex items-start">
                    <div className="w-36 text-right pr-8 flex-shrink-0">
                      <div className="text-lg font-bold text-blue-600 whitespace-nowrap">
                        2025年2月
                      </div>
                    </div>
                    <div className="absolute left-36 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm mt-1"></div>
                    <div className="flex-1 ml-8">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-semibold text-gray-800">
                          株式会社STAR UP 入社
                        </h5>
                      </div>
                    </div>
                  </div>

                  {/* 大学院 */}
                  <div className="relative flex items-start">
                    <div className="w-36 text-right pr-8 flex-shrink-0">
                      <div className="text-lg font-bold text-blue-600 whitespace-nowrap">
                        2025年4月
                      </div>
                    </div>
                    <div className="absolute left-36 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm mt-1"></div>
                    <div className="flex-1 ml-8">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-semibold text-gray-800">
                          京都大学大学院 情報学研究科 社会情報学専攻 入学
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
