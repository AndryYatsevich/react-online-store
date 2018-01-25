import homeProducts from '../constants/homeProducts';
import {homeState} from '../states/homeState';

export default (state = homeState, action) => {
    switch (action.type) {
        case homeProducts.LOAD_HOME_PRODUCTS:
            return {products: action.payload.products};
        default:
            return state;
    }
};