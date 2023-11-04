import React from "react";
import PopupItems from "./PopupItems";
import { useSelector } from "react-redux";

const Popup = ({ ClosePopupHandler, popupItem }) => {
  //redux data
  const { originalData } = useSelector((state) => state.cart);

  const popUp = originalData
    ?.filter((item) => item?.strMeal === popupItem)
    .map((item, idMeal) => {
      return (
        <PopupItems
          item={item}
          key={idMeal}
          ClosePopupHandler={ClosePopupHandler}
        />
      );
    });

  return <div>{popUp}</div>;
};

export default Popup;
