import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-blue-600 font-semibold">Contact Us</p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          If you have any comments please apply now
        </h1>

        {/* Content Wrapper */}
        <div className="mt-10 grid md:grid-cols-2 gap-10 items-center text-left">
          {/* Left image */}
          <div className="flex justify-center">
            <img
              src="/contactimg.png"
              alt="contact image"
              className="max-w-sm md:max-w-md"
            />
          </div>

          {/* Right Content */}
          <div className=" p-8 rounded-xl ">
            <h4 className="text-xl font-semibold text-blue-600 mb-3">
              Send Your Message
            </h4>
            <p className="text-gray-600 text-sm mb-6">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax &amp; PHP in a few minutes. Just
              copy and paste the files, add a little code and you're done.{" "}
              <a href="#" className="text-blue-500 font-medium hover:underline">
                Download Now.
              </a>
            </p>

            {/* Contact Form */}
            <form className="space-y-4 ">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3  bg-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full p-3 bg-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Your Project"
                  className="w-full p-3 bg-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 bg-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {/* Message */}
              <textarea
                placeholder="Leave a message here"
                rows="4"
                className="w-full p-3 bg-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Information div */}
        <div>
            <div>
                <FaLocationDot />
                <h4>Address</h4>
                <p>123 Street New York.USA</p>
            </div>

            <div>
                
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
