// @flow
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={headerStyles.header}>
        <Image style={headerStyles.locationPic} source={{uri: 'https://embassynetwork.com/media/locations/62b0bb14-3541-4505-af5e-9a5c4a74bc91.jpg'}} />
        <Text style={headerStyles.locationName}>The Red Victorian</Text>
      </View>
    );
  }
}

const headerStyles = StyleSheet.create({
  header: {
    height: 200,
    justifyContent: 'flex-end',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DFE0E4'
  },
  locationName: {
    fontSize: 32,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  locationPic: {
    flex: 1
  }
});

export default class Stay extends Component {
  render() {
    return (
      <View style={stayStyles.container}>
        <Header />
      </View>
    );
  }
}

const stayStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE'
  },
  header: {
    borderColor: '#0000FF',
    borderWidth: 1,
    height: 200
  }
});
