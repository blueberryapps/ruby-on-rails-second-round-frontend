import FlatButton from 'material-ui/FlatButton';
import React, { PropTypes as RPT } from 'react';
import ReducerApiError from '../../components/Common/ReducerApiError.react';
import { connect } from 'react-redux';
import { fetchInvoices } from '../../common/invoices/actions';
import { invoicesPageSelector } from '../../common/invoices/selectors';
import { push } from 'react-router-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

@connect(invoicesPageSelector)
export default class Invoices extends React.Component {

  static propTypes = {
    dispatch: RPT.func.isRequired,
    invoices: RPT.object,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchInvoices());

    this.interval = setInterval(() => {
      dispatch(fetchInvoices());
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderRow(invoice) {
    const { dispatch } = this.props;

    return (
      <TableRow key={invoice.id} selectable={false} displayRowCheckbox={false}>
        <TableRowColumn>
          <FlatButton label={invoice.id} onMouseDown={() => dispatch(push(`/invoices/${invoice.id}`))} />
        </TableRowColumn>
        <TableRowColumn>{invoice.invoice_number}</TableRowColumn>
        <TableRowColumn>{invoice.price}</TableRowColumn>
      </TableRow>
    );
  }

  renderTable() {
    const { invoices } = this.props;

    if (invoices.get('error')) {
      return <ReducerApiError />;
    }

    return (
      <Table style={styles.table}>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Number</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {invoices.get('data').map((invoice) => this.renderRow(invoice))}
        </TableBody>
      </Table>
    );
  }

  render() {
    return (
      <div>
        <h2>All invoices</h2>
        {this.renderTable()}
      </div>
    );
  }
}

const styles = {
  table: {
    width: '600px',
  },
};
