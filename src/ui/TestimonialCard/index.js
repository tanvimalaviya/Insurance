"use client";
import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";

const TestimonialCard = () => {
  const testimonials = [
    {
      id: 1,
      image: "/testimonial1.jpg",
      name: "Client Name 1",
      profession: "Profession",
      rating: 4,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus quisquam.",
    },
    {
      id: 2,
      image: "/testimonial2.jpg",
      name: "Client Name 2",
      profession: "Profession",
      rating: 3,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus quisquam.",
    },
    {
      id: 3,
      image: "/testimonial3.jpg",
      name: "Client Name 3",
      profession: "Profession",
      rating: 5,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus quisquam.",
    },
  ];

  // total slides = testimonials.length - 1 (because 2 cards shown)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 sec

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Manual Navigation
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center justify-between gap-8 px-6 py-10">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
      >
        <FaArrowLeft />
      </button>

      {/* Cards Wrapper */}
      <div className="flex gap-8 w-full justify-center overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {testimonials.map(({ id, image, name, profession, rating, description }) => (
            <div
              key={id}
              className="flex bg-gray-100 rounded-xl shadow-md overflow-hidden w-[450px] min-w-[450px]"
            >
              {/* Image */}
              <img
                src={image}
                alt={name}
                className="w-40 h-40 object-cover rounded-l-xl"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">{profession}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 text-blue-600 my-2">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < rating ? "text-blue-600" : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default TestimonialCard;
