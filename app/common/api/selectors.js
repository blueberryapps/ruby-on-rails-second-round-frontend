import { createSelector } from 'reselect';

const apiSelector =
  state => state.getIn(['api']);

export const apiUrlSelector = createSelector(
  apiSelector,
  api => ({
    apiUrl: api.get('url'),
  })
);
