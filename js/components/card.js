// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a card</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: 190,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    padding: 10
  }
});
