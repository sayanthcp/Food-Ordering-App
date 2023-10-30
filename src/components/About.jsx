import React from 'react'

const About = () => {
  return (
    <div className='py-24'>
      <h1 className='text-2xl md:text-3xl font-bold text-white text-center'>ABOUT US</h1>
      <div className='p-4 lg:flex justify-evenly items-center grid lg:grid-cols-2 md:gap-4 lg:py-12'>
          <div className='text-lg lg:text-xl text-yellow-300 text-center pb-8 lg:max-w-[700px]'>
            <p>" We believe in the commitment to our community and in fostering long term relationships with local farmers and fishermen. Our menus reflect these connections, featuring local, seasonal produce and sustainably sourced seafood and meats "</p>
          </div>

          <div>
             <img className='rounded-xl object-cover lg:max-w-[600px] lg:max-h-[700px] hover:scale-105 ease-in-out duration-500' src="https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </div>
      </div>
      
    </div>
  )
}

export default About