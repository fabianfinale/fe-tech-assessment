import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import api from './middleware/api';
import toaster from './middleware/toaster';

const store = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api, toaster),
  });

export default store;
