import { fetchInvoices } from '../invoices/actions';
import { fetchSummaryByCategories, fetchSummaryByMonths } from '../summary/actions';


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
