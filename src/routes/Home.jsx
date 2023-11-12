import React from 'react'
import Hero from '../components/Hero'
import SpecialDishes from '../components/SpecialDishes'
import Category from '../components/Category'
import YourCart from '../components/YourCart'
import About from '../components/About'


const Home = () => {
  return (
    <div>
      <Hero/>
      <SpecialDishes/>
      <Category />
      <YourCart />
      <About />
    </div>
  )
}

export default Home
