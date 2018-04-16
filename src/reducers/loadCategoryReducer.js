import categoryProducts from '../constants/categoryProducts';
import {categoryState} from '../states/categoryState';

export default (state = categoryState, action) => {
    switch (action.type) {
        case categoryProducts.LOAD_CATEGORY_PRODUCTS:
            return {products: action.payload.products};
        default:
            return state;
    }
};