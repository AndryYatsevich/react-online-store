
import cartItem from '../constants/cartItem';



export function addProductToCartAction(product){
    console.log('action', product);
    console.log(cartItem);
    return {
        type: cartItem.ADD_CART_ITEM,
        payload: product
    };
}

