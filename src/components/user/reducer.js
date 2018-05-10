import products from "./constants";


export default (state = [], action) => {
    switch (action.type) {
        case products.LOAD_PRODUCTS:
            return action.payload.products;
        default:
            return state;
    }
};