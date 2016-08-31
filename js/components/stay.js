// @flow
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './stay_header'
import Card from './card'
import EventGroupPreview from './event_group_preview'
import LocationDetails from './location_details'

export default class Stay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.cardContainer}>
          <Card><EventGroupPreview /></Card>
          <Card><LocationDetails /></Card>
          <Card />
          <Card />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE'
  },
  cardContainer: {
    paddingTop: 10
  }
});
