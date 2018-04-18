import Axios from 'axios';
import catalogItem from '../constants/catalogItem';

export const loadCatalog = () => (dispatch) => {

    Axios
        .get('/menu.json')
        .then((res) => {
            dispatch({
                    type: catalogItem.LOAD_CATALOG_ITEM,
                    payload: res.data

                }

            );

        })
        .catch((err) => {
            console.log('An error occurred!', err);
        });
};