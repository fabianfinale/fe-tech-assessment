import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import uiReducer from './ui';

const reducer = combineReducers({ entities: entitiesReducer, ui: uiReducer });

export default reducer;
