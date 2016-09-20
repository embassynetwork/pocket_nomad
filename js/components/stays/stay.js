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


export default class Stay extends Component {
  static propTypes = {
    stay: PropTypes.object.isRequired,
    nextStay: PropTypes.object
  }

  render() {
    const stay = this.props.stay
    console.log('this.headerImageUrl()', this.headerImageUrl())

    return (
      <ParallaxView
          backgroundSource={{uri: this.headerImageUrl()}}
          windowHeight={250}
          header={<StayHeader stay={stay} nextStay={this.props.nextStay} />}
          scrollableViewStyle={styles.container} >
        <View>
          {/*<NotificationCard /><NotificationCard /><NotificationCard />*/}
          {stay.events && <Card><EventGroupPreview events={stay.events} /></Card>}
          {stay.occupants && <OccupantsCard occupants={stay.occupants} />}
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
    backgroundColor: '#E9EBEE',
  }
});
