
import cartItem from '../constants/cartItem';



export function addProductToCartAction(productCart){
    console.log(productCart);
    return {
        type: cartItem.ADD_CART_ITEM,
        payload: productCart
    };
}

export function updateProductToCartAction(productCart){
    return {
        type: cartItem.UPDATE_CART_ITEM,
        payload: productCart
    };
}

export function deleteProductToCartAction(productCart){
    return {
        type: cartItem.DELETE_CART_ITEM,
        payload: productCart
    };
}
