import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

const initialState = {
    cartItems : data,
}

const productSlice = createSlice({
    name: "carts",
    initialState,
    reducers :{
        
    }
})

export default productSlice.reducer