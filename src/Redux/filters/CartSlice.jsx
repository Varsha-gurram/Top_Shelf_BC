import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementQuantity:(state,action)=>{
      const item=state.items.find(item=>item.id===action.payload);
      if(item) item.quantity+=1;
    },
    decrementQuantity:(state,action)=>{
      const item=state.items.find(item=>item.id===action.payload);
      if(item&&item.quantity>1) item.quantity-=1
     },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart,incrementQuantity,decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;
