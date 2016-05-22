import SummaryRow from '../../components/HomePage/SummaryRow.react';
import Invoices from '../Invoices';
import React, { PropTypes as RPT } from 'react';
import { connect } from 'react-redux';
import { fetchSummaryByCategories, fetchSummaryByMonths, toggleShowAsChart } from '../../common/summary/actions';
import { homePageSelector } from './selectors';

@connect(homePageSelector)
export default class HomePage extends React.Component {

  static propTypes = {
    dispatch: RPT.func.isRequired,
    summaryByCategories: RPT.object,
    summaryByMonths: RPT.object,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSummaryByMonths());
    dispatch(fetchSummaryByCategories());

    this.interval = setInterval(() => {
      dispatch(fetchSummaryByMonths());
      dispatch(fetchSummaryByCategories());
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { dispatch, summaryByCategories, summaryByMonths } = this.props;

    return (
      <div>
        <p>
          API docs: <a href="http://docs.rubydeveloper2ndround.apiary.io" target="_blank">http://docs.rubydeveloper2ndround.apiary.io/</a><br />
          Data: <a href="/invoices.csv">download here</a>
        </p>
        <div style={{ marginTop: '50px' }}>
          <div style={{ width: '45%', display: 'inline-block', verticalAlign: 'top' }}>
            <SummaryRow
              data={summaryByCategories}
              kind="category"
              onToggle={() => dispatch(toggleShowAsChart('categories'))}
              title="Invoice summary by categories"
            />
          </div>
          <div style={{ width: '45%', display: 'inline-block', verticalAlign: 'top' }}>
            <SummaryRow
              data={summaryByMonths}
              kind="month"
              onToggle={() => dispatch(toggleShowAsChart('months'))}
              title="Invoice summary by months"
            />
          </div>
        </div>
        <Invoices />
      </div>
    );
  }
}
