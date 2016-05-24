import { CHANGE_API_URL, TOGGLE_AUTO_FETCH } from './actions';
import { Record } from 'immutable';

const InitialState = Record({
  autoFetch: false,
  url: localStorage.getItem('apiUrl') || 'https://private-anon-a9cb9d500-rubydeveloper2ndround.apiary-mock.com/api/v1',
});

export const initialState = new InitialState;

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_API_URL:
      return state.set('url', action.payload);
    case TOGGLE_AUTO_FETCH:
      return state.set('autoFetch', !state.get('autoFetch'));
    default:
      return state;
  }
}
