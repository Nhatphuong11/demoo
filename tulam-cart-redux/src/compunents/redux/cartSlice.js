import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartAr: [],
    },
    reducers:{
        addCart:(state, action) =>{
            const productInCart = state.cartAr.find(
                (p) => p.id === action.payload.id
              );
              if (!productInCart) {
                return {
                  cartAr: [...state.cartAr, action.payload],
                };
              }
        },
        deleteCart:(state, action) =>{
            state.cartAr= state.cartAr.filter((e)=> e.id !== action.payload);
        }
    }
})
export const {addCart , deleteCart} = cartSlice.actions;
export default cartSlice.reducer;