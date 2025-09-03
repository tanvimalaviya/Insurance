import React from "react";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="group bg-white rounded-xl shadow p-4 pt-0 text-center hover:bg-blue-600 hover:text-white hover:shadow-lg transition">
      
      {/* Icon Box */}
      <div className="bg-gray-50 group-hover:bg-blue-950 rounded-lg mb-4 p-4 w-15">
        <span className="   group-hover:text-white transition">
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
