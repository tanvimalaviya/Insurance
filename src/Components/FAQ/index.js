"use client";
import { useEffect, useState, useRef } from "react";
//import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "What happens during Freshers' Week?",
    answer:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
  },
  {
    question: "What is the transfer application process?",
    answer:
      "The transfer application process typically involves submitting transcripts, recommendation letters, and a statement of purpose to the admissions office.",
  },
  {
    question: "Why should I attend community college?",
    answer:
      "Community colleges provide affordable education, smaller class sizes, and opportunities to transfer to larger universities.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]); // content height measure karva

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div data-aos="fade-right" data-aos-duration="2500">
          <p className="text-blue-600 font-medium">Some Important FAQ's</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Common Frequently <br /> Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center p-4 text-left font-medium transition ${
                    openIndex === index
                      ? "bg-blue-600 text-white"
                      : "text-blue-600"
                  }`}
                >
                  <span>Q: {faq.question}</span>
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>

                {/* Accordion Content with auto height */}
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  style={{
                    maxHeight:
                      openIndex === index
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : "0px",
                  }}
                  className="transition-all duration-500 ease-in-out overflow-hidden bg-white text-gray-600"
                >
                  <div className="p-4">A: {faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration Section */}
        <div
          data-aos="fade-left"
          data-aos-duration="2500"
          className="flex justify-center"
        >
          <img
            src="/hero.png"
            alt="FAQ Illustration"
            className="max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
