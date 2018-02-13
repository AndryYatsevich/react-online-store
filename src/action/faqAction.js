import Axios from 'axios';
import faqItem from '../constants/faqItem';

export const loadQuestionItem = () => (dispatch) => {

    Axios
        .get('/faq.json')
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