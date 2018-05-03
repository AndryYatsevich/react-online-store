import cartItem from '../constants/cartItem';

export default (state = {}, action) => {
    switch (action.type) {
        case cartItem.ADD_CART_ITEM:
            console.log('action.payload reducer', 'action.payload: ', action.payload, 'state: ', state);
            return  action.payload;
        case (cartItem.DELETE_CART_ITEM):

            console.log('delete', action.payload, state);

            return action.payload;
        case (cartItem.UPDATE_CART_ITEM):
            console.log('reducer update', 'action.payload: ', action.payload, 'state: ', state);
            return action.payload;
        default:
            console.log('reducer', action.payload, state);
            return state;
    }
};