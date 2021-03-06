// @flow
import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import StayHeader from './stay_header'
import Card from '../generic/card'
import EventGroupPreview from './event_group_preview'
import LocationDetails from './location_details'
import NotificationCard from './notification_card'
import OccupantsCard from './occupants_card'
import ParallaxView from 'react-native-parallax-view'
import config from '../../config'
import { momentIfValid } from '../../utilities'
import { colors } from '../../styles/typography'

export default class Stay extends Component {
  static propTypes = {
    stay: PropTypes.object.isRequired,
    nextStay: PropTypes.object
  }

  render() {
    const stay = this.props.stay
    const seeAllLink = `${config.host}/locations/${stay.location.slug}/events/upcoming/`
    const dates = {
      arrive: momentIfValid(stay.arrive),
      depart: momentIfValid(stay.depart)
    }

    return (
      <ParallaxView
          backgroundSource={{uri: this.headerImageUrl()}}
          windowHeight={250}
          header={<StayHeader stay={stay} previousStay={this.props.previousStay} nextStay={this.props.nextStay} />}
          scrollableViewStyle={styles.container} >
        <View>
          {/*<NotificationCard /><NotificationCard /><NotificationCard />*/}
          {stay.upcomingEventsDuring && <EventGroupPreview events={stay.upcomingEventsDuring} seeAllLink={seeAllLink} />}
          {stay.occupantsDuring && <OccupantsCard occupants={stay.occupantsDuring} yourDates={dates} />}
          {stay.locationDetails && <Card><LocationDetails details={stay.locationDetails} /></Card>}
        </View>
      </ParallaxView>
    );
  }

  headerImageUrl() {
    if (this.props.stay.location.image) {
      return config.imageHost + this.props.stay.location.image
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 50,
    backgroundColor: colors.greyBackground,
  }
});
