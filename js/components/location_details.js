// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CardPart from './card_part'
import CardHeader from './card_header'
import Icon from 'react-native-vector-icons/MaterialIcons';
import DetailPart from './detail_part'

export default class LocationDetails extends Component {
  render() {
    return (
      <View>
        <CardHeader>
          <Text style={styles.headerText}>location</Text>
        </CardHeader>
        <CardPart>
          <DetailPart icon="location-on">
            <Text>1665 Haight St, San Francisco{"\n"}CA 94117 USA</Text>
          </DetailPart>
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
