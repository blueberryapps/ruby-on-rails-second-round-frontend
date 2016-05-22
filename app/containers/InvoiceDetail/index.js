import React, { PropTypes as RPT } from 'react';
import { connect } from 'react-redux';
import { invoiceDetailSelector } from '../../common/invoices/selectors';
import { fetchInvoices } from '../../common/invoices/actions';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';

@connect(invoiceDetailSelector)
export default class InvoiceDetail extends React.Component {

  static propTypes = {
    dispatch: RPT.func.isRequired,
    invoice: RPT.object,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchInvoices());
  }

  renderInvoice() {
    const { invoice } = this.props;

    if (!invoice) {
      return (<p>Invoice not found. Either a wrong ID or there's a problem with your endpoint.</p>);
    }

    return (
      <Table style={styles.table}>
        <TableBody displayRowCheckbox={false}>
          <TableRow selectable={false} >
            <TableRowColumn>id</TableRowColumn>
            <TableRowColumn>{invoice.id}</TableRowColumn>
          </TableRow>
          <TableRow selectable={false}>
            <TableRowColumn>client</TableRowColumn>
            <TableRowColumn>{invoice.client.name}</TableRowColumn>
          </TableRow>
          <TableRow selectable={false}>
            <TableRowColumn>category</TableRowColumn>
            <TableRowColumn>{invoice.category.name}</TableRowColumn>
          </TableRow>
          <TableRow selectable={false}>
            <TableRowColumn>number</TableRowColumn>
            <TableRowColumn>{invoice.invoice_number}</TableRowColumn>
          </TableRow>
          <TableRow selectable={false}>
            <TableRowColumn>price</TableRowColumn>
            <TableRowColumn>{invoice.price}</TableRowColumn>
          </TableRow>
          <TableRow selectable={false}>
            <TableRowColumn>price_with_vat</TableRowColumn>
            <TableRowColumn>{invoice.price_with_vat}</TableRowColumn>
          </TableRow>
          <TableRow selectable={false}>
            <TableRowColumn>vat_rate</TableRowColumn>
            <TableRowColumn>{invoice.vat_rate}</TableRowColumn>
          </TableRow>
          <TableRow selectable={false}>
            <TableRowColumn>issued_at</TableRowColumn>
            <TableRowColumn>{invoice.issued_at}</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }

  render() {
    return (
      <div>
        <h2>Invoice detail</h2>
        {this.renderInvoice()}
      </div>
    );
  }
}


const styles = {
  table: {
    width: '600px',
  },
};
