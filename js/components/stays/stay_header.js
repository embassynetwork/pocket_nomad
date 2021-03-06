// @flow
import React, { Component,PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StayLink from './stay_link'
import PreviousStayLink from './previous_stay_link'
import StayDescription from './stay_description'
import moment from 'moment'
import { momentIfValid } from '../../utilities'

export default class StayHeader extends Component {
  static propTypes = {
    stay: PropTypes.shape({
      location: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired,
      user: PropTypes.shape({
        firstName: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    nextStay: PropTypes.object
  }

  renderStayLinks() {
    // {this.props.previousStay && <StayLink {...this.props.previousStay} />}
    // {this.props.nextStay && <StayLink {...this.props.nextStay} />}
    if (this.props.previousStay || this.props.nextStay) {
      return (
        <View style={styles.stayLinksContainer}>
          {this.props.previousStay && <PreviousStayLink {...this.props.previousStay} />}
          {this.props.nextStay && <StayLink {...this.props.nextStay} />}
        </View>
      )
    }
  }

  render() {
    const stay = this.props.stay

    return (
      <View style={styles.header}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.hello}>Hi, {stay.user.firstName}.</Text>
          <StayDescription textStyle={styles.youreAt} locationName={stay.location.name} {...this.timeFields()} />
        </View>
        {this.renderStayLinks()}
      </View>
    );
  }

  timeFields() {
    const stay = this.props.stay
    return {
      arrive: momentIfValid(stay.arrive),
      depart: momentIfValid(stay.depart)
    }
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  welcomeContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  hello: {
    color: '#FFFFFF',
    fontSize: 48,
    marginBottom: 5,
  },
  youreAt: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  stayLinksContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});
