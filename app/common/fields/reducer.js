import { CHANGE_FIELD } from './actions';
import { Record } from 'immutable';

const InitialState = Record({
  apiUrl: localStorage.getItem('apiUrl') || 'https://private-anon-a9cb9d500-rubydeveloper2ndround.apiary-mock.com/api/v1',
});

export const initialState = new InitialState;

export default function fieldsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FIELD: {
      const { name, value } = action.payload;

      return state.set(name, value);
    }
    default:
      return state;
  }
}
