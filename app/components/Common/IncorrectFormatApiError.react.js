import React from 'react';

export default class IncorrectFormatApiError extends React.Component {
  render() {
    return (
      <div style={styles.error}>
        Data is in a wrong format (e.g. something is missing). Please check API docs.
      </div>
    );
  }
}

const styles = {
  error: {
    color: 'red',
  },
};
