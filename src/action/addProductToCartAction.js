
import cartItem from '../constants/cartItem';



export function addProductToCartAction(productCart){
    return {
        type: cartItem.ADD_CART_ITEM,
        payload: productCart
    };
}

export function updateProductToCartAction(productCart){
    console.log('productCart  ', productCart);
    return {
        type: cartItem.UPDATE_CART_ITEM,
        payload: productCart
    };
}

export function deleteProductToCartAction(productCart){
    console.log('action', productCart);
    console.log(cartItem);
    return {
        type: cartItem.DELETE_CART_ITEM,
        payload: productCart
    };
}
