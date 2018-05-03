import menuItem from './constants';


export default (state = [], action) => {
    switch (action.type) {
        case menuItem.LOAD_MENU_ITEM:
            return action.payload.menuItem;
        default:
            return state;
    }
};