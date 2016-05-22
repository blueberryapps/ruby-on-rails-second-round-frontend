import request from '../../utils/request';

export const FETCH_SUMMARY_BY_CATEGORIES = 'FETCH_SUMMARY_BY_FETCH_SUMMARY_BY_CATEGORIES';
export const FETCH_SUMMARY_BY_MONTHS = 'FETCH_SUMMARY_BY_MONTHS';
export const TOGGLE_SHOW_AS_CHART = 'TOGGLE_SHOW_AS_CHART';

export function fetchSummaryByCategories() {
  return (dispatch, getState) =>
    dispatch({
      type: FETCH_SUMMARY_BY_CATEGORIES,
      payload: request(`${getState().getIn(['api', 'url'])}/summary/categories`),
    });
}

export function fetchSummaryByMonths() {
  return (dispatch, getState) =>
    dispatch({
      type: FETCH_SUMMARY_BY_MONTHS,
      payload: request(`${getState().getIn(['api', 'url'])}/summary/months`),
    });
}

export function toggleShowAsChart(name) {
  return {
    type: TOGGLE_SHOW_AS_CHART,
    payload: name,
  };
}
