// @flow
import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import Stay from './stay'
import NoStay from './no_stay'
import _ from 'lodash'

export default class Stays extends Component {
  static propTypes = {
    stays: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {stayId: this._firstStayId(props.stays)}
  }

  componentWillReceiveProps(nextProps) {
    this.selectFirstStayIfNone(nextProps.stays)
  }

  selectStay(stay) {
    this.setState({stayId: stay.id})
  }

  render() {
    const stay = this._selectedStay()

    if (stay) {
      return <Stay stay={stay} nextStay={this._stayLink(this._nextStay(stay))} />
    } else {
      return <NoStay />
    }
  }

  _selectedStay() {
    if (this.state.stayId) {
      return _.find(this.props.stays, {id: this.state.stayId})
    }
  }

  _stayLink(stay) {
    if (stay) {
      return {stay: stay, goTo: () => { this.selectStay(stay) }}
    }
  }

  _nextStay(stay) {
    const index = _.indexOf(this.props.stays, stay)
    return index >= 0 ? this.props.stays[index + 1] : null
  }

  _selectFirstStayIfNone(stays) {
    if (!this.state.stayId) {
      const firstId = this._firstStayId(stays)
      if (firstId) {
        this.setState({stayId: firstId})
      }
    }
  }

  _firstStayId(stays) {
    const firstStay = stays[0]
    return firstStay ? firstStay.id : null
  }
}
