import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const addCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //added items in cart
    addtocart: (state, action) => {
      state.cartItems.push(action.payload);
      console.log(action.payload);
    },

    //remove items from cart
    removefromcart: (state, action) => {
       
    },
  },
});

export const { addtocart, removefromcart } = addCartSlice.actions;

export default addCartSlice.reducer;
