import cartItem from '../constants/cartItem';

export default (state = {}, action) => {
    switch (action.type) {
        case cartItem.ADD_CART_ITEM:
            console.log('action.payload reducer', action.payload, state);
            return  Object.assign(state, action.payload);
        case (cartItem.DELETE_CART_ITEM):

            console.log('delete', action.payload);

            return action.payload;
        case (cartItem.UPDATE_CART_ITEM):

            return Object.assign(...state, action.payload);
        default:
            console.log('reducer', action.payload, );
            return state;
    }
};