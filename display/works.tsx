import { useState } from "react";
import { ProjectModal } from "@/components/ProjectModal";
import { PopUp } from "@/components/PopUp";
import { useModal } from "@/hooks/useModal";
import Image from "next/image";

type ProjectTag =
  | "research"
  | "hackathon"
  | "long-term-internship"
  | "short-term-internship"
  | "personal";

interface Project {
  id: number;
  title: string;
  description: string;
  features?: string[];
  role?: string[];
  considerations?: string[];
  challenges?: string[];
  learnings?: string[];
  technologies: string[];
  images: string[];
  githubUrl: string | null;
  period: string;
  tags: ProjectTag[];
}

const tagLabels: Record<ProjectTag, string> = {
  research: "研究",
  hackathon: "ハッカソン",
  "long-term-internship": "長期インターン",
  "short-term-internship": "短期インターン",
  personal: "個人開発",
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { isOpen, openModal, closeModal } = useModal();
  const projects: Project[] = [
    {
      id: 1,
      title: "ポートフォリオサイト",
      description: "Next.jsとTypeScriptで構築したポートフォリオサイト。",
      features: undefined,
      role: undefined,
      considerations: [
        "レスポンシブデザインを意識し、スマートフォンからデスクトップまで、あらゆる画面サイズで最適なユーザー体験を提供すること",
      ],
      challenges: undefined,
      learnings: undefined,
      technologies: ["Next.js", "TypeScript"],
      images: ["/images/works/portfolio/portfolio_hero.webp"],
      githubUrl: "https://github.com/gutto79/gutto79.github.io",
      period: "2024年5月26日-27日",
      tags: ["personal"],
    },
    {
      id: 2,
      title: "発注業務支援アプリ",
      description:
        "株式会社STAR UPでの長期インターンプロジェクト。某大手エンタメ企業や某大手通信キャリアに向け、商品の売上データを分析して需要予測を行い、最適な発注量の提案を行うアプリケーションを開発。フロントエンドエンジニアとしてUI/UX実装を担当。",
      features: [
        "在庫商品の管理",
        "売上予測の可視化",
        "需要予測を組み込んだ発注量提案",
      ],
      role: ["UI/UX実装", "UI/UX改善の提案", "単体テスト"],
      considerations: [
        "質を担保しつつ提示された期限よりも早くタスクを終わらせること",
        "与えられたタスクをこなすだけではなく、UI/UX設計、API設計に改善点があれば積極的に改善の提案を行うこと",
        "Atomic Designの原則に従ったUI/UXの実装",
      ],
      challenges: [
        "アジャイルな開発環境で、デザインや仕様が詳細に決まっていない状態でのプロトタイプ開発",
      ],
      learnings: [
        "Next.jsとTypeScriptを用いたフロントエンド開発スキル",
        "設計書から要件を理解し、開発、テストを行う下流工程を実務を通じて理解できた",
      ],
      technologies: ["Next.js", "TypeScript"],
      images: [
        "/images/works/intern_works/new-item-modal.webp",
        "/images/works/intern_works/order-application.webp",
        "/images/works/intern_works/store-orders.webp",
      ],
      githubUrl: null,
      period: "2025年2月 - 現在",
      tags: ["long-term-internship"],
    },
    {
      id: 3,
      title: "集団相性診断Webアプリ",
      description:
        "生成AIを利用したアプリケーションを開発するハッカソンでのプロジェクト。グループメンバーのプロフィールや性格診断データを基に、個人間の相性診断だけでなく集団としての相性度を可視化し、結果に応じたアドバイスを提示するWebアプリ。3人チームでの開発でリーダーを担当。",
      features: [
        "Googleアカウントによる認証",
        "個人間のGeminiによる 相性診断",
        "集団間のGemini相性診断",
      ],
      role: [
        "プロジェクト進行管理、タスク管理、タスク振り分け",
        "UI/UX実装",
        "DB設計",
        "Googleログイン機能実装、Supabase、Geminiとの接続",
      ],
      considerations: [
        "相性診断の数値に妥当性を持たせるため、入力してもらったプロフィールや性格診断情報を多角的に分析しユーザーに表示させること。",
      ],
      challenges: [
        "チームメンバーに適切に工数を振り分けること",
        "オンライン開発での進捗管理",
      ],
      learnings: [
        "生成AIとアプリの連携方法",
        "BaaS(Supabase)を用いたアプリ開発手法",
      ],
      technologies: ["React", "Vite", "TypeScript", "Supabase"],
      images: [
        "/images/works/compatibility_app/group_compatibility.webp",
        "/images/works/compatibility_app/login.webp",
        "/images/works/compatibility_app/question.webp",
        "/images/works/compatibility_app/compatibility.webp",
      ],
      githubUrl: "https://github.com/shota-i-03/team_a",
      period: "2025年3月末の1週間",
      tags: ["hackathon"],
    },
    {
      id: 4,
      title: "授業関連SNS投稿生成システム",
      description:
        "学部4回から継続して行なっている研究プロジェクト。教育ロボットが授業内容を音声認識し、GPT-4oを活用して学習効果を高めるSNS投稿を自動生成するシステムの構築、検証を行う。",
      features: [
        "先生の授業内容を音声認識し、文字起こしデータに変換",
        "GPT-4oによる学習効果を高める投稿の生成",
      ],
      role: [
        "学習効果を高めるSNS投稿の特徴抽出",
        "その特徴を反映したSNS投稿を文字起こしデータから生成するプロンプトの設計",
      ],
      considerations: [
        "抽出した特徴を反映する投稿を生成するためのプロンプトの設計",
        "文字起こしデータと齟齬のない投稿を生成するためのプロンプト設計",
      ],
      challenges: ["学習効果の定量的な評価", "フィールドスタディ環境の設定"],
      learnings: [
        "プロンプトエンジニアリングの手法",
        "アカデミックライティング",
        "プレゼンスキル",
      ],
      technologies: ["Python", "プロンプトエンジニアリング"],
      images: [
        "/images/works/research/slide1.webp",
        "/images/works/research/slide2.webp",
        "/images/works/research/slide3.webp",
        "/images/works/research/slide4.webp",
        "/images/works/research/slide5.webp",
        "/images/works/research/slide6.webp",
        "/images/works/research/slide7.webp",
        "/images/works/research/slide8.webp",
        "/images/works/research/slide9.webp",
        "/images/works/research/slide10.webp",
        "/images/works/research/slide11.webp",
        "/images/works/research/slide12.webp",
      ],
      githubUrl: null,
      period: "2024年4月 - 現在",
      tags: ["research"],
    },
    {
      id: 5,
      title: "RIZAPインターン・API開発",
      description:
        "RIZAPグループ株式会社の3Daysインターンシップにて、Ruby on Railsを用いたAPI設計・開発を3人チームで行った。RIZAPグループの実際のプロジェクトに準じた要件に対し、API設計から実装までを一貫して行なった。結果として、現場社員の方が期間内に終わると想定していなかった要件を達成でき、高評価をいただいた。",
      features: undefined,
      role: ["API設計書の作成", "API実装", "プレゼン資料作成"],
      considerations: [
        "どのエンジニアが実装しても同じ機能が実装できるようなAPI設計書を作ること",
      ],
      challenges: [
        "設計書の作成が初めての経験であり、APIの機能概要やプロセスを誰が読んでも分かりやすいように言語化することに苦戦した",
      ],
      learnings: [
        "自分の解釈だけで要件を設計書や実装に落とし込まず、メンター（実務ではPMに相当）との継続的なすり合わせを通じて要件に対する解像度を高めることの重要性",
      ],
      technologies: ["Ruby on Rails"],
      images: ["/images/works/rizap/rizap.webp"],
      githubUrl: null,
      period: "2025年5月上旬の3日間",
      tags: ["short-term-internship"],
    },
    {
      id: 6,
      title: "Happiness Visualization(仮)",
      description:
        "学内ハッカソンで開発中のアプリケーション。パートナー間で「嬉しいこと」や「嫌なこと」を数値化して入力し、リアルタイムで幸福度を可視化することで、価値観の相互理解を深めることを目的としている。5人チームでの開発でリーダーを担当。※上記画像は開発中の画像です",
      features: [
        "リアルタイムでの幸福度可視化",
        "カップルの過去の行動のスライドショー表示",
      ],
      role: [
        "プロジェクト進行管理、タスク管理、タスク振り分け",
        "各ページの雛形作成",
        "コードレビュー、リファクタリング",
        "DB設計",
      ],
      considerations: [
        "notion,slackを用いたタスク管理、タスク振り、進歩状況の共有を徹底",
      ],
      challenges: [
        "開発経験が少ないチームでの開発",
        "日本語が通じないメンバーがいる中での開発",
      ],
      learnings: ["notionを用いた徹底的なタスク管理、タスク振り"],
      technologies: ["Next.js", "TypeScript", "Supabase"],
      images: ["/images/works/happiness_app/home.webp"],
      githubUrl:
        "https://github.com/gutto79/practice_of_information_systems_pr1_group03",
      period: "2025年4月 - 6月",
      tags: ["hackathon"],
    },
  ];

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
    openModal();
  };

  const handleCloseModal = () => {
    closeModal();

    // モーダルのアニメーション完了後にプロジェクトをリセット
    setTimeout(() => {
      setSelectedProject(null);
    }, 300); // モーダルのアニメーション時間と同じ
  };

  return (
    <section id="works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
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
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
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
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
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
