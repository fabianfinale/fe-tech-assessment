import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    shoppingCartCollapsed: true,
  },
  reducers: {
    changeShoppingCartStatus: (ui) => {
      console.log('Should be here');
      ui.shoppingCartCollapsed = !ui.shoppingCartCollapsed;
    },
  },
});

export default uiSlice.reducer;
export const { changeShoppingCartStatus } = uiSlice.actions;
