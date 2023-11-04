import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { removefromcart } from "../Redux/features/AddCartSlice";
import { useDispatch } from "react-redux";

const YourCartItems = ({ item, index }) => {
  
  const dispatch = useDispatch();

  return (
    <div key={index} className="relative">
      <img
        className="whitespace-normal border-2"
        src={item?.strMealThumb}
        alt=""
      />
      <h2 className="absolute bottom-0 left-0 right-0 text-center bg-black/50 text-white p-2 font-bold text-lg">
        {item?.strMeal}
      </h2>
      <div>
        <button onClick={() => dispatch(removefromcart(item?.idMeal))}>
          <AiFillCloseCircle
            size={25}
            className="bg-white absolute top-1 right-1 rounded-full text-black cursor-pointer hover:text-red-600"
          />
        </button>
      </div>
    </div>
  );
};

export default YourCartItems;
