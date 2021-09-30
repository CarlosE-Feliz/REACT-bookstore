import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import bookReducer from './books/configBooks';

const reducers = combineReducers({ books: bookReducer });

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
