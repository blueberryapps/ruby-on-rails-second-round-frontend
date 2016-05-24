import { createSelector } from 'reselect';

const fieldsSelector =
  state => state.get('fields');

export const apiUrlFieldSelector = createSelector(
  fieldsSelector,
  fields => fields.get('apiUrl')
);
