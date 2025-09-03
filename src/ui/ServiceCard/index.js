"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaUsers, FaHospital, FaCar, FaHome } from "react-icons/fa";
//import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const servicedata = [
  {
    id: 1,
    image: "/service1.png",
    icon: <FaUsers className="text-blue-600 text-2xl" />,
    title: "Life Insurance",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "Read More",
  },
  {
    id: 2,
    image: "/service2.png",
    icon: <FaHospital className="text-blue-600 text-2xl" />,
    title: "Health Insurance",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "Read More",
  },
  {
    id: 3,
    image: "/service3.png",
    icon: <FaCar className="text-blue-600 text-2xl" />,
    title: "Car Insurance",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "Read More",
  },
  {
    id: 4,
    image: "/service4.png",
    icon: <FaHome className="text-blue-600 text-2xl" />,
    title: "Home Insurance",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "Read More",
  },
];

const ServiceCard = () => {
  //useEffect to set animation duration
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {servicedata.map(({ id, image, icon, title, description, button }) => (
        <div
          key={id}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={id * 200} // 0ms, 200ms, 400ms, 600ms
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out group"
        >
          {/* Top Image */}
          <div className="w-full h-40 relative flex items-center justify-center bg-white group-hover:bg-blue-100">
            <Image
              src={image}
              alt={title}
              width={200}
              height={220}
              className="object-contain"
            />

            {/* Icon Overlay */}
            <div
              className="bg-gray-50 rounded-tl-lg rounded-tr-lg p-4 right-0 bottom-0 absolute 
                    text-blue-600 group-hover:bg-blue-100  "
            >
              {icon}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 text-left bg-gray-50 group-hover:bg-blue-600 group-hover:text-white ">
            {/* Title */}
            <h4 className="text-lg mb-2">{title}</h4>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 group-hover:text-white">
              {description}
            </p>

            {/* Button */}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full group-hover:bg-white group-hover:text-blue-600 transition">
              {button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
