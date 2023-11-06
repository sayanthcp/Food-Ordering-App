import React from "react";
import PopupItems from "./PopupItems";
import { useSelector } from "react-redux";

const Popup = ({ setShowPopup, popupItem }) => {
  //redux data
  const { originalData } = useSelector((state) => state.cart);

  const popUp = originalData
    ?.filter((item) => item?.strMeal === popupItem)
    .map((item, idMeal) => {
      return (
        <PopupItems
          item={item}
          key={idMeal}
          setShowPopup={setShowPopup}
        />
      );
    });

  return <div>{popUp}</div>;
};

export default Popup;
