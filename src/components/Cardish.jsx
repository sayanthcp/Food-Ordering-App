import React from 'react'

const Cardish = ({item,PopupHandler}) => {
  return (
    <div className="cursor-pointer hover:scale-105 ease-in duration-300" key={item?.idMeal} onClick={() => PopupHandler(item?.strMeal)}>
      <img
        className="rounded-2xl shadow-2xl"
        src={item?.strMealThumb}
        alt=""
      />
      <p className="text-white/80 text-center my-2 text-xl font-bold">
        {item?.strMeal}
      </p>
    </div>
  );
}

export default Cardish
