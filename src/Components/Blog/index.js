import BlogCard from '@/ui/BlogCard'
import React from 'react'

const Blog = () => {
  return (
    <section className='py-16 bg-white'>
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className='text-blue-600 font-semibold'>From Blog</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">News And Updates</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.</p>
        </div>
        <BlogCard/>
    </section>
  )
}

export default Blog
