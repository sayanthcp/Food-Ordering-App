import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c'

export const fetchData = createAsyncThunk('data/fetchdata', async () => {
    const response = await axios(url)
    return response.data
    
})


const initialState = {
  cartItems: [],
  originalData: []
};


 const addCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    //added to cart
    addtocart : (state, {payload}) => {
        state.cartItems.push(payload)

    },   
    //remove from cart  
    removefromcart : (state, {payload})=> {
       state.cartItems = state.cartItems.filter((item) => item.idMeal !== payload)

    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled,(state, action) => {
        state.originalData = action.payload.meals
    })
  }

});

export const { addtocart, removefromcart } = addCartSlice.actions;

export default addCartSlice.reducer;