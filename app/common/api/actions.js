import { fetchInvoices } from '../invoices/actions';
import { fetchSummaryByCategories, fetchSummaryByMonths } from '../summary/actions';

export const TOGGLE_AUTO_FETCH = 'TOGGLE_AUTO_FETCH';
export const CHANGE_API_URL = 'CHANGE_API_URL';

export function changeApiUrl(payload) {
  return (dispatch) => {
    dispatch({ type: CHANGE_API_URL, payload });
    dispatch(fetchSummaryByCategories());
    dispatch(fetchSummaryByMonths());
    dispatch(fetchInvoices());
    localStorage.setItem('apiUrl', payload);
  };
}

export function toggleAutoFetch() {
  return (dispatch) => {
    dispatch({ type: TOGGLE_AUTO_FETCH });

    if (window.fetchTimer) {
      clearInterval(window.fetchTimer);
      window.fetchTimer = undefined;
    } else {
      window.fetchTimer = setInterval(() => {
        dispatch(fetchSummaryByCategories());
        dispatch(fetchSummaryByMonths());
        dispatch(fetchInvoices());
      }, 2000);
    }
  };
}
