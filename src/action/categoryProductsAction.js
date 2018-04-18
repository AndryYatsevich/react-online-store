import Axios from 'axios';
import categoryProducts from '../constants/categoryProducts';

export const loadCategoryProducts = () => (dispatch) => {

    Axios
        .get('/products.json')
        .then((res) => {
            dispatch({
                    type: categoryProducts.LOAD_CATEGORY_PRODUCTS,
                    payload: res.data

                }

            );
        })
        .catch((err) => {
            console.log('An error occurred!', err);
        });
};