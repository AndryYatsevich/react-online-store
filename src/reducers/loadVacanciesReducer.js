import vacancies from '../constants/vacanciesItem';
import {vacanciesState} from "../states/vacanciesState";

export default (state = vacanciesState, action) => {
    switch (action.type) {
        case vacancies.LOAD_VACANCIES_ITEM:
            return {...state, vacancies: action.payload.vacancies};
        default:
            return state;
    }
};