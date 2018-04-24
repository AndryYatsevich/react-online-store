
import cartItem from '../constants/cartItem';



export function addProductToCartAction(productCart){
    console.log('action', productCart);
    console.log(cartItem);
    return {
        type: cartItem.ADD_CART_ITEM,
        payload: productCart
    };
}

