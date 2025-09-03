"use client";
import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "@/../public/animation/error.json"; // json path

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 pt-20">
      {/* Animation */}
      <div className="w-[400px] md:w-[600px]">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>

      {/* Text */}
      <h2 className="text-3xl font-bold mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-600 mt-2">The page you are looking for doesn’t exist.</p>

      {/* Button */}
      <a
        href="/"
        className="mt-6 mb-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
      >
        Back to Home
      </a>
    </div>
  );
}
