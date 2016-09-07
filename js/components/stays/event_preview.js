// @flow
import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors } from '../../styles/typography'

export default class EventPreview extends Component {
  static propTypes = {
    event: PropTypes.shape({
      id: PropTypes.isRequired,
      name: PropTypes.string.isRequired,
      startTime: PropTypes.isRequired,
      imageUrl: PropTypes.string
    }).isRequired
  }

  render() {
    const event = this.props.event

    return (
      <View style={styles.container}>
        <View style={styles.details}>
          <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>{event.name}</Text>
          <Text style={styles.timeAndDate}>{event.startTime}</Text>
        </View>
        <Image style={styles.image} source={{uri: event.imageUrl}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontWeight: "500",
    fontSize: 17
  },
  timeAndDate: {
    color: colors.subtleText,
    fontSize: 15,
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: colors.cardBorder
  }
});
