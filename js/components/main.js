// @flow
import React, { Component } from 'react';
import StaysContainer from './stays/stays_container'
import { StyleSheet } from 'react-native';

export default class Main extends Component {
  render() {
    return <StaysContainer style={styles.container} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE',
  }
});
