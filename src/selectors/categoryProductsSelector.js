import {createSelector} from 'reselect';

const getProductsItems = (state) => state.loadCategory;
export const getProductsCategoryItem = createSelector([getProductsItems], (state) => state.products);