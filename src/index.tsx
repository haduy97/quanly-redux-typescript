import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { UserReducer } from './redux/reducer';
import { NAME_REDUCER } from './redux/types';
const reducers = combineReducers(
  {usersReducer : UserReducer }
);
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

