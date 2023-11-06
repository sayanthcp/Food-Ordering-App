import React, {  useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { GiMagicSwirl } from "react-icons/gi";
import { useSelector } from "react-redux";


const Navbar = () => {
  //state
  const [nav, setNav] = useState(false);

  //redux state
  const stateValue = useSelector((state) => state.cart);

  //navbar handler
  const NavHandler = () => {
    setNav(!nav);
  };
  return (
    <div className="px-8 w-full h-20 items-center flex justify-between  absolute z-10">
      <Link to="/">
        <GiMagicSwirl size={50} className="md:hidden text-yellow-400" />
        <h1 className="text-4xl font-bold text-yellow-400 hidden md:block bg-black/30 px-6 py-2 rounded-full">
          Food Magic
        </h1>
      </Link>
      <div className="hidden md:block">
        <ul className="flex">
          <NavLink to="/" className={({isActive}) => isActive ? "mr-4 cursor-pointer text-lg text-yellow-300 border-b-[3px] border-yellow-300 pb-2" : "mr-4 cursor-pointer text-lg text-white hover:opacity-60"}>
              HOME
          </NavLink>
          <NavLink to="category" className={({isActive}) => isActive ? "mr-4 cursor-pointer text-lg text-yellow-300 border-b-[3px] border-yellow-300 pb-2" : "mr-4 cursor-pointer text-lg text-white hover:opacity-60"}>
            CATEGORY
          </NavLink>
          <NavLink to="your_cart" className={({isActive}) => isActive ? "mr-4 cursor-pointer text-lg text-yellow-300 border-b-[3px] border-yellow-300 pb-2 relative" : "mr-4 cursor-pointer text-lg text-white hover:opacity-60 relative"}>
              YOUR CART 
            {stateValue.cartItems.length !== 0 && <span className="px-1 bg-yellow-500 rounded-full ml-1">{stateValue.cartItems.length}</span>}
            
          </NavLink>
          <NavLink to="about" className={({isActive}) => isActive ? "mr-4 cursor-pointer text-lg text-yellow-300 border-b-[3px] border-yellow-300 pb-2" : "mr-4 cursor-pointer text-lg text-white hover:opacity-60"}>
              ABOUT US
          </NavLink>
        </ul>
      </div>

      {/* Menu Button */}
      <div
        onClick={NavHandler}
        className="block text-white md:hidden cursor-pointer z-10"
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineBars size={25} />}
      </div>

      {/*-------------- Mobile Menu ---------------*/}

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 w-full h-screen  bg-black/80 flex flex-col ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 w-full h-screen bg-black/80 flex flex-col ease-in duration-300 z-10"
        }
      >
        <ul className="w-full flex flex-col mt-12 items-center">
          <NavLink to="/" 
              onClick={NavHandler}
              className={({isActive}) => isActive ? "text-yellow-300 font-bold p-4 hover:opacity-60" : "text-gray-100 font-bold p-4 hover:opacity-60" }>
          
              HOME
          </NavLink>

          <NavLink to="category"
          onClick={NavHandler}
          className={({isActive}) => isActive ? "text-yellow-300 font-bold p-4 hover:opacity-60" : "text-gray-100 font-bold p-4 hover:opacity-60" }>
            
              CATEGORY         
          </NavLink>

          <NavLink to="your_cart"
          onClick={NavHandler}
          className={({isActive}) => isActive ? "text-yellow-300 font-bold p-4 hover:opacity-60" : "text-gray-100 font-bold p-4 hover:opacity-60" }>
            
              YOUR CART
              {stateValue.cartItems.length !== 0 && <span className="px-1 bg-white text-black rounded-full ml-1">{stateValue.cartItems.length}</span>}           
          </NavLink>

          <NavLink to="about"
          onClick={NavHandler}
          className={({isActive}) => isActive ? "text-yellow-300 font-bold p-4 hover:opacity-60" : "text-gray-100 font-bold p-4 hover:opacity-60" }> 
            
              ABOUT US
          </NavLink>

        </ul>
      </div>
      
      {/*-------------- Mobile Menu ---------------*/}
    </div>
  );
};

export default Navbar;
