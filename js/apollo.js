// @flow
'use strict';

import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import {connect} from 'react-redux';
import config from './config'
import { View, Text } from 'react-native'

class WithApollo extends Component {
  constructor(props) {
    super(props)
    this.client = null;
  }

  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }

    // get the authentication token from local storage if it exists
    // localStorage.getItem('token')
    const token = this.props.token
    if (token) {
      req.options.headers.authorization = `Bearer ${token}`;
    }
    next();
  }

  componentWillMount() {
    console.log('componentDidMount')

    const networkInterface = createNetworkInterface(config.graphQLEndpointUrl);
    const applyMiddleware = (req, next) => {
      this.applyMiddleware(req, next)
    }

    const middleware = {
      applyMiddleware: applyMiddleware
    }

    networkInterface.use([middleware]);

    this.client = new ApolloClient({
      networkInterface: networkInterface,
    });
  }

  render() {
    // console.log('client is', this.client)
    // return <View><Text>hello</Text></View>
    // return this.props.children[0]
    return (
      <ApolloProvider client={this.client}>
        {this.props.children}
      </ApolloProvider>
    )
  }
}

const mapStateToProps = (state) => ({
  token : state.auth.token
});

export default connect(mapStateToProps)(WithApollo);
