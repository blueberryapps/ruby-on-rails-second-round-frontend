import ApiError from '../Common/IncorrectFormatApiError.react';
import React, { PropTypes as RPT } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

export default class SummaryByMonthsTable extends React.Component {

  static propTypes = {
    data: RPT.object,
  }

  processData() {
    const { data } = this.props;
    try {
      return data.map(x => ({ x: x.date, y: x.price }));
    } catch (error) {
      return null;
    }
  }

  renderRow(row) {
    return (
      <TableRow selectable={false} >
        <TableRowColumn>{row.x}</TableRowColumn>
        <TableRowColumn>{row.y}</TableRowColumn>
      </TableRow>
    );
  }

  render() {
    const processedData = this.processData();

    if (!processedData) {
      return <ApiError />;
    }

    return (
      <Table style={styles.table}>
        <TableHeader displaySelectAll={false}>
          <TableRow selectable={false} >
            <TableHeaderColumn>months</TableHeaderColumn>
            <TableHeaderColumn>price</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {processedData.map(this.renderRow)}
        </TableBody>
      </Table>
    );
  }
}

const styles = {
  table: {
    width: '600px',
  },
};
