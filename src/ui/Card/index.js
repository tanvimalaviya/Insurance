import React from "react";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="group bg-white rounded-xl shadow p-4 pt-0 text-center hover:bg-blue-600 hover:text-white hover:shadow-lg transition">
      {/* Icon Box */}
      <div className="relative bg-gray-50 rounded-lg mb-4 p-4 w-15 group overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 bg-blue-950 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>

        {/* Icon */}
        <span className="relative z-10  text-blue-600 group-hover:text-white transition">
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-200 transition">
        {description}
      </p>

      {/* Button */}
      {/* <button className="bg-blue-600 text-white px-5 py-2 group-hover:bg-white group-hover:text-blue-600 rounded-full font-semibold transition">
        Learn More
      </button> */}
    </div>
  );
}
