// @flow
import React, { Component } from 'react';
import Stays from './stays/stays'
import Login from '../auth/components/login'
import WithAuth from '../auth/components/with_auth'
import WithApollo from '../apollo'

export default class Main extends Component {
  render() {
    return (
      <WithAuth>
        <WithApollo>
          <Stays />
        </WithApollo>
      </WithAuth>
    )
  }
}
