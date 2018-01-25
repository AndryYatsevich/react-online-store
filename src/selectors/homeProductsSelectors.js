import {createSelector} from 'reselect';

const getProductsItems = (state) => state.loadHomeProducts;
export const getProductsItem = createSelector([getProductsItems], (state) => state.products);
/*export const getSelectedCarrier = createSelector([getAviaInfoState], (state) => state.selectedCarrier);*/