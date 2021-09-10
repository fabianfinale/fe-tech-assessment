import { combineReducers } from 'redux';
import productsReducer from './products';
import cartReducer from './cart';

const entities = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default entities;
