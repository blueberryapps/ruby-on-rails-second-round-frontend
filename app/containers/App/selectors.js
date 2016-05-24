import { createSelector } from 'reselect';
import { apiUrlFieldSelector } from '../../common/fields/selectors';
import { autoFetchSelector } from '../../common/api/selectors';

// selectLocationState expects a plain JS object for the routing state
export function selectLocationState() {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
}

export const appSelector = createSelector(
  apiUrlFieldSelector,
  autoFetchSelector,
  (apiUrlField, autoFetch) => ({
    apiUrlField,
    autoFetch,
  })
);
