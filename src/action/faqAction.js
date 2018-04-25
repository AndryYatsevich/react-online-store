import Axios from 'axios';
import faqItem from '../constants/faqItem';

export const loadQuestionItem = () => (dispatch) => {

    let promise = new Promise((resolve, reject) => {
          resolve(Axios.get('/faq.json'));

          reject(new Error("error"));

    });

    promise
        .then((res) => {
            dispatch({
                    type: faqItem.LOAD_QUESTION_ITEM,
                    payload: res.data
                }
            );
            console.log(res.data);
        })
        .catch((err) => {
            console.log('An error occurred!', err);
        });
};