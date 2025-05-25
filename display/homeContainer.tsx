"use client";

import Header from "@/components/header";
import Hero from "@/display/hero";
import Footer from "@/components/footer";
import Profile from "./profile";
import Skills from "./skill";
import Works from "./works";
import Contact from "./contact";

const HomeContainer = () => {
  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <Header />

      {/* メインコンテンツ */}
      <main className="pt-16">
        {/* ヒーローセクション */}
        <Hero />

        {/* プロフィールセクション */}
        <Profile />

        {/* スキルセクション */}
        <Skills />

        {/* 作品セクション */}
        <Works />

        {/* コンタクトセクション */}
        <Contact />
      </main>

      {/* フッター */}
      <Footer />
    </div>
  );
};

export default HomeContainer;
