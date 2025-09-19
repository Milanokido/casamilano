import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PromosSection from "../components/PromosSection";
import MenuSection from "../components/MenuSection";
import GallerySection from "../components/GallerySection";
import AboutSection from "../components/AboutSection";
import InfoSection from "../components/InfoSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PromosSection />
      <MenuSection />
      <GallerySection />
      <AboutSection />
      <InfoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;