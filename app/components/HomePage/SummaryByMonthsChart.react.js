import ApiError from '../Common/IncorrectFormatApiError.react';
import { BarChart } from 'react-d3-components';
import React, { PropTypes as RPT } from 'react';

function tooltip(x, y0, y) {
  return y.toString();
}

export default class SummaryByMonthsChart extends React.Component {

  static propTypes = {
    data: RPT.object,
  }

  processData() {
    const { data } = this.props;
    try {
      const processedData = data.map(x => ({ x: x.date, y: x.price })).toJS();

      return [{ label: '', values: processedData }];
    } catch (error) {
      return null;
    }
  }

  render() {
    const { data } = this.props;
    const processedData = this.processData();

    if (!processedData) {
      return <ApiError />;
    }

    return (
      <div>
        {data.size &&
          <BarChart
            data={processedData}
            height={400}
            margin={{ top: 10, bottom: 50, left: 70, right: 10 }}
            tooltipHtml={tooltip}
            width={600}
            xAxis={{ label: 'month' }}
            yAxis={{ label: 'price' }}
          />
        }
      </div>
    );
  }
}
