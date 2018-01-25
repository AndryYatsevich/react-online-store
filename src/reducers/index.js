import {combineReducers} from 'redux';
import loadMenuReducer from './loadMenuReducer';
import loadHomeProductsReducer from './loadHomeProductsReducer';

export default combineReducers({
    loadMenu: loadMenuReducer,
    loadHomeProducts: loadHomeProductsReducer
});