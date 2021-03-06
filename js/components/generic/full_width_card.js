// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../../styles/typography'

export default class FullWidthCard extends Component {
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
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: 2,
    minHeight: 20
  }
});
