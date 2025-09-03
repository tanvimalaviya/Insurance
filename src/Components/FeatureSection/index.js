"use client";
import React from "react";
import Card from "../../ui/Card";
import { Handshake, DollarSign, Target, Headphones } from "lucide-react";
//import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function FeaturesSection() {
  //useEffect to set animation duration
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p
          data-aos="fade-up"
          data-aos-duration="3500"
          className="text-blue-600 font-semibold"
        >
          Our Features
        </p>
        <h2
          data-aos="fade-up"
          data-aos-duration="3500"
          className="text-3xl md:text-4xl font-bold mt-2"
        >
          Insurance Provide you a Better Future
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="3500"
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          adipisci facilis cupiditate recusandae aperiam temporibus corporis
          itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
          obcaecati, ipsam mollitia hic.
        </p>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
            className="transform transition duration-300 hover:scale-105 hover:shadow-lg rounded-xl"
          >
            <Card
              icon={<Handshake className="w-8 h-8" />}
              title="Trusted Company"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur..."
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500" // 👈 0.5s pachi biju animate thase
            className="transform transition duration-300 hover:scale-105 hover:shadow-lg rounded-xl"
          >
            <Card
              icon={<DollarSign className="w-8 h-8" />}
              title="Anytime Money Back"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur..."
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="5200"
            data-aos-delay="1000" 
            className="transform transition duration-300 hover:scale-105 hover:shadow-lg rounded-xl"
          >
            <Card
              icon={<Target className="w-8 h-8" />}
              title="Flexible Plans"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur..."
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="6200"
            data-aos-delay="1500" 
            className="transform transition duration-300 hover:scale-105 hover:shadow-lg rounded-xl"
          >
            <Card
              icon={<Headphones className="w-8 h-8" />}
              title="24/7 Fast Support"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur..."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
