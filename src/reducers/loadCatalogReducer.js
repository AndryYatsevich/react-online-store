import catalogItem from '../constants/catalogItem';
import {catalogState} from '../states/catalogState';

export default (state = catalogState, action) => {
    switch (action.type) {
        case catalogItem.LOAD_CATALOG_ITEM:
            return {catalogItem: action.payload.menuItem};
        default:
            return state;
    }
};