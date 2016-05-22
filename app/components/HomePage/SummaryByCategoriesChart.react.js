import ApiError from '../Common/IncorrectFormatApiError.react';
import { BarChart } from 'react-d3-components';
import React, { PropTypes as RPT } from 'react';
import { List, Map } from 'immutable';

function tooltip(x, y0, y) {
  return y.toString();
}

export default class SummaryByCategoriesChart extends React.Component {

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
      }, new Map()).toJS();

      return Object.keys(processedData).map(key => processedData[key]);
    } catch (error) {
      return null;
    }
  }

  render() {
    const processedData = this.processData();

    if (!processedData) {
      return <ApiError />;
    }

    return (
      <div>
        {processedData.length &&
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
