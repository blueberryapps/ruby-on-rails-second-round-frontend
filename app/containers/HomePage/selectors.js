import { summaryByCategoriesSelector, summaryByMonthsSelector } from '../../common/summary/selectors';
import { createSelector } from 'reselect';

export const homePageSelector = createSelector(
  summaryByCategoriesSelector,
  summaryByMonthsSelector,
  (summaryByCategories, summaryByMonths) => ({
    summaryByCategories,
    summaryByMonths,
  })
);
