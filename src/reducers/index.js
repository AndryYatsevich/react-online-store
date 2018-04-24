import {combineReducers} from 'redux';
import loadMenuReducer from './loadMenuReducer';
import loadHomeProductsReducer from './loadHomeProductsReducer';
import loadFaqReducer from  './loadFaqReducer';
import loadVacanciesReducer from './loadVacanciesReducer';
import loadCatalogReducer from "./loadCatalogReducer";
import loadCategoryReducer from "./loadCategoryReducer";
import loadProductCartReducer from "./loadProductCartReducer";

export default combineReducers({
    loadMenu: loadMenuReducer,
    loadHomeProducts: loadHomeProductsReducer,
    loadFaq: loadFaqReducer,
    loadVacancies: loadVacanciesReducer,
    loadCatalog: loadCatalogReducer,
    loadCategory: loadCategoryReducer,
    loadProductCart: loadProductCartReducer
});