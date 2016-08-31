// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class CardHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
});
