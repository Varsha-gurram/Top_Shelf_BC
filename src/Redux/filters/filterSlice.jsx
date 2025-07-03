import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: null,
  priceRange: [0, 1000],
  rating: null,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setCategory, setPriceRange, setRating, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
