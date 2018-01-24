import Axios from 'axios';
import menuItem from '../constants/menuItem';

export const loadMenuItem = () => (dispatch) => {

    Axios
        .get('/data1.json')
        .then((res) => {
            dispatch({
                type: menuItem.LOAD_MENU_ITEM,
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