import request from '../../utils/request';

export const FETCH_INVOICES = 'FETCH_INVOICES';

export function fetchInvoices() {
  return (dispatch, getState) =>
    dispatch({
      type: FETCH_INVOICES,
      payload: request(`${getState().getIn(['api', 'url'])}/invoices`),
    });
}
