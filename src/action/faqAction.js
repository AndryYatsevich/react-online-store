import Axios from 'axios';
import faqItem from '../constants/faqItem';

export const loadQuestionItem = () => (dispatch) => {

    let promise = new Promise((resolve, reject) => {

          resolve(Axios.get('/faq1.json'));

        reject(new Error("errorcfsdfsd"));

    });

    promise
        .then((res) => {
            dispatch({
                    type: faqItem.LOAD_QUESTION_ITEM,
                    payload: res.data
                }
            );
            console.log(res.status);
        })
        .catch((error) => {
            console.log('An error occurred!' + error.message, error);
        });
};