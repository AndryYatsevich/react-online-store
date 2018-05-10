import homeProducts from './constants';


export default (state = [], action) => {
    switch (action.type) {

        case homeProducts.LOAD_HOME_PRODUCTS:
            return {products: action.payload};
        default:
            return state;
    }
};