// @flow
import React, { Component,PropTypes } from 'react';
import { Text } from 'react-native';
import moment from 'moment'

function momentIfValid(dateString) {
  return dateString ? moment(dateString) : null;
}

export default class DurationText extends Component {
  static propTypes = {
    arrive: PropTypes.string,
    depart: PropTypes.string,
    timezone: PropTypes.string,
  }

  getText() {
    const depart = momentIfValid(this.props.depart)

    if (depart) {
      return depart.fromNow().replace(/^in/, 'for')
    } else {
      return "indefinately"
    }
  }

  render() {
    const text = this.getText()
    if (text) {
      return <Text style={this.props.style}>{text}</Text>
    }
  }
}
