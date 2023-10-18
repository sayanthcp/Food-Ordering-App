import React, { useContext } from 'react'
import { AllMenuContext } from '../context/AllMenuContext'

const SpecialDishes = () => {
    const AllMenu = useContext(AllMenuContext)
    
  return (
    <div className='w-full max-w-[1280px] mx-auto my-8 py-2'>
        <h1 className='text-2xl md:text-3xl font-bold text-white text-center'>Special Dishes</h1>
        <div className='my-4 p-2'>
          <p className='text-white text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam vitae soluta quisquam distinctio excepturi ad veritatis dignissimos quo aliquam.</p>
        </div>
        <div>
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
            {AllMenu?.map((item,index) => {
              const maxItem = 8
              if(index < maxItem){
                return(
                  <div key={index}>
                    <img className='rounded-2xl shadow-2xl' src={item?.strMealThumb} alt="/" />
                    <p className='text-white text-center my-2'>{item?.strMeal}</p>
                  </div>
                )

              }
            })}
          </div>
        </div>
      
    </div>
  )
}

export default SpecialDishes
