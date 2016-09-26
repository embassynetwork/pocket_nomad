// @flow
import React, { Component, PropTypes } from 'react'
import { Platform, View, Text, StyleSheet } from 'react-native'
import Stay from './stay'
import NoStay from './no_stay'
import _ from 'lodash'
import Swiper from 'react-native-swiper'

class StaysSwipeable extends Component {
  static propTypes = {
    stays: PropTypes.array.isRequired
  }

  nextStay() {
    this.refs.swiper.scrollBy(1)
  }

  render() {
    if (this.props.stays.length >= 1) {
      const stayPages = _.map(this.props.stays, (pageStay) => {
        return <Stay key={pageStay.id} stay={pageStay} nextStay={this._stayLink(this._nextStay(pageStay))} />
      })
      return (
        <Swiper style={styles.swiper} showsPagination={false} loop={false} ref="swiper" >
          {stayPages}
        </Swiper>
      )
    } else {
      return <NoStay />
    }
  }

  _stayLink(stay) {
    if (stay) {
      return {stay: stay, goTo: this.nextStay.bind(this)}
    }
  }

  _nextStay(stay) {
    const index = _.indexOf(this.props.stays, stay)
    return index >= 0 ? this.props.stays[index + 1] : null
  }
}

const styles = StyleSheet.create({
  swiper: {
    backgroundColor: '#E9EBEE',
  },

});


class StaysAndoid extends Component {
  constructor(props) {
    super(props)
    this.state = {stayID: (props.stays[0] ? props.stays[0].id : null)}
  }

  goToStay(stay) {
    this.setState({stayID: stay.id})
  }

  selectedStayIndex() {
    const stays = this.props.stays

    if (this.state.stayID) {
      const indexForState = _.findIndex(stays, {'id': this.state.stayID})
      return indexForState ? indexForState : this._initializeStayIndex();
    } else {
      return this._initializeStayIndex()
    }
  }

  componentWillReceiveProps(props) {
    const stays = (props.stays || [])
    var stayID = this.state.stayID

    if (stayID) {
      const stay = _.find(this.props.stays, {'id': stayID})
      if (!stay) {
        stayID = null
      }
    }

    if (!stayID) {
      stayID = stays[0] ? stays[0].id : null
    }

    if (stayID != this.state.stayID) {
      this.setState({stayID: stayID})
    }
  }

  _initializeStayIndex() {
    const stays = this.props.stays
    const firstStayId = (stays.length > 0) ? stays[0].id : null
    this.setState({stayID: firstStayId})
    return 0
  }

  currentStay() {
    if (this.state.stayID) {
      return _.find(this.props.stays, {'id': this.state.stayID})
    }
  }

  render() {
    stay = this.currentStay();
    if (stay) {
      return <Stay key={stay.id} stay={stay} previousStay={this._stayLink(this._previousStay(stay))} nextStay={this._stayLink(this._nextStay(stay))} />
    } else {
      return <View><Text>{"no stay selected, this shouldn't happen"}</Text></View>
    }
  }

  _stayLink(stay) {
    if (stay) {
      return {stay: stay, goTo: () => { this.goToStay(stay)}}
    }
  }

  _nextStay(stay) {
    const index = _.indexOf(this.props.stays, stay)
    return index >= 0 ? this.props.stays[index + 1] : null
  }

  _previousStay(stay) {
    const index = _.indexOf(this.props.stays, stay)
    return index >= 0 ? this.props.stays[index - 1] : null
  }
}

function Stays(props) {
  if (Platform.OS === 'android') {
    return <StaysAndoid {...props} />
  } else {
    return <StaysSwipeable {...props} />
  }
}

export default Stays
