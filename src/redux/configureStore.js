import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import bookReducer from './books/configBooks';

const reducers = combineReducers({ books: bookReducer });

const store = createStore(
  reducers,
  applyMiddleware(logger),
);

export default store;
