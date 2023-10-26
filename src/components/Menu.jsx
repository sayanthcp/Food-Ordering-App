import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { AllMenu } from "../context/AllMenuContext";
import SpecialDishes from "./SpecialDishes";
import Category from "./Category";
import { Route, Routes } from "react-router-dom";
import About from "./About";
// import { ReducerContext } from "../context/ReducerContext";
import YourCart from "./YourCart";

const Menu = () => {
  return (
    <div>
      {/* <ReducerContext> */}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route
            path="special"
            element={
              <AllMenu>
                <SpecialDishes />
              </AllMenu>
            }
          />

          <Route
            path="category"
            element={
              <AllMenu>
                <Category />
              </AllMenu>
            }
          />
          <Route path="your_cart" element={<YourCart />} />
          <Route path="about" element={<About />} />
        </Routes>
      {/* </ReducerContext> */}
    </div>
  );
};

export default Menu;
