import React from "react";
import Card from "../../ui/Card"
import { Handshake, DollarSign, Target, Headphones } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-blue-600 font-semibold">Our Features</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Insurance Provide you a Better Future
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          adipisci facilis cupiditate recusandae aperiam temporibus corporis
          itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
          obcaecati, ipsam mollitia hic.
        </p>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card
           data-aos='fade-right' data-aos-duration='2500'
            icon={<Handshake className="w-8 h-8" />}
            title="Trusted Company"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur..."
          />
          <Card
            icon={<DollarSign className="w-8 h-8" />}
            title="Anytime Money Back"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur..."
          />
          <Card
            icon={<Target className="w-8 h-8" />}
            title="Flexible Plans"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur..."
          />
          <Card
            icon={<Headphones className="w-8 h-8" />}
            title="24/7 Fast Support"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur..."
          />
        </div>
      </div>
    </section>
  );
}
