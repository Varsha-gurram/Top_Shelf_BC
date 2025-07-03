import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filters/filterSlice';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
});

export default store;
