import React from 'react';

export default class ReducerApiError extends React.Component {
  render() {
    return (
      <div style={styles.error}>
        Something wrong with the endpoint.
      </div>
    );
  }
}

const styles = {
  error: {
    color: 'red',
  },
};
