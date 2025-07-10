import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: "all",
  strain: null,
  priceRange: [0, 1000],
  rating: null,
  sort: "default",
  searchTerm: "", 
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.strain = null;
    },
    setStrain: (state, action) => {
      state.strain = action.payload;
      state.category = null;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setSearchTerm: (state, action) => { 
      state.searchTerm = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setCategory,
  setStrain,
  setPriceRange,
  setRating,
  setSort,
  setSearchTerm, 
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
