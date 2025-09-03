import React from 'react'
import { FaFrownOpen } from 'react-icons/fa'

const page = () => {
  return (
    <div>
      <div
      className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] 
                 flex items-center justify-center text-center 
                 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/service3.png')" }} // 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/80 to-blue-300/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
         404 Pages
        </h1>
        <p className="text-white text-sm md:text-base">
          <span className="hover:text-yellow-300 cursor-pointer">Home</span> /{" "}
          <span className="hover:text-yellow-300 cursor-pointer">Pages</span> /{" "}
          <span className="text-yellow-300">404 Page</span>
        </p>
      </div>
    </div>


    <div className='p-12'>
    <FaFrownOpen />
    <h1>404</h1>
    <h1>Page Not Found</h1>
    <p>We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
    <a href='/'>Go Back To Home</a>
    </div>



    </div>
  )
}

export default page
