import cartItem from '../constants/cartItem';

export default (state = [], action) => {
    console.log('reducer', action.payload);
    console.log(state);
    switch (action.type) {
        case cartItem.ADD_CART_ITEM:

            return {...state, productCart: action.payload.productCart};
        default:
            console.log('reducer', action.payload, );
            return state;
    }
};