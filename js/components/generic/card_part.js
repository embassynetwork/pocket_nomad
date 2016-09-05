// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../../styles/typography'

export default class CardPart extends Component {
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
    padding: 16,
    borderColor: colors.cardBorder,
    borderTopWidth: 1
  }
});
