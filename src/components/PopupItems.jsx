import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { DispatchContext } from "../context/ReducerContext";
import { useContext } from "react";

const PopupItems = ({ item, index, ClosePopupHandler }) => {
  //global context
  const dispatch = useContext(DispatchContext)
  return (
    <div
      key={index}
      className="fixed top-0 bottom-0 left-0 right-0 bg-black/80 z-50 flex justify-center items-center"
    >
      <div className="w-[350px] md:w-[600px] h-[700px] md:h-[700px] bg-black p-4 text-white rounded-lg relative">
        <div className="w-full h-[200px] relative">
          <img
            className="w-full h-full object-cover"
            src={item?.strMealThumb}
            alt="image"
          />
          <p className="absolute bottom-2 left-2 bg-yellow-400 p-2 text-black font-bold rounded-lg">
            {item?.strCategory}
          </p>
        </div>
        <p className="text-center font-bold text-xl py-2 bg-gray-500">
          {item?.strMeal}
        </p>
        <p className="text-center font-medium text-lg py-2">Main Ingredients</p>
        <ul className="grid grid-cols-2 px-2 gap-2">
          <li className="bg-blue-600 px-2 py-2 rounded-xl font-bold text-center">
            {item?.strIngredient1}
          </li>
          <li className="bg-blue-600 px-2 py-2 rounded-xl font-bold text-center">
            {item?.strIngredient2}
          </li>
          <li className="bg-blue-600 px-2 py-2 rounded-xl font-bold text-center">
            {item?.strIngredient3}
          </li>
          <li className="bg-blue-600 px-2 py-2 rounded-xl font-bold text-center">
            {item?.strIngredient4}
          </li>
        </ul>
        <div className="p-2 max-h-[180px] overflow-y-scroll py-4">
          <p>{item?.strInstructions}</p>
        </div>
        <div className="absolute right-11 bottom-6">
          <button
            onClick={() =>
              dispatch({
                type: 'order_now',
                payload: {
                  image: item.strMealThumb,
                  name: item.strMeal,
                },
              })
            }
            className="bg-green-600 px-6 py-2 rounded-lg font-bold text-lg hover:opacity-80"
          >
            Order Now
          </button>
        </div>
        <div className="absolute top-2 right-2" onClick={ClosePopupHandler}>
          <AiFillCloseCircle
            size={30}
            className="bg-white rounded-full text-black cursor-pointer hover:text-red-600"
          />
        </div>
      </div>
    </div>
  );
};

export default PopupItems;
