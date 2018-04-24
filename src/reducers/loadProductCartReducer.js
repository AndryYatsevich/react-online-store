import cartItem from '../constants/cartItem';

export default (state = [], action) => {
    switch (action.type) {
        case cartItem.ADD_CART_ITEM:
            console.log(state);
            return [...state, {productCount: 1, product: action.payload}];
        case (cartItem.DELETE_CART_ITEM):
            console.log('reducer delete сработал', action.payload, state.id);
            const productId = action.payload;
            return state.filter(item => item.product.id !== productId);
        default:
            console.log('reducer', action.payload, );
            return state;
    }
};