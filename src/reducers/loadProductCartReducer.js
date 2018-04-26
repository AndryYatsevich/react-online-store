import cartItem from '../constants/cartItem';

export default (state = [], action) => {
    switch (action.type) {
        case cartItem.ADD_CART_ITEM:
            return [...state, action.payload];
        case (cartItem.DELETE_CART_ITEM):
            const productId = action.payload.productId;
            return state.filter(item => item.productId !== productId);
        case (cartItem.UPDATE_CART_ITEM):
           let takoe = state.map(item => {
                 if(item.productId === action.payload.productId){

                    return action.payload;
                }
                return item;
            });
            console.log(takoe);
 /*

            let cartArray = [...state];

            for(let i=0; cartArray.length; i++) {
                console.log('---->>>>>> ', cartArray[i], 'action.payload', action.payload);

                if(cartArray[i].product.id === action.payload.product.id){

                    return cartArray[i] = action.payload;
                } else {
                    console.log('--------------5455555555555555555555555555что-то пошло не так');
                }
        }*/
            return takoe;
        default:
            console.log('reducer', action.payload, );
            return state;
    }
};