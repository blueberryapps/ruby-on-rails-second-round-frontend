import { createSelector } from 'reselect';

const apiSelector =
  state => state.get('api');

export const apiUrlSelector = createSelector(
  apiSelector,
  api => ({
    apiUrl: api.get('url'),
  })
);

export const autoFetchSelector = createSelector(
  apiSelector,
  api => api.get('autoFetch')
);
