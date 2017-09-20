import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import './index.css';
import App from './App';

const reducers = {
  form: formReducer,
};
const reducer = combineReducers(reducers);
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(reducer, {}, enhancers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
