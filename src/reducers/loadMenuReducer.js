import menuItem from '../constants/menuItem';
import {menuState} from '../states/menuState';

export default (state = menuState, action) => {
    switch (action.type) {
        case menuItem.LOAD_MENU_ITEM:
            return {menuItem: action.payload.menuItem};
        default:
            return state;
    }
};