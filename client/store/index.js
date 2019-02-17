import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import videos from './videos';

// const reducer = combineReducers({ user, stocks: stocksReducer });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, logger)
);
const store = createStore(videos, middleware);

export default store;
export * from './user';
export * from './videos';
