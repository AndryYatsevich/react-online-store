import {createSelector} from 'reselect';

const getQuestionItems = (state) => state.loadFaq;
export const getQuestionItem = createSelector([getQuestionItems], (state) => state.questionsItem);