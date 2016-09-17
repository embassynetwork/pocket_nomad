// @flow
import React from 'react'
import { View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

export default function LoadingPage(props) {
  return <View><Spinner visible={true} /></View>
}
