// @flow
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './stay_header'
import Card from '../generic/card'
import EventGroupPreview from './event_group_preview'
import LocationDetails from './location_details'
import NotificationCard from './notification_card'
import OccupantsCard from './occupants_card'
import ParallaxView from 'react-native-parallax-view'

export default class Stay extends Component {
  render() {
    const stay = this.props.stay

    return (
      <ParallaxView
          backgroundSource={{uri: stay.location.headerImageUrl}}
          windowHeight={250}
          header={<Header name={stay.location.name} />}
          scrollableViewStyle={styles.container} >
        <View>
          {/*<NotificationCard /><NotificationCard /><NotificationCard />*/}
          <Card><EventGroupPreview events={stay.events} /></Card>
          <OccupantsCard occupants={stay.occupants} />
          <Card><LocationDetails details={stay.locationDetails} /></Card>
        </View>
      </ParallaxView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE',
    paddingTop: 10
  },
  cardContainer: {
  }
});
