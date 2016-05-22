import { CHANGE_API_URL } from './actions';
import { Record } from 'immutable';

const InitialState = Record({
  url: localStorage.getItem('apiUrl') || 'https://private-anon-a9cb9d500-rubydeveloper2ndround.apiary-mock.com/api/v1',
});

export const initialState = new InitialState;

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_API_URL:
      return state.merge({
        url: action.payload,
      });
    default:
      return state;
  }
}
