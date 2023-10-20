import React, { useContext, useEffect, useState } from 'react'
import {AllMenuContext} from '../context/AllMenuContext'
import axios from 'axios'
import Cardish from './Cardish'

const Category = () => {
  //global state
  const AllMenu = useContext(AllMenuContext)
  //state
  const [category, setCategory] = useState([])
  const [filteredItem, setFilteredItem] = useState([])
  const [active, setActive] = useState('Beef')
  const [singleDish, setSingleDish] = useState([])


  const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php'
  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef'


  //get single item
  const singleCategory = () => {
    axios.get(url).then((res) => {
      setSingleDish(res.data.meals)
      console.log(res.data.meals);
    })
  }


  //get all category
  const AllCategory = () => {
    axios.get(URL).then((res) => {
      setCategory(res.data.categories)
    })
  }

  //show All the Category
  const showCategories = (category) => {
    setActive(category)
    setSingleDish([])
    const filteredDishes = AllMenu.filter((item) => {
      return item.strCategory === category  
    }).map((item,index) => {
      return(
        <Cardish item={item} index={index}/>
      )
    })
    setFilteredItem(filteredDishes)
  }

  //show single category dish
  const maxDish = 8
  const showSingleDish = singleDish.map((item,index) => {
    if(index < maxDish){
    return(
      <div key={index}>
         <img className='rounded-2xl shadow-xl' src={item?.strMealThumb} alt="" />
         <p className='text-white/80 text-center my-2 text-xl font-bold'>{item?.strMeal}</p>
      </div>
    )
      }
  })

  useEffect(() => {
    AllCategory()
    singleCategory()
  },[])

  return (
    <div className='w-full py-20 p-4 max-w-[1280px] mx-auto'>
      <h1 className='text-2xl md:text-3xl text-white font-bold text-center my-2'>Categories</h1>
      <p className='text-white text-center py-4'>Food is important for life. To be healthy and active, we should certainly have enough food. But the foods we eat should also be safe and rich in all the nutrients our body needs</p>
      {category?.map((item,index) => {
        return(
          <>
           <button key={index} onClick={()=>showCategories(item?.strCategory)} 
           className={item.strCategory === active ? 
            'px-6 py-2 text-lg text-white font-bold bg-green-400 rounded-xl shadow-xl mx-2 my-4  item-center' 
           : 'px-6 py-2 text-lg text-white font-bold bg-yellow-400 rounded-xl shadow-xl mx-2 my-4  item-center hover:opacity-60'}>{item?.strCategory}</button>
          </>
        )
      })}
      
       <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-8 max-w-[1280px] mx-auto'>
        {showSingleDish}
        {showSingleDish !=0 || filteredItem !=0 ? filteredItem : 
        <div className='col-span-2 md:col-span-3 xl:col-span-4 text-center'>
         <h2 className='text-3xl text-red-500 font-bold'>Sorry, No Dishes Found</h2>
         <h3 className='text-xl text-white py-2'>Please choose another dishes</h3>
        </div>}
       </div>
   
    </div>
  )
}

export default Category
