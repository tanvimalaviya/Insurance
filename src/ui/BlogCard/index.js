import { Calendar, MessageCircle, User } from "lucide-react";

const cardData = [
  {
    id: 1,
    image: "/service1.png",
    category: "Business",
    author: "Martin.C",
    date: "30 Dec 2025",
    comments: 6,
    title: "Which allows you to pay down insurance bills",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
  },
  {
    id: 2,
    image: "/service2.png",
    category: "Business",
    author: "Martin.C",
    date: "30 Dec 2025",
    comments: 6,
    title: "Leverage agile frameworks to provide",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
  },
  {
    id: 3,
    image: "/service3.png",
    category: "Business",
    author: "Martin.C",
    date: "30 Dec 2025",
    comments: 6,
    title: "Leverage agile frameworks to provide",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
  },
];

export default function BlogCard() {
  return (
    <section className="py-12 px-6 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 
   gap-8">
        {cardData.map((card) => (
          <div
            key={card.id}
            className=" group group-hover:bg-white bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <div className="flex relative group-hover:bg-blue-100 justify-center bg-white p-6">
              <img
                src={card.image}
                alt={card.title}
                className="h-40 object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute right-0 bottom-0 bg-blue-600 text-white text-sm px-3 py-1 rounded-tl-lg">{card.category}</span>
            </div>

            {/* Content */}
            <div className="p-6 relative group-hover:bg-white bg-gray-50">
              {/* Category Badge */}
              {/* <span className="absolute top-0 right-0 bg-blue-600 text-white text-sm px-3 py-1 rounded-bl-lg">
                {card.category}
              </span> */}

              {/* Meta info */}
              <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <User size={16} /> {card.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} /> {card.date}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle size={16} /> {card.comments} Comments
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>

              {/* Read More */}
              <a
                href="#"
                className="text-blue-600 font-medium hover:underline flex items-center gap-1"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
