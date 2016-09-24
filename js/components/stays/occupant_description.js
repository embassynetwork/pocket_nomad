// @flow
import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import momentPropTypes from 'react-moment-proptypes'

export default class OccupantDescription extends Component {
  static propTypes = {
    style: PropTypes.object,
    clippedTime: momentPropTypes.momentObj.isRequired,
    arrive: momentPropTypes.momentObj,
    depart: momentPropTypes.momentObj,
    type: PropTypes.string.isRequired
  }

  description() {
    const arrive = this.props.arrive
    const depart = this.props.depart
    const clippedTime = this.props.clippedTime

    if (arrive && arrive.isSameOrAfter(clippedTime)) {
      return `arriving ${depart.fromNow()}`
    } else {
      if (!depart) {
        return "staying indefinately"
      } else if (depart.isSameOrAfter(clippedTime)) {
        return `departing ${depart.fromNow()}`
      } else {
        return `departed ${depart.fromNow()}`
      }
    }
  }

  render() {
    return (
      <View>
        <Text style={this.props.style} ellipsizeMode="tail" numberOfLines={1}>
          {this.props.type}
        </Text>
        <Text style={this.props.style} ellipsizeMode="tail" numberOfLines={1}>
          {this.description()}
        </Text>
      </View>
    )
  }
}
