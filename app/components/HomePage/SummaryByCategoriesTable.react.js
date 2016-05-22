import ApiError from '../Common/IncorrectFormatApiError.react';
import React, { PropTypes as RPT } from 'react';
import { List, Map } from 'immutable';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

export default class SummaryByCategoriesTable extends React.Component {

  static propTypes = {
    data: RPT.object,
  }

  processData() {
    const { data } = this.props;

    try {
      const processedData = data.reduce((acc, x) => {
        const existingValues = acc.getIn([x.category.name, 'values']) || new List();
        const idx = existingValues.size;
        const newValues = existingValues
          .setIn([idx, 'x'], x.date)
          .setIn([idx, 'y'], x.price);

        return acc
          .setIn([x.category.name, 'label'], x.category.name)
          .setIn([x.category.name, 'values'], newValues);
      }, new Map());

      return processedData;
    } catch (error) {
      return null;
    }
  }

  renderMonth(month) {
    return (
      <TableRowColumn>{month.get('y')}</TableRowColumn>
    );
  }

  renderRow(row) {
    return (
      <TableRow selectable={false} >
        <TableRowColumn>{row.get('label')}</TableRowColumn>
        {row.get('values').map(x => this.renderMonth(x))}
      </TableRow>
    );
  }

  renderHeaderRow(val) {
    return (<TableHeaderColumn>{val}</TableHeaderColumn>);
  }

  renderHeader(data) {
    const months = data.first().get('values').reduce((acc, x) =>
      acc.push(x.get('x'))
    , new List());

    return (
      <TableHeader displaySelectAll={false}>
        <TableRow selectable={false}>
          <TableHeaderColumn />
          {months.map(this.renderHeaderRow)}
        </TableRow>
      </TableHeader>
    );
  }

  render() {
    const processedData = this.processData();

    if (!processedData) {
      return <ApiError />;
    }

    return (
      <Table style={styles.table}>
        {this.renderHeader(processedData)}
        <TableBody displayRowCheckbox={false}>
          {processedData.map(x => this.renderRow(x))}
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
