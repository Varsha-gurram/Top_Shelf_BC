import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload.id || action.payload.productId;
      const existing = state.items.find(item =>
        item.id === id || item.productId === id
      );
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item =>
        item.id !== action.payload && item.productId !== action.payload
      );
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item =>
        item.id === action.payload || item.productId === action.payload
      );
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item =>
        item.id === action.payload || item.productId === action.payload
      );
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    clearCart: (state) => {
      state.items = [];
    },
    setCart: (state, action) => {
  state.items = action.payload;
  }

  }
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  setCart
} = cartSlice.actions;

export default cartSlice.reducer;
