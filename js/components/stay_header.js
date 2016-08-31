// @flow
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image style={styles.locationPic} source={{uri: 'https://embassynetwork.com/media/locations/62b0bb14-3541-4505-af5e-9a5c4a74bc91.jpg'}}>
          <Text style={styles.locationName}>The Red Victorian</Text>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 170,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DFE0E4'
  },
  locationName: {
    fontSize: 32,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#FFFFFF',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  locationPic: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});
