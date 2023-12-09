'use client';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/CartSlice';

export default configureStore({
  reducer: {
    cartCenter: cartReducer,
  },
});