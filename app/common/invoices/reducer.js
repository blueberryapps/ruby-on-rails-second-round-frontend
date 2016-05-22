import { Record, List } from 'immutable';
import { FETCH_INVOICES } from './actions';

const InitialState = Record({
  error: null,
  data: new List(),
  pending: false,
});

export const initialState = new InitialState;

export default function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_INVOICES}_START`:
      return state.set('pending', true);
    case `${FETCH_INVOICES}_SUCCESS`:
      return state.merge({
        error: false,
        pending: false,
        data: new List(action.payload.data.invoices),
      });
    case `${FETCH_INVOICES}_ERROR`:
      return state.merge({ pending: false, error: true });
    default:
      return state;
  }
}
