import { createSelector } from 'reselect';

const selectProducts = state => state.data;

export const selectproducts = createSelector(
  [selectProducts],
  data => data.products
);

export const selectsearchField = createSelector(
    [selectProducts],
    data => data.searchField
  );

export const selectisFetching = createSelector(
  [selectProducts],
  data => data.isFetching
);

export const selectoffset = createSelector(
  [selectProducts],
  data => data.offset
);

export const selectperPage = createSelector(
  [selectProducts],
  data => data.perPage
);

export const selectpageCount = createSelector(
    [selectProducts],
    data => data.pageCount
);

