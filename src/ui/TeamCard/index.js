"use client";
import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
//import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const TeamCard = () => {
   useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  const teamdata = [
    {
      id: 1,
      image: "/team1.jpg",
      name: "David James",
      description: "Profession",
    },
    {
      id: 2,
      image: "/team2.jpg",
      name: "David James",
      description: "Profession",
    },
    {
      id: 3,
      image: "/team3.jpg",
      name: "David James",
      description: "Profession",
    },
    {
      id: 4,
      image: "/team4.jpg",
      name: "David James",
      description: "Profession",
    },
  ];

  return (
    <div className="flex gap-6 justify-center pt-12 flex-wrap ">
      {teamdata.map(({ id, image, name, description }) => (
        <div
         data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={id * 200} // 0ms, 200ms, 400ms, 600ms
          key={id}
          className="relative rounded-2xl shadow-lg overflow-hidden cursor-pointer w-64 group"
        >
          {/* Image with zoom on hover */}
          <img
            src={image}
            alt={name}
            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Blue overlay on hover */}
          <div className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-40 transition duration-500"></div>

          {/* Social Icons (show on hover) */}
          <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            <a
              href="#"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-950 shadow"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-950 shadow"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-950 shadow"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-950 shadow"
            >
              <FaInstagram size={16} />
            </a>
          </div>

          {/* Content */}
          <div className="bg-blue-600 p-4 text-white rounded-b-2xl group-hover:bg-blue-950 transition-colors duration-500 relative z-10">
            <h4 className="font-semibold text-lg">{name}</h4>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
