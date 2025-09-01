"use client";
import TestimoinalCard from "@/ui/TestimonialCard";
import React from "react";

const Testimonial = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative">
        {/* Header */}
        <p className="text-blue-600 text-md font-semibold uppercase">
          Testimonial
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-gray-900">
          What Our Customers Are Saying
        </h2>
        <p className="text-gray-500 mt-6 leading-relaxed max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          adipisci facilis cupiditate recusandae aperiam temporibus corporis
          itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
          obcaecati, ipsam mollitia hic.
        </p>
        <TestimoinalCard/>
      </div>
    </section>
  );
};

export default Testimonial;
