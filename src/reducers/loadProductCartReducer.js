import cartItem from '../constants/cartItem';

export default (state = {}, action) => {
    switch (action.type) {
        case cartItem.ADD_CART_ITEM:
            return  action.payload;
        case (cartItem.DELETE_CART_ITEM):
            return action.payload;
        case (cartItem.UPDATE_CART_ITEM):
            return action.payload;
        default:
             return state;
    }
};