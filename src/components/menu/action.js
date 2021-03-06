import Axios from 'axios';
import menuItem from './constants';


export const loadMenuItem = () => (dispatch) => {

    Axios
        .get('/menu.json')
        .then((res) => {
            dispatch({
                    type: menuItem.LOAD_MENU_ITEM,
                    payload: res.data
                }
            );
        })
        .catch((err) => {
            console.log('An error occurred!', err);
        });
};
