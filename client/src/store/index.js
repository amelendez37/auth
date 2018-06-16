import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const initialState = {
  auth: { user: { authorized: false }}
};

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
export const store = createStoreWithMiddleware(
  rootReducer,
  initialState
);