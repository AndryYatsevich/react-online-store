import Axios from 'axios';
import vacancies from '../constants/vacanciesItem';

export const loadVacanciesItem = () => (dispatch) => {

    Axios
        .get('/vacancies.json')
        .then((res) => {
            dispatch({
                    type: vacancies.LOAD_VACANCIES_ITEM,
                    payload: res.data
                }
            );
            console.log(res.data);
        })
        .catch((err) => {
            console.log('An error occurred!', err);
        });
};