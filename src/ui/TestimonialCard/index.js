// "use client";
// import { useState } from "react";
// import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

// const testimonials = [
//   {
//     id: 1,
//     image: "/testimonial1.jpg",
//     name: "Client Name",
//     profession: "Profession",
//     rating: 5,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus quisquam.",
//   },
//   {
//     id: 2,
//     image: "/testimonial2.jpg",
//     name: "Client Name",
//     profession: "Profession",
//     rating: 4,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus quisquam.",
//   }, {
//     id: 3,
//     image: "/testimonial3.jpg",
//     name: "Client Name",
//     profession: "Profession",
//     rating: 4,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus quisquam.",
//   },
// ];

// export default function TestimonialCard() {
//   const [index, setIndex] = useState(0);

//   const prevSlide = () => {
//     setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto py-10 relative">
//       {/* Arrow Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-700"
//       >
//         <FaArrowLeft />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-700"
//       >
//         <FaArrowRight />
//       </button>

//       {/* Testimonial Card */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-14">
//         {testimonials.slice(index, index + 2).map((t) => (
//           <div
//             key={t.id}
//             className="flex bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
//           >
//             {/* Image */}
//             <div className="w-1/3">
//               <img
//                 src={t.image}
//                 alt={t.name}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             {/* Content */}
//             <div className="w-2/3 p-4">
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {t.name}
//               </h3>
//               <p className="text-sm text-gray-500">{t.profession}</p>
//               {/* Rating */}
//               <div className="flex text-yellow-500 my-2">
//                 {Array.from({ length: 5 }, (_, i) => (
//                   <FaStar
//                     key={i}
//                     className={i < t.rating ? "text-yellow-500" : "text-gray-300"}
//                   />
//                 ))}
//               </div>
//               <p className="text-gray-600 text-sm">{t.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    image: "/testimonial1.jpg",
    name: "Client One",
    profession: "Profession",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus quisquam.",
  },
  {
    id: 2,
    image: "/testimonial2.jpg",
    name: "Client Two",
    profession: "Profession",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus quisquam.",
  },
  {
    id: 3,
    image: "/testimonial3.jpg",
    name: "Client Three",
    profession: "Profession",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus quisquam.",
  },
];

export default function TestimonialCard() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-10 relative">
      {/* Arrow Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-700"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-700"
      >
        <FaArrowRight />
      </button>

      {/* Testimonial Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-14">
        {[
          testimonials[index],
          testimonials[(index + 1) % testimonials.length], // always next card, loop back to start
        ].map((t) => (
          <div
            key={t.id}
            className="flex bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="w-1/3">
              <img
                src={t.image}
                alt={t.name}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="w-2/3 p-4">
              <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.profession}</p>
              {/* Rating */}
              <div className="flex text-yellow-500 my-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={i < t.rating ? "text-yellow-500" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm">{t.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
