// @flow
import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors } from '../../styles/typography'
import ImageThumb from '../generic/image_thumb'
import { momentIfValid } from '../../utilities'
import ExternalLink from '../generic/external_link'
import config from '../../config'

function timeFormat(time) {
  return time.minutes() == 0 ? "ha" : "h:mma"
}

function formatMoment(time) {
  return time.format(`ddd Do MMM, ${timeFormat(time)}`)
}

function formatMomentRange(start, end) {
  if (start.dayOfYear() == end.dayOfYear()) {
    return start.format(`ddd Do MMM, ${timeFormat(start)}`) + ' - ' + end.format(timeFormat(end))
  }
  return start.format(`ddd Do MMM, ${timeFormat(start)}`)
}

export default class EventPreview extends Component {
  static propTypes = {
    event: PropTypes.shape({
      id: PropTypes.isRequired,
      title: PropTypes.string.isRequired,
      startTime: PropTypes.isRequired,
      imageUrl: PropTypes.string
    }).isRequired
  }

  timeDescription() {
    const event = this.props.event
    const start = momentIfValid(event.start)
    const end = momentIfValid(event.end)

    return end ? formatMomentRange(start, end) : formatMoment(start)
  }

  render() {
    const event = this.props.event
    const singleLine = {ellipsizeMode: 'tail', numberOfLines: 1}
    const url = config.host + event.url

    return (
      <ExternalLink url={url} style={styles.container}>
        <View style={styles.details}>
          <Text style={styles.title} {...singleLine}>{event.title}</Text>
          <Text style={styles.timeAndDate} {...singleLine}>{this.timeDescription()}</Text>
          <Text style={styles.timeAndDate} {...singleLine}>{event.where}</Text>
        </View>
        <ImageThumb style={styles.image} url={event.image} />
      </ExternalLink>
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
    marginLeft: 10,
  }
});
