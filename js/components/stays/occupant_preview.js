// @flow
import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors } from '../../styles/typography'
import { pluralize } from '../../utilities'
import Avatar from '../generic/avatar'
import OccupantDescription from './occupant_description'
import ExternalLink from '../generic/external_link'
import config from '../../config'
import { momentIfValid, timeClippedBy } from '../../utilities'
import momentPropTypes from 'react-moment-proptypes'

export default class OccupantPreviw extends Component {
  static propTypes = {
    clippedTime: momentPropTypes.momentObj.isRequired,
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

  render() {
    const occupant = this.props.occupant
    const user = occupant.user
    const profileUrl = config.host + user.url
    const dates = {
      arrive: momentIfValid(occupant.arrive),
      depart: momentIfValid(occupant.depart)
    }

    return (
      <View style={styles.container}>
        <ExternalLink url={profileUrl}>
          <Avatar url={user.userprofile.imageThumb} />
        </ExternalLink>
        <View style={styles.details}>
          <ExternalLink url={profileUrl}>
            <Text style={styles.name}>{user.name}</Text>
          </ExternalLink>
          <OccupantDescription {...dates} clippedTime={this.props.clippedTime} type={occupant.type} />
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
