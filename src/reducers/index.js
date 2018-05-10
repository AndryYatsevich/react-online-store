import {combineReducers} from 'redux';
import loadMenuReducer from '../components/menu/reducer';
import loadHomeProducts from '../components/product/reducer';
import loadFaqReducer from  './loadFaqReducer';
import loadVacanciesReducer from './loadVacanciesReducer';
import loadCatalogReducer from "./loadCatalogReducer";
import loadCategoryReducer from "./loadCategoryReducer";
import loadProductCartReducer from "./loadProductCartReducer";
import loadProducts from '../components/user/reducer';


export default combineReducers({
    loadMenuReducer,
    loadHomeProducts,
    loadProducts,
    loadFaq: loadFaqReducer,
    loadVacancies: loadVacanciesReducer,
    loadCatalog: loadCatalogReducer,
    loadCategory: loadCategoryReducer,
    loadProductCart: loadProductCartReducer
});