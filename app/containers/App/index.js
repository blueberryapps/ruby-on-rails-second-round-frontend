import { appSelector } from './selectors';
import { changeApiUrl, toggleAutoFetch } from '../../common/api/actions';
import { changeField } from '../../common/fields/actions';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import React, { PropTypes as RPT } from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Toggle from 'material-ui/Toggle';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

@connect(appSelector)
export default class App extends React.Component {

  static propTypes = {
    apiUrlField: RPT.string.isRequired,
    autoFetch: RPT.bool.isRequired,
    children: RPT.node,
    dispatch: RPT.func,
  };

  render() {
    const { apiUrlField, autoFetch, children, dispatch } = this.props;

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
            <Toggle
              label="Autofetch"
              onClick={() => dispatch(toggleAutoFetch())}
              style={{ marginTop: '15px' }}
              toggled={autoFetch}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <TextField
              hintText="Enter the endpoint URL here."
              onChange={(_, value) => dispatch(changeField('apiUrl', value))}
              style={styles.apiUrl}
              value={apiUrlField}
            />
            <RaisedButton label="Load data" primary onMouseDown={() => dispatch(changeApiUrl(apiUrlField))} />
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
    width: '550px',
  },
  content: {
    padding: '25px',
  },
  toolbar: {
    marginLeft: '5px',
  },
};
