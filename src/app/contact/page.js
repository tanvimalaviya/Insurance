"use client";
import Contact from "@/ui/Contact";
import React, { useEffect } from "react";
//import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div>
        <div
          className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] 
                 flex items-center justify-center text-center 
                 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('/service3.png')" }} //
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/80 to-blue-300/60"></div>

          {/* Content */}
          <div  data-aos="fade-down" data-aos-duration="2500" className="relative z-10 px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              Contact Us
            </h1>
            <p className="text-white text-sm md:text-base">
              <span className="hover:text-yellow-300 cursor-pointer">Home</span>{" "}
              /{" "}
              <span className="hover:text-yellow-300 cursor-pointer">
                Pages
              </span>{" "}
              / <span className="text-yellow-300">Contact</span>
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default page;
