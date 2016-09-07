// @flow
import React, { Component,PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.locationName}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  locationName: {
    fontSize: 32,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#FFFFFF',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
});
