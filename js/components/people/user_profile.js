// @flow
import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native'
import config from '../../config'
import { colors } from '../../styles/typography'


function SubSection(props) {
  if (!props.text) return null

  return (
    <View style={styles.subSection}>
      <Text style={styles.subHeading}>{props.title}</Text>
      <Text>{props.text}</Text>
    </View>
  )
}

export default class UserProfile extends Component {
  render() {
    const user = this.props.user
    const uri = config.imageHost + user.userprofile.image

    return (
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{uri: uri}} resizeMode="cover" />
        <View style={styles.header}>
          <Text style={styles.userName}>{user.name}</Text>
            <Text>{user.userprofile.bio}</Text>
        </View>
        <View style={styles.nextBit}>
          <SubSection title="Projects" text={user.userprofile.projects} />
          <SubSection title="Learning/Sharing Interests" text={user.userprofile.sharing} />
          <SubSection title="Discussion topics" text={user.userprofile.discussion} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyBackground,
    marginTop: 50
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
    fontSize: 24,
    marginBottom: 10
  },
  nextBit: {
    padding: 20,
    backgroundColor: colors.greyBackground,
    paddingBottom: 30
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  subSection: {
    marginBottom: 15
  }
});
