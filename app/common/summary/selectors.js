import { createSelector } from 'reselect';

const summarySelector =
  state => state.get('summary');

export const summaryByMonthsSelector = createSelector(
  summarySelector,
  summary => summary.get('months')
);

export const summaryByCategoriesSelector = createSelector(
  summarySelector,
  summary => summary.get('categories')
);
