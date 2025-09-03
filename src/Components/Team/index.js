"use client"
import TeamCard from "@/ui/TeamCard";
import React, { useEffect } from "react";
//import AOS
import AOS from "aos";
import "aos/dist/aos.css";


const Team = () => {
  useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);

  return (
    <section className="py-12 bg-white">
    <div  data-aos="fade-up" data-aos-duration="2500" className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-blue-600  text-2xl">Our Team</p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">Meet Our Expert Team Members</h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
        adipisci facilis cupiditate recusandae aperiam temporibus corporis
        itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
        obcaecati, ipsam mollitia hic.
      </p>
    </div>
    <TeamCard/>
    </section>
  );
};

export default Team;
