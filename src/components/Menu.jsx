import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { AllMenu } from '../context/AllMenuContext'
import SpecialDishes from './SpecialDishes'
import Category from './Category'

const Menu = () => {
  return (
    <div>
      <Navbar />
      <Hero />  
      <AllMenu>
        <SpecialDishes />
        <Category />
      </AllMenu>
    </div>
  )
}

export default Menu
