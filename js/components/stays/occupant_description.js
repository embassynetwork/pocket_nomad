// @flow
import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class OccupantDescription extends Component {
  static propTypes = {
    style: PropTypes.object,
    arrive: PropTypes.string,
    depart: PropTypes.string,
    type: PropTypes.string.isRequired
  }

  description() {
    const type = this.props.type

    return type;
    // if (type == 'resident') {
    //   return type
    // } else {
    //   if (occupant.duration) {
    //     return `${occupant.status} for ${occupant.duration} ${pluralize('day', occupant.duration)}`
    //   } else {
    //     return occupant.status
    //   }
    // }
  }

  render() {
    return (
      <Text style={this.props.style} ellipsizeMode="tail" numberOfLines={1}>
        {this.description()}
      </Text>
    )
  }
}
