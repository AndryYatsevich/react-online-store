import Axios from 'axios';
import menuItem from './constants';

/**/
export const loadMenuItem = () => (dispatch) => {

    /*let promise = new Promise((resolve, reject) => {
        resolve(Axios.get('/menu.json'));

        reject(new Error("error"));

    });

    promise*/
    Axios
        .get('/menu.json')
        .then((res) => {
            console.log('----=-==-=-=-=-=-=-=-=-++++++++++++++++++++++++++>', res);
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


/*
export function loadMenuItem(url) {
    return (dispatch) => {
        Axios
            .get(url)
            .then((res) => {
                console.log('----=-==-=-=-=-=-=-=-=-++++++++++++++++++++++++++>', res);
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
}*/
