import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { AllMenu } from '../context/AllMenuContext'
import SpecialDishes from './SpecialDishes'
import Category from './Category'
import { Route, Routes } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Hero /> }/> 
        <Route
         path='special'
         element={<AllMenu>
                    <SpecialDishes />
                  </AllMenu>}
        />
         
        <Route
         path='category'
         element={<AllMenu>
                    <Category />
                  </AllMenu>}
        />
      </Routes>
    </div>
  )
}

export default Menu
