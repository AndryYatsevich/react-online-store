import {createSelector} from 'reselect';

const getVacanciesItems = (state) => state.loadVacancies;
export const getVacanciesItem = createSelector([getVacanciesItems], (state) => state.vacancies);