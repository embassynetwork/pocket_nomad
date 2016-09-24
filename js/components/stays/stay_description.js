// @flow
import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import momentPropTypes from 'react-moment-proptypes'
import moment from 'moment'

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

const StayDescriptions = {
  Past: (props) => {
    return (
      <View>
        <Text style={props.textStyle}>you were at <B>{props.locationName}</B></Text>
        <Text style={props.textStyle}>{props.depart.fromNow()}</Text>
      </View>
    )
  },

  Present: (props) => {
    const text = (props.depart ? `for another ${props.depart.fromNow(true)}` : 'indefinately')
    return (
      <View>
        <Text style={props.textStyle}>you're at <B>{props.locationName}</B></Text>
        <Text style={props.textStyle}>{text}</Text>
      </View>
    )
  },

  Future: (props) => {
    return (
      <View>
        <Text style={props.textStyle}>you're at <B>{props.locationName}</B></Text>
        <Text style={props.textStyle}>in {props.arrive.fromNow(true)}</Text>
      </View>
    )
  },
}


export default class StayDescription extends Component {
  static propTypes = {
    locationName: PropTypes.string.isRequired,
    arrive: momentPropTypes.momentObj,
    depart: momentPropTypes.momentObj,
  }

  getText() {
    const depart = this.props.depart

    if (depart) {
      return depart.fromNow().replace(/^in/, 'for')
    } else {
      return "indefinately"
    }
  }

  render() {
    SubComponent = StayDescriptions[this.timeCategory()]
    return <SubComponent {...this.props} />;

    // return React.createElement(subComponent, this.props)

    // const text = this.getText()
    // if (text) {
    //   return (
    //     <View>
    //       <Text style={this.props.textStyle}>{this._locationPrefix()} <B>{this.props.locationName}</B></Text>
    //       <Text style={this.props.textStyle}>{text}</Text>
    //     </View>
    //   )
    // }
  }

  timeCategory() {
    if (this.props.depart && this.props.depart.isBefore(moment().startOf('day'))) return 'Past'
    if (this.props.arrive && this.props.arrive.isAfter(moment().endOf('day'))) return 'Future'
    return 'Present'
  }

  _locationPrefix() {
    if (this._alreadyDeparted()) {
      return `you were at`
    } else {
      return `you're at`
    }
  }

  _alreadyDeparted() {
    return false
  }
}
