import faqItem from '../constants/faqItem';
import {faqState} from "../states/faqState";

export default (state = faqState, action) => {
    switch (action.type) {
        case faqItem.LOAD_QUESTION_ITEM:
            return {...state, questionsItem: action.payload.questionsItem};
        default:
            return state;
    }
};