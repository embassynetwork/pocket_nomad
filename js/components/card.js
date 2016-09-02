// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: 0,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#DFE0E4',
    borderRadius: 2,
    minHeight: 20
  }
});
