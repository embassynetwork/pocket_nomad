// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CardPart from './card_part'
import CardHeader from './card_header'

export default class LocationDetails extends Component {
  render() {
    return (
      <View>
        <CardHeader>
          <Text style={styles.headerText}>location</Text>
        </CardHeader>
        <CardPart>
          <Text>foobar</Text>
        </CardPart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontSize: 17
  }
});
