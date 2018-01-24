import {createSelector} from 'reselect';

const getMenuItems = (state) => state.loadMenu;
export const getMenuItem = createSelector([getMenuItems], (state) => state.menuItem);
/*export const getSelectedCarrier = createSelector([getAviaInfoState], (state) => state.selectedCarrier);*/
