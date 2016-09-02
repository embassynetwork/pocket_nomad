// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors } from '../styles/typography'

export default class EventPreview extends Component {
  render() {
    const imageUrl = "https://embassynetwork.com/media/events/886e13aa-ab77-42c2-9c55-1cb2138bcb72.jpg"

    return (
      <View style={styles.container}>
        <View style={styles.details}>
          <Text style={styles.title}>Bloom Network Launch</Text>
          <Text style={styles.timeAndDate}>Friday, 7pm</Text>
        </View>
        <Image style={styles.image} source={{uri: imageUrl}} />
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
