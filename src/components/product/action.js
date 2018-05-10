import Axios from 'axios';
import homeProducts from './constants';

export const getHomeProducts = (dispatch) => {

    Axios
        .get('/products.json')
        .then((res) => {
           dispatch({
               type: homeProducts.LOAD_HOME_PRODUCTS,
               payload: res.data.products
           })
        })
        .catch((err) => {
            console.log('An error occurred!', err);
        });


};