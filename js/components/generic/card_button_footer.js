// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../../styles/typography'

export default class CardButtonFooter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.cardBorder,
    borderTopWidth: 1,
    padding: 16,
  },
  text: {
    textAlign: 'right',
    color: '#666666',
    fontWeight: '600',
  }
});
