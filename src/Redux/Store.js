import {configureStore} from '@reduxjs/toolkit'
import addCartSlice from '../Redux/features/AddCartSlice'

export const store = configureStore({

    reducer:{
       cart: addCartSlice,
    },
})