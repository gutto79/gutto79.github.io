import Image from "next/image";

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
            {/* プロフィール画像と名前 */}
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6">
                <Image
                  src="/images/profile/profile.webp"
                  alt="木村原暉のプロフィール画像"
                  fill
                  className="object-cover rounded-full"
                  priority
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
            </div>

            {/* 自己紹介 */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-3 mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 text-center">
                    木村原暉(KIMURA GENKI)
                    <br />
                    <span className="text-center text-lg font-semibold  mb-2">
                      京都大学大学院情報学研究科社会情報学専攻　修士1回生
                    </span>
                  </h3>
                  <div className="w-full h-0.5 bg-blue-600"></div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  ヒューマンロボットインタラクション研究室に所属し、人間とロボットの関わり方について研究しています。
                  <br />
                  また、株式会社STAR
                  UP(https://starup01.jp/)にて主にフロントエンドエンジニアとしてWebアプリケーションの開発に携わっています。
                </p>
              </div>
            </div>

            {/* 経歴 */}
            <div className="max-w-3xl mx-auto">
              <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                経歴
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
                          京都大学工学部情報学科 入学
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
                          京都大学大学院情報学研究科社会情報学専攻 入学
                        </h5>
                        <p className="text-sm text-gray-600 mt-1">
                          ヒューマンロボットインタラクション研究室
                          <br />
                          (https://www.robot.soc.i.kyoto-u.ac.jp/)
                        </p>
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
