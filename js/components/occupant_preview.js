// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors } from '../styles/typography'

export default class OccupantPreviw extends Component {
  render() {
    const imageUrl = "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <View style={styles.details}>
          <Text style={styles.name}>Craig Ambrose</Text>
          <Text style={styles.description} ellipsizeMode="tail" numberOfLines={1}>guest for 3 days</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  details: {
    flexDirection: 'column',
  },
  name: {
    fontWeight: "500",
    fontSize: 17,
  },
  description: {
    color: colors.subtleText,
    fontSize: 15,
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: colors.cardBorder,
    marginRight: 10,
  }
});
