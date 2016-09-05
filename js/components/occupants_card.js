// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import FullWidthCard from './generic/full_width_card'
import CardHeader from './generic/card_header'
import CardPart from './generic/card_part'
import { colors, fonts } from '../styles/typography'

export default class OccupantsCard extends Component {
  render() {
    const Num = (props) => <Text style={styles.num}>{props.children}</Text>

    return (
      <FullWidthCard>
        <CardHeader>
          <Text>
            There will be <Num>12</Num> long-term residents and <Num>4</Num> guests during
            your stay
          </Text>
        </CardHeader>
        <CardPart>
          <Text>hello world</Text>
        </CardPart>
      </FullWidthCard>
    );
  }
}

const styles = StyleSheet.create({
  num: {
    fontWeight: 'bold',
    fontSize: fonts.baseFontSize + 2
  }
});
