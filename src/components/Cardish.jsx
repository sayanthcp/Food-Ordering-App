import React from 'react'

const Cardish = ({item,index}) => {
  return (
    <div 
    key={index}>
     <img className='rounded-2xl shadow-2xl' src={item?.strMealThumb} alt="/" />
     <p className='text-white/80 text-center my-2 text-xl font-bold'>{item?.strMeal}</p>
    </div>
  )
}

export default Cardish
