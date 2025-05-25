import { useState } from "react";
import { ProjectModal } from "../components/ProjectModal";
import Image from "next/image";

const Works = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "集団相性診断Webアプリ",
      description:
        "グループメンバーのプロフィールや性格診断データを基に、集団としての相性度を数値化・可視化し、結果に応じたアドバイスを提示するWebアプリ。3人チームでの開発でプロジェクトリーダーを担当。",
      role: "プロジェクトリーダー / フロントエンド / バックエンド",
      technologies: ["React", "Vite", "TypeScript", "Supabase"],
      images: [
        "/images/works/compatibility_app/group_compatibility.webp",
        "/images/works/compatibility_app/login.webp",
        "/images/works/compatibility_app/question.webp",
        "/images/works/compatibility_app/compatibility.webp",
      ],
      githubUrl: "https://github.com/shota-i-03/team_a",
    },
    {
      id: 2,
      title: "需要予測システム",
      description:
        "株式会社STAR UPでの長期インターンプロジェクト。ECサイトの売上データとセール情報を用いた需要予測に基づき、最適な発注タイミング・数量を提案するWebアプリケーション。フロントエンドエンジニアとしてUI設計・開発を担当。",
      role: "フロントエンドエンジニア",
      technologies: ["Next.js", "TypeScript"],
      images: ["/api/placeholder/400/250"],
      githubUrl: "#",
    },
    {
      id: 3,
      title: "授業関連SNS投稿生成システム",
      description:
        "卒業研究プロジェクト。教育ロボットが授業内容を音声認識し、GPT-4oを活用して学習効果を高めるSNS投稿を自動生成するシステム。Pythonを用いてシステム開発を行った。",
      role: "研究開発者",
      technologies: ["Python", "プロンプトエンジニアリング"],
      images: ["/api/placeholder/400/250"],
      githubUrl: "#",
    },
    {
      id: 4,
      title: "API開発プロジェクト",
      description:
        "RIZAPグループでの3日間インターン。Ruby on Railsを用いたAPI設計・開発をチームで実施。実際のプロジェクトに近い要件でAPI設計書の作成とRailsでのAPI実装を行った。",
      role: "バックエンドエンジニア",
      technologies: ["Ruby on Rails"],
      images: ["/api/placeholder/400/250"],
      githubUrl: "#",
    },
  ];

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
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
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* プロジェクト画像 */}
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  {/* プロジェクトタイトル */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {project.title}
                  </h3>

                  {/* 使用技術 */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* リンク */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleProjectClick(project.id)}
                      className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                    >
                      詳細
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* プロジェクトモーダル */}
      {selectedProject && (
        <ProjectModal
          isOpen={true}
          onClose={handleCloseModal}
          project={projects.find((p) => p.id === selectedProject)!}
        />
      )}
    </section>
  );
};

export default Works;
