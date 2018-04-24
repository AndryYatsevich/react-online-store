import {createSelector} from 'reselect';

const addProductToCartItems = (state) => state.loadProductCart;
export const addProductToCartItem = createSelector([addProductToCartItems], (state) => state.productCart);