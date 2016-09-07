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
    const stay = {
      events: [
        {id: 1, name: "Bloom Network Launch", startTime: "Friday, 7pm", imageUrl: "https://embassynetwork.com/media/events/886e13aa-ab77-42c2-9c55-1cb2138bcb72.jpg"},
        {id: 2, name: "Silent Reading Salon", startTime: "Saturday, 6:30pm", imageUrl: "https://embassynetwork.com/media/events/886e13aa-ab77-42c2-9c55-1cb2138bcb72.jpg"},
        {id: 3, name: "Lecture Series: Imminent Urbanism", startTime: "Tuesday 5th Sep, 7:30pm", imageUrl: "https://embassynetwork.com/media/events/886e13aa-ab77-42c2-9c55-1cb2138bcb72.jpg"},
      ],
      occupants: [
        {id: 1, name: "Craig Ambrose", status: "guest", duration: 60, avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
        {id: 2, name: "Tracey Ambrose", status: "guest", duration: 60, avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
        {id: 3, name: "William Ambrose", status: "guest", duration: 60, avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
        {id: 4, name: "Jessy Shingler", status: "resident", avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
        {id: 5, name: "Robby Schingler", status: "resident", avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
        {id: 6, name: "Anouk Ruhaak", status: "resident", avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
        {id: 7, name: "Samy Andary", status: "resident", avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
        {id: 8, name: "Daniel Gasperz", status: "resident", avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
        {id: 9, name: "Guesty McGuestalot", status: "guest", avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
      ]
    }

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
          <Card><EventGroupPreview events={stay.events} /></Card>
          <OccupantsCard occupants={stay.occupants} />
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
