/**
 * Test store addons
 */

import expect from 'expect';
import configureStore from '../store';
import { browserHistory } from 'react-router';

describe('configureStore', () => {
  let store;

  before(() => {
    store = configureStore({}, browserHistory);
  });

  describe('asyncReducers', () => {
    it('should contain an object for async reducers', () => {
      expect(typeof store.asyncReducers).toEqual('object');
    });
  });
});
