// @flow
import React, { Component } from 'react';
import Stays from './stays/stays'
import Login from '../auth/components/login'
import WithAuth from '../auth/components/with_auth'

export default class Main extends Component {
  render() {
    return (
      <WithAuth>
        <Stays />
      </WithAuth>
    )
  }
}
