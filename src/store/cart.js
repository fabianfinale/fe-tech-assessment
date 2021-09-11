import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
    checkout: (cart) => {
      toast.success('Your checkout was successful');
      cart.items = {};
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, checkout } = cartSlice.actions;
