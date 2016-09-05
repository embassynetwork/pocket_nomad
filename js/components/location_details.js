// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CardPart from './generic/card_part'
import CardHeader from './generic/card_header'
import Icon from 'react-native-vector-icons/MaterialIcons';
import DetailPart from './detail_part'

export default class LocationDetails extends Component {
  render() {
    return (
      <View>
        <CardHeader>
          <Text style={styles.headerText}>location details</Text>
        </CardHeader>
        <CardPart>
          <DetailPart style={styles.detailPart} icon="location-on">
            <Text>1665 Haight St, San Francisco{"\n"}CA 94117 USA</Text>
          </DetailPart>
          <DetailPart style={styles.detailPart} icon="wifi">
            <Text>Network: Red Vic{"\n"}Password: modernomad</Text>
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
  },
  detailPart: {
    marginBottom: 16
  }
});
