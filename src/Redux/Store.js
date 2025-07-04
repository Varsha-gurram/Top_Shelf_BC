import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filters/filterSlice';
import cartReducer from './filters/CartSlice'; 

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cart: cartReducer, 
  },
});

export default store;
