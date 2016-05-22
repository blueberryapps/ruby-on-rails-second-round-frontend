import React, { PropTypes as RPT } from 'react';
import ReducerApiError from '../Common/ReducerApiError.react';
import SummaryByCategoriesChart from './SummaryByCategoriesChart.react';
import SummaryByCategoriesTable from './SummaryByCategoriesTable.react';
import SummaryByMonthsChart from './SummaryByMonthsChart.react';
import SummaryByMonthsTable from './SummaryByMonthsTable.react';
import Toggle from 'material-ui/Toggle';

export default class SummaryRow extends React.Component {

  static propTypes = {
    data: RPT.object,
    kind: RPT.oneOf(['category', 'month']).isRequired,
    onToggle: RPT.func.isRequired,
    title: RPT.string.isRequired,
  }

  renderChart() {
    const { data, kind } = this.props;

    if (data.get('error')) {
      return <ReducerApiError />;
    }

    if (kind === 'category') {
      return (<SummaryByCategoriesChart data={data.get('data')} />);
    }

    if (kind === 'month') {
      return (<SummaryByMonthsChart data={data.get('data')} />);
    }

    return <p>Unknown kind of chart</p>;
  }

  renderTable() {
    const { data, kind } = this.props;

    if (data.get('error')) {
      return <ReducerApiError />;
    }

    if (kind === 'category') {
      return (<SummaryByCategoriesTable data={data.get('data')} />);
    }

    if (kind === 'month') {
      return (<SummaryByMonthsTable data={data.get('data')} />);
    }

    return <p>Unknown kind of table</p>;
  }

  render() {
    const { data, onToggle, title } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <div style={styles.toggleWrap}>
          <Toggle
            label="Show as a chart"
            onToggle={onToggle}
            toggled={data.get('showAsChart')}
          />
        </div>
        {data.get('showAsChart') && this.renderChart()}
        {!data.get('showAsChart') && this.renderTable()}
      </div>
    );
  }
}

const styles = {
  toggleWrap: {
    width: '200px',
  },
};
