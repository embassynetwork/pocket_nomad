// @flow
import React, { Component,PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StayLink from './stay_link'
import DurationText from './duration_text'

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

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

  render() {
    const stay = this.props.stay

    return (
      <View style={styles.header}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.hello}>Hi, {stay.user.firstName}.</Text>
          <Text style={styles.youreAt}>{"you're"} at <B>{stay.location.name}</B></Text>
          <DurationText style={styles.youreAt} arrive={stay.arrive} depart={stay.depart} timezone={stay.location.timezone} />
        </View>
        {this.props.nextStay && <StayLink {...this.props.nextStay} />}
      </View>
    );
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
});
