import React, { useContext } from "react";
import { StateContext } from "../context/ReducerContext";
import { TbShoppingCartHeart } from "react-icons/tb";

const YourCart = () => {
  const stateValue = useContext(StateContext);
  return (
    <div className="w-full py-20 px-8">
      <div className="flex justify-center items-center  py-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mr-2">
          Your Cart
        </h1>
        <div className="text-3xl md:text-4xl font-bold text-white">
          <TbShoppingCartHeart />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1280px] mx-auto my-8">
          {stateValue.cartItems.map((item, index) => {
            return (
              <div key={index} className="relative">
                <img
                  className="whitespace-normal border-2"
                  src={item?.image}
                  alt=""
                />
                <h2 className="absolute bottom-0 left-0 right-0 text-center bg-black/50 text-white p-2">
                  {item?.name}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YourCart;
