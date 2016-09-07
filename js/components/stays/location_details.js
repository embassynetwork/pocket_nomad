// @flow
import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CardPart from '../generic/card_part'
import CardHeader from '../generic/card_header'
import Icon from 'react-native-vector-icons/MaterialIcons';
import DetailPart from './detail_part'

export default class LocationDetails extends Component {
  static propTypes = {
    details: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.isRequired,
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired
  }

  renderDetailParts() {
    return this.props.details.map((detail) => {
      return (
        <DetailPart key={detail.id} style={styles.detailPart} icon={detail.icon}>
          <Text>{detail.text}</Text>
        </DetailPart>
      )
    })
  }

  render() {
    return (
      <View>
        <CardHeader>
          <Text style={styles.headerText}>location details</Text>
        </CardHeader>
        <CardPart>
          {this.renderDetailParts()}
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
