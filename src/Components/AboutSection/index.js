"use client";
import Image from "next/image";
//import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CountUp from "react-countup";

export default function AboutSection() {
  //useEffect to set animation duration
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* Left Side */}
        <div
          data-aos="fade-right"
          data-aos-duration="2500"
          className="bg-white rounded-xl shadow p-8"
        >
          <h4 className="text-blue-600 font-semibold mb-2">
            About Our Company
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            High Range of <br /> Exploring Protection
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            debitis sint tempora. Corporis consequatur illo blanditiis
            voluptates aperiam quos aliquam totam aliquid rem explicabo.
          </p>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            praesentium recusandae eligendi modi hic.
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-gray-700">
              <span className="text-blue-600 mr-2">✔</span>
              We can save your money.
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-blue-600 mr-2">✔</span>
              Production or trading of good
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-blue-600 mr-2">✔</span>
              Our life insurance is flexible
            </li>
          </ul>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-full  transition duration-700 ease-in-out hover:bg-blue-950 ">
            <a href="/about">More Information</a>
          </button>
        </div>

        {/* Right Side */}
        <div
          data-aos="fade-left"
          data-aos-duration="2500"
          className="bg-white rounded-xl shadow p-8 flex flex-col items-center"
        >
          <div className="w-full flex justify-center mb-6">
            <Image
              src="/about-1.png"
              alt="Company Illustration"
              width={400}
              height={250}
              className="rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 w-full text-center">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-2xl font-bold text-blue-600">
                <CountUp start={0} end={129} duration={4} />+
              </h3>
              <p className="text-gray-700">Insurance Policies</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-2xl font-bold text-blue-600">
                <CountUp start={0} end={99} duration={4}></CountUp>+
                </h3>
              <p className="text-gray-700">Awards WON</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-2xl font-bold text-blue-600">
                 <CountUp start={0} end={556} duration={4}></CountUp>+
                 </h3>
              <p className="text-gray-700">Skilled Agents</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-2xl font-bold text-blue-600">
                 <CountUp start={0} end={967} duration={4}></CountUp>+
                 </h3>
              <p className="text-gray-700">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
