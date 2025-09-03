"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Life Insurance Makes You Happy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
    img: "/hero.png",
  },
  {
    id: 2,
    title: "Protect Your Family with LifeSure",
    desc: "Secure your loved ones with trusted insurance plans that fit your needs and budget.",
    img: "/hero.png",
  },
  {
    id: 3,
    title: "Your Future, Our Responsibility",
    desc: "We provide hassle-free insurance solutions with maximum benefits for you and your family.",
    img: "/hero.png",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  //  Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-blue-700 pt-20 text-white overflow-hidden relative">
      <div className="relative w-full h-full">
        {/* Slider wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full flex flex-col md:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto"
            >
              {/* Left content */}
              <div className="flex-1 text-center md:text-left px-4">
                <p className="uppercase tracking-wide font-semibold text-sm">
                  Welcome to LifeSure
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4">
                  {slide.title}
                </h1>
                <p className="mt-6 text-gray-200 max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg">
                  {slide.desc}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:scale-105 hover:shadow-lg transition-transform duration-300 text-sm sm:text-base">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch Video
                  </button>
                  {/* <button className="bg-black text-white font-semibold px-6 py-3 rounded-full shadow hover:scale-105 hover:shadow-lg transition-transform duration-300 text-sm sm:text-base">
                    Learn More
                  </button> */}
                </div>
              </div>

              {/* Right image */}
              <div className="flex-1 flex justify-center md:justify-end px-4">
                <Image
                  src={slide.img}
                  alt="Hero"
                  width={500}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-6  pb-10">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-blue-700 shadow hover:bg-gray-200 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-blue-700 shadow hover:bg-gray-200 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
