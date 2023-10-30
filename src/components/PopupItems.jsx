import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addtocart } from "../Redux/features/AddCartSlice";

const PopupItems = ({
  item: {
    idMeal,
    strMeal,
    strMealThumb,
    strCategory,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strInstructions,
  },
  ClosePopupHandler,
}) => {
  const dispatch = useDispatch();

  return (
    <div
      key={idMeal}
      className="fixed top-0 bottom-0 left-0 right-0 bg-black/80 z-50 flex justify-center items-center"
    >
      <div className="w-[350px] md:w-[600px] h-[700px] bg-black p-4 text-white rounded-lg relative">
        <div className="w-full h-[200px] relative">
          <img
            className="w-full h-full object-cover"
            src={strMealThumb}
            alt="image"
          />
          <p className="absolute bottom-2 left-2 bg-yellow-400 p-2 text-black font-bold rounded-lg">
            {strCategory}
          </p>
        </div>
        <p className="text-center font-bold text-xl py-2 bg-gray-500">
          {strMeal}
        </p>
        <p className="text-center font-medium text-lg py-2">Main Ingredients</p>
        <ul className="grid grid-cols-2 px-2 gap-2">
          <li className="bg-blue-600 px-2 py-2 rounded-xl font-bold text-center">
            {strIngredient1}
          </li>
          <li className="bg-blue-600 px-2 py-2 rounded-xl font-bold text-center">
            {strIngredient2}
          </li>
          <li className="bg-blue-600 px-2 py-2 rounded-xl font-bold text-center">
            {strIngredient3}
          </li>
          <li className="bg-blue-600 px-2 py-2 rounded-xl font-bold text-center">
            {strIngredient4}
          </li>
        </ul>
        <div className="p-2 max-h-[180px] overflow-y-scroll py-4">
          <p>{strInstructions}</p>
        </div>
        <div className="absolute right-11 bottom-6">
          <button
            onClick={() =>
              dispatch(
                addtocart({
                  strMeal,
                  strMealThumb,
                  idMeal,
                })
              )
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
