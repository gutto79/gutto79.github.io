import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "ポートフォリオサイト",
    description:
      "Next.jsとTypeScriptで構築したポートフォリオサイト。サッカーをモチーフにデザイン。",
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
    period: "2025年5月26日-27日",
    teamSize: "1人",
    tags: ["personal"],
  },
  {
    id: 2,
    title: "発注業務支援アプリ",
    description: (
      <>
        株式会社STAR UPでの長期インターンプロジェクト。
        某大手エンタメ企業や某大手通信キャリアに向け、商品の売上データや各店舗のイベント情報など分析して需要予測を行い、最適な発注量の提案を行うアプリケーションを開発。
        主にフロントエンドエンジニアとしてUI/UX実装を担当。
        <br />
        追加開発フェーズでは、一部機能について要件定義を元に詳細設計、DB修正、新規API実装、UI/UX実装まで一気通貫で担当。
      </>
    ),
    features: [
      "在庫商品の管理",
      "売上予測の可視化",
      "需要予測を組み込んだ発注量提案",
    ],
    role: ["UI/UX実装", "Jestを用いた単体テスト", "API実装"],
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
    technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "Docker"],
    images: [
      "/images/works/intern_works/new-item-modal.webp",
      "/images/works/intern_works/order-application.webp",
      "/images/works/intern_works/store-orders.webp",
    ],
    githubUrl: null,
    period: "2025年2月 - 現在",
    teamSize: "9人(フロントエンドは3人)",
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
    technologies: ["React", "TypeScript", "Supabase"],
    images: [
      "/images/works/compatibility_app/group_compatibility.webp",
      "/images/works/compatibility_app/login.webp",
      "/images/works/compatibility_app/question.webp",
      "/images/works/compatibility_app/compatibility.webp",
    ],
    githubUrl: "https://github.com/shota-i-03/team_a",
    period: "2025年3月末の1週間",
    teamSize: "3人",
    tags: ["hackathon"],
  },
  {
    id: 4,
    title: "授業関連SNS投稿生成システム",
    description: (
      <>
        学部4回から継続して行なっている研究プロジェクト。教育ロボットが授業内容を音声認識し、GPT-4oを活用して学習効果を高めるSNS投稿を自動生成するシステムの構築、検証を行う。
        <a
          href="https://x.com/RobovieHRI"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-white underline ml-1"
        >
          ロボットのXアカウント
        </a>
      </>
    ),
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
    teamSize: "自分、教授、助教",
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
    teamSize: "3人",
    tags: ["short-term-internship"],
  },
  {
    id: 6,
    title: "パートナー幸福度可視化アプリ",
    description: (
      <>
        学内ハッカソンにて開発したアプリ。
        各ユーザーがパートナーに「されて嬉しい行動」や「されて嫌な行動」を幸福度の変動値と共に入力することで、パートナーはユーザーの幸福度をリアルタイムで確認することができる。
        また、お互いの過去の行動をスライドショーで振り返る機能を搭載し、幸福度の変遷を再認識する機会を設けている。
        カップルがこのアプリを用いることで、価値観の相互理解を深めることを目的としている。
        5人チームのリーダーとして開発を主導し、結果として10チーム中3位に入賞した。
      </>
    ),
    features: [
      "リアルタイムでのパートナーの幸福度可視化",
      "過去の行動のスライドショー表示",
    ],
    role: [
      "プロジェクト進行管理、タスク管理、タスク振り分け",
      "各ページの雛形作成",
      "API実装",
      "コードレビュー、リファクタリング",
    ],
    considerations: [
      "Notion,Slackを用いたタスク管理、タスク振り、進歩状況の共有を徹底",
    ],
    challenges: [
      "開発経験が少ないチームでの開発",
      "日本語が通じないメンバーがいる中での開発",
    ],
    learnings: ["notionを用いた徹底的なタスク管理、タスク振り"],
    technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "Supabase"],
    images: [
      "/images/works/happiness_app/home.webp",
      "/videos/works/happiness_app/slide_show.webm",
      "/videos/works/happiness_app/demo.webm",
    ],
    githubUrl:
      "https://github.com/gutto79/practice_of_information_systems_pr1_group03",
    period: "2025年4月 - 6月",
    teamSize: "5人",
    tags: ["hackathon"],
  },
];
