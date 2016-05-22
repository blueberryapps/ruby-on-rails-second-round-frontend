import { createSelector } from 'reselect';

const invoicesSelector =
  state => state.get('invoices');

const currentInvoiceIdSelector = (state, props) =>
  parseInt(props.params.invoiceId, 10);

export const currentInvoiceSelector = createSelector(
  invoicesSelector,
  currentInvoiceIdSelector,
  (invoices, currentInvoiceId) => invoices.get('data').find(x => x.id === currentInvoiceId)
);

export const invoicesPageSelector = createSelector(
  invoicesSelector,
  invoices => ({
    invoices,
  })
);

export const invoiceDetailSelector = createSelector(
  currentInvoiceSelector,
  currentInvoice => ({
    invoice: currentInvoice,
  })
);
