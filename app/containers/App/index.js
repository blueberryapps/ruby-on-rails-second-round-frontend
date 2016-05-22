import { apiUrlFieldSelector } from '../../common/fields/selectors';
import { changeApiUrl } from '../../common/api/actions';
import { changeField } from '../../common/fields/actions';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import React, { PropTypes as RPT } from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

@connect(apiUrlFieldSelector)
export default class App extends React.Component {

  static propTypes = {
    apiUrlField: RPT.string.isRequired,
    children: RPT.node,
    dispatch: RPT.func,
  };

  render() {
    const { apiUrlField, children, dispatch } = this.props;

    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild style={styles.toolbar}>
            <ToolbarTitle text="RoR second round" />
          </ToolbarGroup>
          <ToolbarGroup>
            <FlatButton label="Home" onMouseDown={() => dispatch(push('/'))} />
          </ToolbarGroup>
          <ToolbarGroup>
            <TextField
              hintText="Enter the endpoint URL here."
              onChange={(_, value) => dispatch(changeField('apiUrl', value))}
              style={styles.apiUrl}
              value={apiUrlField}
            />
            <RaisedButton label="Submit" primary onMouseDown={() => dispatch(changeApiUrl(apiUrlField))} />
          </ToolbarGroup>
        </Toolbar>
        <div style={styles.content}>
          {children}
        </div>
      </div>
    );
  }
}

const styles = {
  apiUrl: {
    width: '600px',
  },
  content: {
    padding: '25px',
  },
  toolbar: {
    marginLeft: '5px',
  },
};
