// @flow
import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import Stay from './stay'
import NoStay from './no_stay'

export default class Stays extends Component {
  static propTypes = {
    stays: PropTypes.array.isRequired
  }

  render() {
    if (this.props.stays.length > 0) {
      var stay = {...(this.props.stays[0])}
      return <Stay stay={stay} />
    } else {
      return <NoStay />
    }
  }
}
