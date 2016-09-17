// @flow
import React, { Component } from 'react'
import ExternalLink from './external_link'
import { Text, StyleSheet } from 'react-native'

export default function TextLink(props) {
  return (
    <ExternalLink url={props.url}>
      <Text style={styles.text}>{props.text}</Text>
    </ExternalLink>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#0000FF',
    textDecorationLine: 'underline'
  }
});
