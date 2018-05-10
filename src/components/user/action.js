import Axios from "axios/index";
import products from "./constants";

export const loadProducts = () => (dispatch) => {

    Axios
        .get('/products.json')
        .then((res) => {
            dispatch({
                    type: products.LOAD_PRODUCTS,
                    payload: res.data
                }
            );
        })
        .catch((err) => {
            console.log('An error occurred!', err);
        });
};