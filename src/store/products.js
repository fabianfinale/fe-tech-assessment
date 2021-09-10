import { createSlice } from '@reduxjs/toolkit';
import { apiCallInitiated } from './api';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    byId: {},
    list: [],
  },
  reducers: {
    productsApiCallInitiated: (products) => {
      products.loading = true;
    },
    productsApiCallFailed: (products) => {
      products.loading = false;
    },
    productsLoaded: (products, action) => {
      const productsList = action.payload;

      productsList.forEach((product) => {
        products.byId[product._id] = product;
        products.list.push(product._id);
      });

      products.loading = false;
    },
  },
});

export default productsSlice.reducer;

const { productsApiCallInitiated, productsApiCallFailed, productsLoaded } =
  productsSlice.actions;

export const loadProducts = () =>
  apiCallInitiated({
    method: 'get',
    baseURL: 'https://main-api.fulhaus.com/fulhaus-tech-test',
    url: '/get-products',
    onStart: productsApiCallInitiated.type,
    onSuccess: productsLoaded.type,
    onError: productsApiCallFailed.type,
  });
