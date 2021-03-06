// @flow
'use strict';

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Main from './components/main'
import reducersWithApollo from './reducers'
import devTools from 'remote-redux-devtools';
import { autoRehydrate, persistStore } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import apollo from './apollo_connection'
import WithApollo from './with_apollo'
import WithAuth from './auth/components/with_auth'
import codePush from "react-native-code-push";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk, apollo.middleware()),
    autoRehydrate(),
    devTools()
  );

  const reducer = reducersWithApollo(apollo)

  // Note: passing enhancer as last argument requires redux@>=3.1.0
  const store = createStore(reducer, enhancer);
  persistStore(store, {storage: AsyncStorage});

  // If you have other enhancers & middlewares
  // update the store after creating / changing to allow devTools to use them
  devTools.updateStore(store);
  return store;
}

const store = configureStore()

class AppWithoutCodePush extends Component {
  render() {
    return (
      <Provider store={store}>
        <WithAuth>
          <WithApollo store={store}>
            <Main />
          </WithApollo>
        </WithAuth>
      </Provider>
    )
  }
}

var App = codePush(AppWithoutCodePush);
export default App
