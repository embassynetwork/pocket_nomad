// @flow
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ErrorPage(props) {
  console.log("error occured", props)
  return <View style={styles.container}><Text>an error occured</Text></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e74c3c',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
