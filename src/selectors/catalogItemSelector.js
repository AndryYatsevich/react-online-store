import {createSelector} from 'reselect';

const getCatalogItems = (state) => state.loadCatalog;
export const getCatalogItem = createSelector([getCatalogItems], (state) => state.catalogItem);