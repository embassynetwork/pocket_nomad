/**
 * PocketNomad for Android
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Stays from './js/components/stays/stays'


class PocketNomad extends Component {
  render() {
    return <Stays />
  }
}

AppRegistry.registerComponent('PocketNomad', () => PocketNomad);
