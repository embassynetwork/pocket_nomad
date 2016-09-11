/**
 * PocketNomad for iOS
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './js/app'

class PocketNomad extends Component {
  render() {
    return <App />
  }
}

AppRegistry.registerComponent('PocketNomad', () => PocketNomad);
