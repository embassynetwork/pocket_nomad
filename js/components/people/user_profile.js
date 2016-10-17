// @flow
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import config from '../../config'


export default class UserProfile extends Component {
  render() {
    const user = this.props.user
    const uri = config.imageHost + user.userprofile.image
    console.log('uri', uri)
    //

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: uri}} resizeMode="cover" />
        <Text>this is a user profile for {user.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
  image: {
    backgroundColor: '#00FF00',
    height: 300
  }
});
