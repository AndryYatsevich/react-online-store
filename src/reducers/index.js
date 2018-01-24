import {combineReducers} from 'redux';
import loadMenuReducer from './loadMenuReducer';

export default combineReducers({
    loadMenu: loadMenuReducer
});