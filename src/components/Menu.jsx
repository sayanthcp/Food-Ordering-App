import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import YourCart from "./YourCart";
import Home from "../routes/Home";
import Footer from './Footer'


const Menu = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="category" element={<Category />} />
        <Route path="your_cart" element={<YourCart />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default Menu;
