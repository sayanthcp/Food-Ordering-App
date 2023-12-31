import React, {  useEffect, useState } from "react";
import Popup from "./Popup";
import Cardish from "./Cardish";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/features/AddCartSlice";

const SpecialDishes = () => {
  //redux state
   const {originalData} = useSelector(store => store.cart)

   const dispatch = useDispatch()

   //state
   const [showPopup, setShowPopup] = useState(false);
   const [popupItem, setPopupItem] = useState([]);

   useEffect(() => {
    dispatch(fetchData())
   },[])


  //show popup Handler
  const PopupHandler = (dishName) => {
    setShowPopup(true);
    setPopupItem(dishName);
  };

  return (
    <div className="w-full mt-10 md:py-20 px-8">
      <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
        Special Dishes
      </h1>
      <div className="my-4 p-2">
        <p className="text-white text-center max-w-[800px] flex mx-auto">
          So long as you have food in your mouth, you have solved all questions
          for the time being, Feasting my way through life, one bite at a time
          Unique and high-value food item made in small quantities from
          high-quality ingredients
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1280px] mx-auto">
          {/* special dish section */}
          {originalData?.map((item, index) => {
            const maxItem = 8;
            if (index < maxItem) {
              return (
                <Cardish
                  item={item}
                  PopupHandler={PopupHandler}
                  key={item?.idMeal}
                />
              );
            }
          })}
        </div>
      </div>

      {/* Popup */}
      <div>
        {showPopup && (
          <Popup setShowPopup={setShowPopup} popupItem={popupItem} />
        )}
      </div>
      
    </div>
  );
};

export default SpecialDishes;
