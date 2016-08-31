/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Stay from './js/components/stay'

class PocketNomad extends Component {
  render() {
    return <Stay />
  }
}

AppRegistry.registerComponent('PocketNomad', () => PocketNomad);
