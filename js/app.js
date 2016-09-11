// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import Main from './components/main'
import reducer from './reducers'
import devTools from 'remote-redux-devtools';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools()
  );

  // Note: passing enhancer as last argument requires redux@>=3.1.0
  const store = createStore(reducer, enhancer);
  // If you have other enhancers & middlewares
  // update the store after creating / changing to allow devTools to use them
  devTools.updateStore(store);
  return store;
}

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
