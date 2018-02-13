import {createSelector} from 'reselect';

const getMenuItems = (state) => state.loadMenu;
export const getMenuItem = createSelector([getMenuItems], (state) => state.menuItem);
