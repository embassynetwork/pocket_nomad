// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class LocationDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.icon} name={this.props.icon} size={30} color="#555" />
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  icon: {
    minWidth: 40
  }
});
