import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    // middlewares goes here
    )
  );

  return store;
}