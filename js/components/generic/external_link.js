// @flow
import React, { Component } from 'react'
import { TouchableOpacity, Linking } from 'react-native'

export default class ExternalLink extends Component {
  onPress() {
    Linking.openURL(this.props.url)
  }

  render() {
    return <TouchableOpacity style={this.props.style} onPress={this.onPress.bind(this)}>{this.props.children}</TouchableOpacity>
  }
}
