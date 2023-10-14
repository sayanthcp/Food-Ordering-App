import React, { useState } from 'react'
import {AiOutlineBars,AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Navbar = () => {
  //state
  const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1280px] px-2 shadow-lg w-full h-20 items-center flex justify-between'> 
        <Link to='/'>
          <h1 className='text-2xl font-bold text-zinc-500 px-2'>Food Magic</h1>
        </Link>

        <div className='hidden md:block'>
          <ul className='flex'>
            <li className='mr-4 cursor-pointer'>HOME</li>
            <li className='mr-4 cursor-pointer'>SPECIAL</li>
            <li className='mr-4 cursor-pointer'>CATEGORY</li>
            <li className='mr-4 cursor-pointer'>YOUR CART</li>
            <li className='mr-4 cursor-pointer'>ABOUT US</li>

          </ul>
        </div>

        {/* Menu Button */}
        <div onClick={()=>setNav(!nav)} className='block md:hidden cursor-pointer z-10'>
            { nav ? <AiOutlineClose size={25}/> : <AiOutlineBars size={25}/> }
        </div>
        
        {/* Mobile Menu */}
        <div className={nav ? 'md:hidden fixed left-0 top-20 w-full h-[90%] flex flex-col ease-in duration-300 z-10' : 
      'fixed left-[-100%] top-20 w-full h-[90%] flex flex-col ease-in duration-300 z-10'}>
          <ul className='w-full flex flex-col items-center'>
            <li className='border-b-2 p-4'>HOME</li>
            <li className='border-b-2 p-4'>SPECIAL</li>
            <li className='border-b-2 p-4'>CATEGORY</li>
            <li className='border-b-2 p-4'>YOUR CART</li>
            <li className='p-4'>ABOUT US</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
