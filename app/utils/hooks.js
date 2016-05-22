import createReducer from 'reducers.js';

/**
 * Inject an asynchronously loaded reducer
 */
export function injectAsyncReducer(store) {
  return (name, asyncReducer) => {
    store.asyncReducers[name] = asyncReducer; // eslint-disable-line
    store.replaceReducer(createReducer(store.asyncReducers));
  };
}

/**
 * Helper for creating injectors
 */
export function getHooks(store) {
  return {
    injectReducer: injectAsyncReducer(store),
  };
}
