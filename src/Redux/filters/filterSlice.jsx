import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: "all",
  starin:null,
  priceRange: [0, 1000],
  rating: null,
  Sort:"default",
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.strain=null;
    },
    setStrain(state,action){
      state.strain=action.payload;
      state.category=null;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setSort:(state,action)=>{
      state.sort=action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setCategory, setPriceRange, setRating, resetFilters,setStrain,setSort } = filterSlice.actions;
export default filterSlice.reducer;
