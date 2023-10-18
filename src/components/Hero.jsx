import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1280px] w-full h-[600px] mx-auto'>
        <div className='w-full'>
            <img className='object-cover h-[600px] w-full' src="https://images.pexels.com/photos/1860196/pexels-photo-1860196.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full md:max-w-[500px] text-center'>  
            <p className='text-lg font-medium bg-black/30 text-slate-300 p-4 rounded-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere obcaecati fuga at. Eum ab sint perspiciatis mollitia recusandae rerum optio perferendis aliquid id, illo non sapiente qui rem veritatis!</p>
        </div>
      
    </div>
  )
}

export default Hero
