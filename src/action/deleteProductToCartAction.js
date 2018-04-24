
import cartItem from '../constants/cartItem';



export function deleteProductToCartAction(productCart){
    console.log('action', productCart);
    console.log(cartItem);
    return {
        type: cartItem.DELETE_CART_ITEM,
        payload: productCart
    };
}