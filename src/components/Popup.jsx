import React, { useContext } from "react";
import { AllMenuContext } from "../context/AllMenuContext";
import PopupItems from "./PopupItems";

const Popup = ({ ClosePopupHandler, popupItem }) => {
  //global state
  const allMenu = useContext(AllMenuContext);

  const popUp = allMenu
    ?.filter((item) => item?.strMeal === popupItem)
    .map((item, index) => {
      return (
        <PopupItems
          item={item}
          key={index}
          ClosePopupHandler={ClosePopupHandler}
        />
      );
    });

  return <div>{popUp}</div>;
};

export default Popup;
