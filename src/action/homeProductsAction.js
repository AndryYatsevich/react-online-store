import Axios from 'axios';
import homeProducts from '../constants/homeProducts';

export const loadHomeProducts = () => (dispatch) => {

    Axios
        .get('/products.json')
        .then((res) => {
            dispatch({
                    type: homeProducts.LOAD_HOME_PRODUCTS,
                    payload: res.data

                }

            );
            console.log(res);
        })
        .catch((err) => {
            console.log('An error occurred!', err);
        });
    console.log('takoe213');
};