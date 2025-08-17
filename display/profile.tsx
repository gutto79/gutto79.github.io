import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Profile = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section
      id="profile"
      className="py-20 relative overflow-hidden text-white soccer-pitch-alt"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full">
          {/* Section Title */}
          <div
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-12 scroll-animate ${
              titleVisible ? "scroll-visible" : "scroll-hidden from-down"
            }`}
          >
            <div className="relative inline-block mb-4">
              <span className="text-5xl mr-4">⚽</span>
              <h2
                className="text-4xl font-bold text-white inline"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                PROFILE
              </h2>
            </div>
            <div
              className="w-[120px] h-1 mx-auto"
              style={{ background: "linear-gradient(90deg, #0066cc, #002d72)" }}
            ></div>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Player Info Card - Soccer Player Style */}
            <div
              ref={cardRef as React.RefObject<HTMLDivElement>}
              className={`scroll-animate ${
                cardVisible
                  ? "scroll-visible scroll-stagger-2"
                  : "scroll-hidden from-down"
              }`}
            >
              <div className="card-background p-8 rounded-xl border-2 border-blue-400/50">
                {/* Player Header */}
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  {/* Photo and Number */}
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="relative w-80 h-80 z-10">
                        <Image
                          src="/images/profile/profile.webp"
                          alt="木村原暉のプロフィール画像"
                          fill
                          className="object-cover rounded-lg border-4 border-blue-400"
                          priority
                          sizes="(max-width: 768px) 100vw, 320px"
                        />
                      </div>
                    </div>
                    <div className="mt-4 text-center"></div>
                  </div>

                  {/* Player Info */}
                  <div className="flex-1 space-y-4 flex flex-col justify-center">
                    <div className="border-b-2 border-blue-400/50 pb-3 text-center">
                      <h3 className="text-3xl font-bold text-white mb-1">
                        <span
                          style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                        >
                          木村 原暉
                        </span>
                        <span
                          className="block text-xl text-blue-300 mt-1"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          KIMURA GENKI
                        </span>
                      </h3>
                    </div>

                    {/* Player Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-blue-300 text-xs">生年月日</span>
                        <p className="text-white font-semibold text-sm">
                          2001年4月29日
                        </p>
                      </div>
                      <div>
                        <span className="text-blue-300 text-xs">出身地</span>
                        <p className="text-white font-semibold text-sm">
                          大阪府
                        </p>
                      </div>
                      <div>
                        <span className="text-blue-300 text-xs">
                          身長 / 体重
                        </span>
                        <p className="text-white font-semibold text-sm">
                          171cm / 59kg
                        </p>
                      </div>
                      <div>
                        <span className="text-blue-300 text-xs">利き足</span>
                        <p className="text-white font-semibold text-sm">右足</p>
                      </div>
                    </div>

                    {/* Current Team */}
                    <div className="mt-3 p-3 bg-white/10 rounded-lg">
                      <span className="text-blue-300 text-base">現所属</span>
                      <p className="text-white font-bold text-base mt-2">
                        <Link
                          href="https://www.robot.soc.i.kyoto-u.ac.jp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-100 hover:text-white underline decoration-1 hover:decoration-2 transition-all"
                        >
                          京都大学大学院 情報学研究科 HRI研究室
                        </Link>
                      </p>
                      <p className="text-white font-bold text-base mt-1">
                        <Link
                          href="https://starup01.jp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-100 hover:text-white underline decoration-1 hover:decoration-2 transition-all"
                        >
                          株式会社STAR UP 受託開発事業部
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Play Style */}
                <div className="border-t-2 border-blue-400/50 pt-6">
                  <p
                    className="text-blue-100 leading-relaxed"
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    大学院ではヒューマンロボットインタラクション研究室に所属し、
                    教育ロボットが授業内容に基づいたSNS投稿を生成・発信することで学生の学習効果を高める「ロボットによる授業関連SNS投稿生成システム」の研究に取り組んでいる。
                    <br />
                    株式会社STAR
                    UPでは、主にフロントエンドエンジニアとして、需要予測を組み込んだ発注業務支援アプリの開発に携わっている。
                    <br />
                  </p>
                </div>
              </div>
            </div>

            {/* Season Records */}
            <div
              ref={statsRef as React.RefObject<HTMLDivElement>}
              className={`scroll-animate ${
                statsVisible
                  ? "scroll-visible scroll-stagger-3"
                  : "scroll-hidden from-down"
              }`}
            >
              <div className="card-background py-8 rounded-xl border-2 border-blue-400/50">
                <div className="text-center mb-8 px-8">
                  <div className="relative inline-block">
                    <span className="text-4xl mr-4">📊</span>
                    <h4
                      className="text-3xl font-bold text-white inline"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      SEASON RECORDS
                    </h4>
                  </div>
                </div>

                {/* Season Stats Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-white table-fixed border border-blue-400/30">
                    <thead>
                      <tr className="border-b-2 border-blue-400/50">
                        <th className="text-center py-3 px-2 text-blue-300 w-16 border-l border-r border-blue-400/30">
                          年度
                        </th>
                        <th className="text-center py-3 px-2 text-blue-300 w-56 min-w-[14rem] border-r border-blue-400/30">
                          所属
                        </th>
                        <th className="text-center py-3 px-2 text-blue-300">
                          主な活動
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-400/30 hover:bg-white/10 transition-colors">
                        <td className="py-3 px-2 font-semibold border-l border-r border-blue-400/30">
                          2021
                        </td>
                        <td className="py-3 px-2 whitespace-nowrap border-r border-blue-400/30">
                          京都大学 工学部 情報学科
                        </td>
                        <td className="py-3 px-2 text-sm break-words">
                          授業「プログラミング入門」にて人生で初めてプログラミングに触れる
                        </td>
                      </tr>
                      <tr className="border-b border-blue-400/30 hover:bg-white/10 transition-colors">
                        <td className="py-3 px-2 font-semibold border-l border-r border-blue-400/30">
                          2022
                        </td>
                        <td className="py-3 px-2 whitespace-nowrap border-r border-blue-400/30">
                          京都大学 工学部 情報学科
                        </td>
                        <td className="py-3 px-2 text-sm break-words">
                          授業の一環で、2人チームでコンピュータ SIMPLE
                          (SIxteen-bit MicroProcessor for Laboratory Experiment)
                          を設計した。gitの便利さを学んだ。
                        </td>
                      </tr>
                      <tr className="border-b border-blue-400/30 hover:bg-white/10 transition-colors">
                        <td className="py-3 px-2 font-semibold border-l border-r border-blue-400/30">
                          2023
                        </td>
                        <td className="py-3 px-2 whitespace-nowrap border-r border-blue-400/30">
                          京都大学 工学部 情報学科
                        </td>
                        <td className="py-3 px-2 text-sm break-words">
                          授業の一環で、HTML, CSS,
                          JavaScriptを用いて麻雀成績管理Webアプリを作成した。
                          <br />
                          幼い頃から目にしてきたWebページを自分で作れるようになったのがすごく楽しかった。
                        </td>
                      </tr>
                      <tr className="border-b border-blue-400/30 hover:bg-white/10 transition-colors">
                        <td className="py-3 px-2 font-semibold border-l border-r border-blue-400/30">
                          2024
                        </td>
                        <td className="py-3 px-2 whitespace-nowrap border-r border-blue-400/30">
                          京都大学 工学部 情報学科
                          <br />
                          HRI研究室
                        </td>
                        <td className="py-3 px-2 text-sm break-words">
                          情報技術を人間に対してどう活用するかに興味があったため、人とロボットとの関わり合い方について研究を行うヒューマンロボットインタラクション(HRI)研究室への配属を希望した。
                          <br />
                        </td>
                      </tr>
                      <tr className="border-b border-blue-400/30 hover:bg-white/10 transition-colors">
                        <td className="py-3 px-2 font-semibold border-l border-r border-blue-400/30">
                          2025
                        </td>
                        <td className="py-3 px-2 whitespace-nowrap border-r border-blue-400/30">
                          京都大学 情報学研究科
                          <br />
                          HRI研究室
                          <br />
                          株式会社STAR UP
                        </td>
                        <td className="py-3 px-2 text-sm break-words">
                          学部で学んだ情報技術が実務でどう活かされるのか知りたいと思い、2025年2月に株式会社STAR
                          UPに入社。
                          <br />
                          大学院の授業・研究、STAR UPでの実務に勤しむ。
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
