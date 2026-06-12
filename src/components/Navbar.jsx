import React, { useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { GiMagicSwirl } from "react-icons/gi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const stateValue = useSelector((state) => state.cart);

  const NavHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="px-6 md:px-8 w-full h-20 items-center flex justify-between absolute z-10">
      {/* Modern Logo */}
      <Link to="/">
        <div className="flex items-center gap-3 group">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-2 rounded-full shadow-lg shadow-yellow-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <GiMagicSwirl
              size={32}
              className="text-white drop-shadow-lg"
            />
          </div>

          <div className="hidden md:flex flex-col">
            <span className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Food Magic
            </span>
            <span className="text-xs text-gray-300 tracking-[3px] uppercase">
              Taste the Magic
            </span>
          </div>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "mr-4 cursor-pointer text-lg text-yellow-300 border-b-[3px] border-yellow-300 pb-2"
                : "mr-4 cursor-pointer text-lg text-white hover:text-yellow-300 transition-all"
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="category"
            className={({ isActive }) =>
              isActive
                ? "mr-4 cursor-pointer text-lg text-yellow-300 border-b-[3px] border-yellow-300 pb-2"
                : "mr-4 cursor-pointer text-lg text-white hover:text-yellow-300 transition-all"
            }
          >
            CATEGORY
          </NavLink>

          <NavLink
            to="your_cart"
            className={({ isActive }) =>
              isActive
                ? "mr-4 cursor-pointer text-lg text-yellow-300 border-b-[3px] border-yellow-300 pb-2 relative"
                : "mr-4 cursor-pointer text-lg text-white hover:text-yellow-300 transition-all relative"
            }
          >
            YOUR CART
            {stateValue.cartItems.length !== 0 && (
              <span className="absolute -top-2 -right-5 min-w-[22px] h-[22px] flex items-center justify-center text-xs bg-yellow-400 text-black rounded-full font-bold">
                {stateValue.cartItems.length}
              </span>
            )}
          </NavLink>

          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive
                ? "mr-4 cursor-pointer text-lg text-yellow-300 border-b-[3px] border-yellow-300 pb-2"
                : "mr-4 cursor-pointer text-lg text-white hover:text-yellow-300 transition-all"
            }
          >
            ABOUT US
          </NavLink>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={NavHandler}
        className="block text-white md:hidden cursor-pointer z-20"
      >
        {nav ? <AiOutlineClose size={28} /> : <AiOutlineBars size={28} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 w-full h-screen bg-black/90 backdrop-blur-sm flex flex-col ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 w-full h-screen bg-black/90 backdrop-blur-sm flex flex-col ease-in duration-300 z-10"
        }
      >
        <ul className="w-full flex flex-col mt-12 items-center">
          <NavLink
            to="/"
            onClick={NavHandler}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold p-4 text-lg"
                : "text-white font-bold p-4 text-lg hover:text-yellow-300"
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="category"
            onClick={NavHandler}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold p-4 text-lg"
                : "text-white font-bold p-4 text-lg hover:text-yellow-300"
            }
          >
            CATEGORY
          </NavLink>

          <NavLink
            to="your_cart"
            onClick={NavHandler}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold p-4 text-lg"
                : "text-white font-bold p-4 text-lg hover:text-yellow-300"
            }
          >
            YOUR CART
            {stateValue.cartItems.length !== 0 && (
              <span className="ml-2 px-2 py-1 bg-yellow-400 text-black rounded-full text-xs font-bold">
                {stateValue.cartItems.length}
              </span>
            )}
          </NavLink>

          <NavLink
            to="about"
            onClick={NavHandler}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold p-4 text-lg"
                : "text-white font-bold p-4 text-lg hover:text-yellow-300"
            }
          >
            ABOUT US
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
