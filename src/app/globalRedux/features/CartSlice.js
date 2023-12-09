'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: []
};


export const cartSlice = createSlice({
  name: 'cartCenter',
  initialState,

  reducers: {
  getCartItemsFromLocalStorage: (state)=>{
    state.cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  },
   handleCartData: (state, action)=>{
    var currentCart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    var index = currentCart.find(item => item.id == action.payload.id)

    if(index){
      index.count = !index.count ? 1 : index.count + 1
    } else {
      currentCart = [...currentCart, action.payload];
    } 

    localStorage.setItem("cart", JSON.stringify(currentCart));
    state.cart = currentCart
   },
   handleRemoveItemFromCart: (state, action)=>{
    const newCart = state.cart.filter(item => item.id !== action.payload.id);
    localStorage.setItem("cart", JSON.stringify(newCart))
    state.cart = newCart
  }
  },
});

export const { getCartItemsFromLocalStorage, handleCartData, handleRemoveItemFromCart } = cartSlice.actions;
export const cart_data = (state) => state.cartCenter.cart;

export default cartSlice.reducer;