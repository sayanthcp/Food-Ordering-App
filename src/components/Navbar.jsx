import React, { useState } from 'react'
import {AiOutlineBars,AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Navbar = () => {
  //state
  const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1280px] px-2 w-full h-20 mx-auto items-center flex justify-between bg-gradient-to-t from-black to-black/80'> 
        <Link to='/'>
          <h1 className='text-2xl font-bold text-green-700 px-2'>Food Magic</h1>
        </Link>

        <div className='hidden md:block'>
          <ul className='flex'>
            <li className='mr-4 cursor-pointer text-white/70'>HOME</li>
           <Link to='/special'><li className='mr-4 cursor-pointer text-white/70'>SPECIAL</li></Link>
            <li className='mr-4 cursor-pointer text-white/70'>CATEGORY</li>
            <li className='mr-4 cursor-pointer text-white/70'>YOUR CART</li>
            <li className='mr-4 cursor-pointer text-white/70'>ABOUT US</li>

          </ul>
        </div>

        {/* Menu Button */}
        <div onClick={()=>setNav(!nav)} className='block text-white md:hidden cursor-pointer z-10'>
            { nav ? <AiOutlineClose size={25}/> : <AiOutlineBars size={25}/> }
        </div>
        
        {/* Mobile Menu */}
        <div className={nav ? 'md:hidden fixed left-0 top-20 w-full h-[90%]  bg-black/80 flex flex-col ease-in duration-300 z-10' : 
      'fixed left-[-100%] top-20 w-full h-[90%] bg-black/80 flex flex-col ease-in duration-300 z-10'}>
          <ul className='w-full flex flex-col items-center'>
            <Link to='/'><li className='text-gray-100 font-bold p-4'>HOME</li></Link>
            <Link to='/special'><li className='text-gray-100 font-bold p-4'>SPECIAL</li></Link>
            <Link to='/category'><li className='text-gray-100 font-bold p-4'>CATEGORY</li></Link>
            <Link to='/your-cart'><li className='text-gray-100 font-bold p-4'>YOUR CART</li></Link>
            <Link to='/about-us'><li className='text-gray-100 font-bold p-4'>ABOUT US</li></Link>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
