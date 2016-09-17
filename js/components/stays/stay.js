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
    console.log('stay props', this.props)
    const stay = this.props.stay

    if (stay) {
      return (
        <ParallaxView
            backgroundSource={{uri: stay.location.headerImageUrl}}
            windowHeight={250}
            header={<Header name={stay.location.name} userName={stay.user.firstName} />}
            scrollableViewStyle={styles.container} >
          <View>
            {/*<NotificationCard /><NotificationCard /><NotificationCard />*/}
            {stay.events && <Card><EventGroupPreview events={stay.events} /></Card>}
            {stay.occupants && <OccupantsCard occupants={stay.occupants} />}
            {stay.locationDetails && <Card><LocationDetails details={stay.locationDetails} /></Card>}
          </View>
        </ParallaxView>
      );

    } else {
      return <View></View>
    }
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
