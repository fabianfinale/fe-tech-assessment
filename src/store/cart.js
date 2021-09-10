import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
  },
  reducers: {
    addItem: (cart, action) => {
      const item = action.payload;
      cart.items[item._id] = item;
    },
    removeItem: (cart, action) => {
      const id = action.payload;
      console.log(`item is`, id);
      delete cart.items[id];
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;
