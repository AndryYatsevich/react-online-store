import cartItem from '../constants/cartItem';

export default (state = {}, action) => {
    switch (action.type) {
        case cartItem.ADD_CART_ITEM:
            let productId = action.payload;
            let cart = {};
            cart[productId] = 1;
            let productCart = Object.assign({}, state);
            if (Object.keys(state).length !== 0) {
                if (action.payload in state) {
                    productCart[productId] += 1;
                    return productCart;
                }
                return Object.assign({}, state, cart);
            } else {
                return Object.assign({}, state, cart);
            }
        case (cartItem.DELETE_CART_ITEM):
            let productIdDelete = action.payload;
            let productCartDelete = Object.assign({}, state);
            if (productCartDelete[productIdDelete] > 1) {
                productCartDelete[productIdDelete] -= 1;
                return productCartDelete;
            } else {
                delete productCartDelete[productIdDelete];
                return productCartDelete;
            }
        case (cartItem.UPDATE_CART_ITEM):
            return action.payload;
        default:
             return state;
    }
};