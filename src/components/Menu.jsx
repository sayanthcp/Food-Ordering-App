import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import Category from "./Category";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import YourCart from "./YourCart";

const Menu = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="special" element={<SpecialDishes />} />

        <Route path="category" element={<Category />} />
        <Route path="your_cart" element={<YourCart />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Menu;
