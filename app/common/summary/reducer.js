import { Record, List, Map } from 'immutable';
import { FETCH_SUMMARY_BY_CATEGORIES, FETCH_SUMMARY_BY_MONTHS, TOGGLE_SHOW_AS_CHART } from './actions';

const InitialState = Record({
  categories: new Map({
    data: new List(),
    error: false,
    pending: false,
    showAsChart: true,
  }),
  months: new Map({
    data: new List(),
    error: false,
    pending: false,
    showAsChart: true,
  }),
});

export const initialState = new InitialState;

export default function summaryReducer(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_SUMMARY_BY_CATEGORIES}_START`:
      return state.setIn(['categories', 'pending'], true);
    case `${FETCH_SUMMARY_BY_MONTHS}_START`:
      return state.setIn(['months', 'pending'], true);
    case `${FETCH_SUMMARY_BY_CATEGORIES}_SUCCESS`:
      return state
        .setIn(['categories', 'pending'], false)
        .setIn(['categories', 'error'], false)
        .setIn(['categories', 'data'], new List(action.payload.data.summary));
    case `${FETCH_SUMMARY_BY_MONTHS}_SUCCESS`:
      return state
        .setIn(['months', 'pending'], false)
        .setIn(['months', 'error'], false)
        .setIn(['months', 'data'], new List(action.payload.data.summary));
    case `${FETCH_SUMMARY_BY_CATEGORIES}_ERROR`:
      return state
        .setIn(['categories', 'pending'], false)
        .setIn(['categories', 'error'], true);
    case `${FETCH_SUMMARY_BY_MONTHS}_ERROR`:
      return state
        .setIn(['months', 'pending'], false)
        .setIn(['months', 'error'], true);
    case TOGGLE_SHOW_AS_CHART: {
      const name = action.payload;
      return state
        .setIn([name, 'showAsChart'], !state.getIn([name, 'showAsChart']));
    }
    default:
      return state;
  }
}
