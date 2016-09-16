// @flow
'use strict';

import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import {connect} from 'react-redux';
import client from './apollo_connection'

class WithApollo extends Component {
  applyMiddleware(req, next) {
    if (!req.options.headers) req.options.headers = {};

    if (this.props.token) {
      req.options.headers.authorization = `Bearer ${this.props.token}`;
    }
    next();
  }

  componentWillMount() {
    const applyMiddleware = (req, next) => {
      this.applyMiddleware(req, next)
    }

    client.networkInterface.use([{applyMiddleware: applyMiddleware}]);
  }

  render() {
    return (
      <ApolloProvider client={client} store={this.props.store}>
        {this.props.children}
      </ApolloProvider>
    )
  }
}

const mapStateToProps = (state) => ({
  token : state.auth.token
});

export default connect(mapStateToProps)(WithApollo);
