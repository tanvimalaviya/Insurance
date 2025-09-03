import ServiceCard from '@/ui/ServiceCard'
import React from 'react'

const Services = () => {
  return (
    <section className='py-16 bg-white'> 
    <div className='max-w-7xl px-6  text-center'>
        <p className='text-blue-600 font-semibold'>Our Services</p>
        <h2 className='text-3xl md:text-4xl font-bold mt-2'>We Provide Best Services</h2>
        <p className='text-gray-600 mt-4 max-w-2xl mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.</p>
    </div>
            <ServiceCard/>
            <div className='flex justify-center'>
            
            <button className='   bg-blue-600 py-3 px-8 hover:bg-blue-950 rounded-full text-white'>
              <a href='/services'>
              More Services
              </a></button></div>
    </section>
  )
}

export default Services
