// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors, margins } from '../../styles/typography'

export default class ListCarouselItemSet extends Component {
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
    paddingTop: margins.cardPadding / 2,
    paddingBottom: margins.cardPadding / 2,
    paddingLeft: margins.cardPadding,
    borderColor: colors.cardBorder,
    borderTopWidth: 1,
  }
});
