// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../../styles/typography'
import ExternalLink from './external_link'

export default class CardButtonFooter extends Component {
  render() {
    return (
      <ExternalLink style={styles.container} url={this.props.url}>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </ExternalLink>
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
