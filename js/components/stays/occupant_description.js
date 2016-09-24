// @flow
import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import momentPropTypes from 'react-moment-proptypes'
import { timeClippedBy } from '../../utilities'

export default class OccupantDescription extends Component {
  static propTypes = {
    style: PropTypes.object,
    arrive: momentPropTypes.momentObj,
    depart: momentPropTypes.momentObj,
    type: PropTypes.string.isRequired,
    yourDates: PropTypes.shape({
      arrive: momentPropTypes.momentObj,
      depart: momentPropTypes.momentObj
    }).isRequired
  }

  description() {
    const arrive = this.props.arrive
    const depart = this.props.depart
    const yourDates = this.props.yourDates
    const clippedTime = timeClippedBy(yourDates)

    const arrivesBeforeYou = !arrive || (yourDates.arrive && arrive.isBefore(yourDates.arrive.startOf('day')));
    const departsAfterYou = !depart || (yourDates.depart && depart.isBefore(yourDates.depart.endOf('day')));

    if (arrivesBeforeYou && departsAfterYou) {
      return null
    }

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
