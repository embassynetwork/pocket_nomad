// @flow
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Header from './stay_header'
import Card from './generic/card'
import EventGroupPreview from './event_group_preview'
import LocationDetails from './location_details'
import NotificationCard from './notification_card'
import OccupantsCard from './occupants_card'
import ParallaxView from 'react-native-parallax-view'

export default class Stay extends Component {
  render() {
    return (
      <ParallaxView
          backgroundSource={{uri: 'https://embassynetwork.com/media/locations/62b0bb14-3541-4505-af5e-9a5c4a74bc91.jpg'}}
          windowHeight={250}
          header={(
              <Header />
          )}
          scrollableViewStyle={styles.container}
      >
        <View>
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <Card><EventGroupPreview /></Card>
          <OccupantsCard />
          <Card><LocationDetails /></Card>
        </View>
      </ParallaxView>

      // <View style={styles.container}>
      //   <Header />
      //   <ScrollView style={styles.cardContainer}>
      //   </ScrollView>
      // </View>
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
