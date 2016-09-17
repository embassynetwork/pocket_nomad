// @flow
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TextLink from '../generic/text_link'

export default class NoStay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You have no upcoming stay</Text>
        <TextLink url="http://embassynetwork.com" text="Make a booking" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
