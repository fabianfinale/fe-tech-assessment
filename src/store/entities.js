import { combineReducers } from 'redux';
import productsReducer from './products';

const entities = combineReducers({ products: productsReducer });

export default entities;
