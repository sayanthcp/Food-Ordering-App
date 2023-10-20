import React from 'react'

const Popup = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-black/80 z-50 flex justify-center items-center'>
      <div className='w-[350px] md:w-[600px] h-[700px] md:h-[600px] bg-black p-4 text-white relative'>
        <div className='w-full h-[200px] relative'>
         <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="image"/>
         <p className='absolute bottom-2 left-2 bg-yellow-400 p-2 text-black font-bold rounded-lg'>item category</p>
        </div>
          <p className='text-center font-bold text-xl py-2 bg-gray-500'>item name</p>
          <p className='text-center font-medium text-lg py-2'>main ingredients</p>
          <ul className='grid grid-cols-2 px-2 gap-2'>
            <li className='bg-blue-600 px-2 py-2 rounded-md'>apple</li>
            <li className='bg-blue-600 px-2 py-2 rounded-md'>orange</li>
            <li className='bg-blue-600 px-2 py-2 rounded-md'>mango</li>
            <li className='bg-blue-600 px-2 py-2 rounded-md'>pineapple</li>  
          </ul>
          <div className='p-2 max-h-[300px] overflow-y-scroll'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum amet rerum modi dicta tenetur accusantium enim porro, ipsa vel dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi laudantium quia quidem neque accusamus nulla. Hic vero temporibus necessitatibus nostrum.</p>
          </div>
          <div className='absolute right-11 bottom-6'>
            <button className='bg-green-600 px-6 py-2 rounded-lg font-bold text-lg'>Order Now</button>
          </div>
      </div>

    </div>
  )
}

export default Popup
