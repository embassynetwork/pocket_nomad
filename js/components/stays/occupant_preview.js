// @flow
import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors } from '../../styles/typography'
import { pluralize } from '../../utilities'
import Avatar from '../generic/avatar'

export default class OccupantPreviw extends Component {
  static propTypes = {
    occupant: PropTypes.shape({
      id: PropTypes.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      duration: PropTypes.number,
      userprofile: PropTypes.shape({
        image: PropTypes.string
      }).isRequired,
    }).isRequired
  }

  description() {
    const occupant = this.props.occupant

    if (occupant.status == 'resident') {
      return occupant.status
    } else {
      if (occupant.duration) {
        return `${occupant.status} for ${occupant.duration} ${pluralize('day', occupant.duration)}`
      } else {
        return occupant.status
      }
    }
  }

  render() {
    const occupant = this.props.occupant

    return (
      <View style={styles.container}>
        <Avatar url={occupant.userprofile.imageThumb} />
        <View style={styles.details}>
          <Text style={styles.name}>{occupant.name}</Text>
          <Text style={styles.description} ellipsizeMode="tail" numberOfLines={1}>
            {this.description()}
          </Text>
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
