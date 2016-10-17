// @flow
import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native'
import config from '../../config'
import { colors } from '../../styles/typography'

export default class UserProfile extends Component {
  render() {
    const user = this.props.user
    const uri = config.imageHost + user.userprofile.image

    return (
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{uri: uri}} resizeMode="cover" />
        <View style={styles.header}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text>some profile details go here</Text>
        </View>
        <View style={styles.nextBit}>
          <Text>some other details go here</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: colors.greyBackground
  },
  image: {
    backgroundColor: '#999999',
    height: 300
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  userName: {
    fontSize: 24
  },
  nextBit: {
    padding: 20,
    backgroundColor: colors.greyBackground
  }
});
