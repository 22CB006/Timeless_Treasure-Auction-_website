import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalCount: 0, // to track total items in the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.totalCount += 1; // increment total count
    },
    incrementQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity += 1;
        state.totalCount += 1; // increment total count
      }
    },
    decrementQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalCount -= 1; // decrement total count
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        state.totalCount -= item.quantity; // decrement total count by the item's quantity
        state.items = state.items.filter(i => i.id !== id);
      }
    },
  },
});

export const { addItem, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
