// @flow
import React, { Component,PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class PreviousStayLink extends Component {
  static propTypes = {
    stay: PropTypes.object.isRequired,
    goTo: PropTypes.func.isRequired
  }

  onPress() {
    this.props.goTo()
  }

  render() {
    return (
      <TouchableOpacity style={styles.linkContainer} onPress={this.onPress.bind(this)}>
        <Icon style={styles.arrow} name="chevron-left" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  linkContainer: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 8,
    paddingLeft: 8,
    alignSelf: 'flex-start'
  },
  arrow: {
    fontSize: 42,
    color: '#FFFFFF',
    padding: 0,
  },
});
