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
