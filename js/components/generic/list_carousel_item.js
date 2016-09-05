// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors, margins } from '../../styles/typography'

export default class ListCarouselItem extends Component {
  render() {
    var containerStyles = [styles.container]
    if (this.props.first) containerStyles.push(styles.first)

    return (
      <View style={containerStyles}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.cardBorder,
    borderTopWidth: 1,
    paddingTop: margins.cardPadding / 2,
    paddingBottom: margins.cardPadding / 2,
  },
  first: {
    borderTopWidth: 0,
  }
});
