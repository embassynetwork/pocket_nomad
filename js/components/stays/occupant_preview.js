// @flow
import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../styles/typography'
import { pluralize } from '../../utilities'
import Avatar from '../generic/avatar'
import OccupantDescription from './occupant_description'
import ExternalLink from '../generic/external_link'
import config from '../../config'
import { momentIfValid, timeClippedBy, momentWithinNullableRange } from '../../utilities'
import momentPropTypes from 'react-moment-proptypes'
import moment from 'moment'
import { Actions } from 'react-native-router-flux';

export default class OccupantPreviw extends Component {
  static propTypes = {
    yourDates: PropTypes.object.isRequired,
    occupant: PropTypes.shape({
      id: PropTypes.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        userprofile: PropTypes.shape({
          image: PropTypes.string
        }).isRequired,
      }).isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired
  }

  occupantNotCurrent(dates) {
    return !momentWithinNullableRange(moment(), dates)
  }

  yourStayIsOccurringNow() {
    return momentWithinNullableRange(moment(), this.props.yourDates)
  }

  render() {
    const occupant = this.props.occupant
    const user = occupant.user
    const profileUrl = config.host + user.url
    const occurringNow = this.yourStayIsOccurringNow()
    const dates = {
      arrive: momentIfValid(occupant.arrive),
      depart: momentIfValid(occupant.depart)
    }
    var containerStyles = [styles.container]
    if (occurringNow && this.occupantNotCurrent(dates)) containerStyles.push(styles.notCurrent)

    const goToProfile = () => Actions.userProfile({text: 'Hello World!'});

    return (
      <View style={[containerStyles]}>
        <TouchableOpacity onPress={goToProfile}>
          <Avatar url={user.userprofile.imageThumb} />
        </TouchableOpacity>
        <View style={styles.details}>
          <Text onPress={goToProfile} style={styles.name}>{user.name}</Text>
          <OccupantDescription occupant={{...dates, type: occupant.type}} occurringNow={occurringNow} yourDates={this.props.yourDates} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  notCurrent: {
    opacity: 0.5
  },
  details: {
    flexDirection: 'column',
  },
  name: {
    fontWeight: "500",
    fontSize: 17,
  },
  description: {
    color: colors.subtleText,
    fontSize: 15,
  },
});
