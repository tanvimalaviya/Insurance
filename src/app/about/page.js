"use client";
import AboutSection from "@/Components/AboutSection";
import FAQ from "@/Components/FAQ";
import FeaturesSection from "@/Components/FeatureSection";
import Team from "@/Components/Team";
import React from "react";

const PageHeader = () => {
  return (
    <div>
    <div
      className="relative w-full h-[350px] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/service3.png')" }} // <-- tamaru image
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/90 to-blue-300/80"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-white mb-2">About Us</h1>
        <p className="text-white">
          <span className="hover:text-yellow-300 cursor-pointer">Home</span> /{" "}
          <span className="hover:text-yellow-300 cursor-pointer">Pages</span> /{" "}
          <span className="text-yellow-300">About</span>
        </p>
      </div>
    
    </div>
      <AboutSection/>
      <FeaturesSection/>
      <FAQ/>
      <Team/>
      </div>
  );
};

export default PageHeader;
