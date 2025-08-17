"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/display/hero";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/LoadingScreen";
import Profile from "./profile";
import Skills from "./skill";
import Works from "./works";
import Contact from "./contact";

const HomeContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowContent(true);
      }, 500); // Wait for fade-out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen isExiting={isExiting} />;
  }

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <Header />

      <main className="pt-16">
        <Hero />
        <Profile />
        <Skills />
        <Works />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default HomeContainer;