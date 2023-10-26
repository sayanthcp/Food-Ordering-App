import React, {  useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GiMagicSwirl } from "react-icons/gi";
import { useSelector } from "react-redux";


const Navbar = () => {
  //state
  const [nav, setNav] = useState(false);

  const stateValue = useSelector((state) => state.cart);

  //navbar handler
  const NavHandler = () => {
    setNav(!nav);
  };
  return (
    <div className="px-8 w-full h-20 items-center flex justify-between  absolute z-10">
      <Link to="/">
        <GiMagicSwirl size={50} className="md:hidden text-yellow-400" />
        <h1 className="text-4xl font-bold text-yellow-300 px-2 hidden md:block">
          Food Magic{" "}
        </h1>
      </Link>
      <div className="hidden md:block">
        <ul className="flex">
          <Link to="/">
            <li className="mr-4 cursor-pointer text-white">HOME</li>
          </Link>
          <Link to="special">
            <li className="mr-4 cursor-pointer text-white">SPECIAL</li>
          </Link>
          <Link to="category">
            <li className="mr-4 cursor-pointer text-white">CATEGORY</li>
          </Link>
          <Link to="your_cart">
            <li className="mr-4 cursor-pointer text-white">YOUR CART <span className="text-white bg-red-500 rounded-3xl px-1 py-1">{stateValue.cartItems?.length !== 0 ? (stateValue.cartItems?.length) : null}</span></li>
          </Link>
          <Link to="about">
            <li className="mr-4 cursor-pointer text-white">ABOUT US</li>
          </Link>
        </ul>
      </div>

      {/* Menu Button */}
      <div
        onClick={NavHandler}
        className="block text-white md:hidden cursor-pointer z-10"
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineBars size={25} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 w-full h-screen  bg-black/80 flex flex-col ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 w-full h-screen bg-black/80 flex flex-col ease-in duration-300 z-10"
        }
      >
        <ul className="w-full flex flex-col items-center">
          <Link to="/">
            <li
              onClick={NavHandler}
              className="text-gray-100 font-bold p-4 hover:opacity-60"
            >
              HOME
            </li>
          </Link>
          <Link to="special">
            <li
              onClick={NavHandler}
              className="text-gray-100 font-bold p-4 hover:opacity-60"
            >
              SPECIAL
            </li>
          </Link>
          <Link to="category">
            <li
              onClick={NavHandler}
              className="text-gray-100 font-bold p-4 hover:opacity-60"
            >
              CATEGORY
            </li>
          </Link>
          <Link to="your_cart">
            <li
              onClick={NavHandler}
              className="text-gray-100 font-bold p-4 hover:opacity-60"
            >
              YOUR CART
              <span className="text-red-500 bg-white rounded-full px-1 py-1 ml-1"> {stateValue.cartItems?.length !== 0 ? (stateValue.cartItems?.length) : null}</span>
            </li>
          </Link>
          <Link to="about"> 
            <li
              onClick={NavHandler}
              className="text-gray-100 font-bold p-4 hover:opacity-60"
            >
              ABOUT US
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
