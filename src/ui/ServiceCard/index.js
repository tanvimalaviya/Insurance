import React from "react";
import Image from "next/image";

const servicedata = [
  {
    id: 1,
    image: "/service1.png",
    title: "Life Insurance",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "Read More",
  },
  {
    id: 2,
    image: "/service2.png",
    title: "Health Insurance",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "Read More",
  },
  {
    id: 3,
    image: "/service3.png",
    title: "Car Insurance",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "Read More",
  },
  {
    id: 4,
    image: "/service4.png",
    title: "Home Insurance",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "Read More",
  },
];

const ServiceCard = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {servicedata.map(({ id, image, title, description, button }) => (
        <div
          key={id}
          className=" rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300 ease-in-out group hover:text-white "
        >
          {/* Top Image */}
          <div className="w-52 h-32 relative mb-4 group-hover:bg-blue-100">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
          <div className="bg-gray-100 shadow-md  p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300 ease-in-out group-hover:bg-blue-600">

          {/* Title */}
          <h3 className="text-lg font-semibold mb-2">{title}</h3>

          {/* Description */}
          <p className="text-sm mb-4">{description}</p>

          {/* Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full group-hover:bg-white group-hover:text-blue-600 transition">
            {button}
          </button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;




{/* <div className="">
        <div className="image">
          <div className="icon-div"></div>
        </div>

        <div className="service-contenet">
          <div className="service-content-inner">
            <a>Home insurance</a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, eum!
            </p>
            <a>Read More</a>
          </div>
        </div>
      </div> */}
