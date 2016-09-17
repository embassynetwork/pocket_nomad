// @flow
import React, { Component,PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class StayLink extends Component {
  static propTypes = {
    stay: PropTypes.object.isRequired,
    goTo: PropTypes.func.isRequired
  }

  onPress() {
    this.props.goTo()
  }

  render() {
    return (
      <View style={styles.nextLinkContainer}>
        <TouchableOpacity style={styles.nextLink} onPress={this.onPress.bind(this)}>
          <View style={styles.nextLinkWords}>
            <Text style={styles.nextHeader}>up next</Text>
            <Text style={[styles.text, styles.nextStay]}>{this.props.stay.location.name}</Text>
          </View>
          <Icon style={styles.arrow} name="chevron-right" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  nextLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  nextLink: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 8,
    paddingLeft: 8,
  },
  nextLinkWords: {
    flexDirection: 'column',
  },
  nextHeader: {
    color: '#FFFFFF',
  },
  nextStay: {
  },
  arrow: {
    fontSize: 42,
    color: '#FFFFFF',
    padding: 0,
  },
});
