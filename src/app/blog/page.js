import Blog from '@/Components/Blog'
import React from 'react'

const page = () => {
  return (
    <div>
         <div
      className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] 
                 flex items-center justify-center text-center 
                 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/service3.png')" }} // 👈 tamaru image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/80 to-blue-300/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
          Our Blog
        </h1>
        <p className="text-white text-sm md:text-base">
          <span className="hover:text-yellow-300 cursor-pointer">Home</span> /{" "}
          <span className="hover:text-yellow-300 cursor-pointer">Pages</span> /{" "}
          <span className="text-yellow-300">Blog</span>
        </p>
      </div>
    </div>
    <Blog/>
    </div>
  )
}

export default page
