// @flow

import {combineReducers} from 'redux';
import auth from '../auth/reducers';

export default function reducersWithApollo(apolloClient) {
  return combineReducers({
    auth: auth,
    apollo: apolloClient.reducer(),
  })
}
