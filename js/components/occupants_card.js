// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors, fonts } from '../styles/typography'
import FullWidthCard from './generic/full_width_card'
import CardHeader from './generic/card_header'
import CardPart from './generic/card_part'
import ListCarousel from './generic/list_carousel'
import OccupantPreview from './occupant_preview'

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
        <ListCarousel>
          <OccupantPreview id="1" name="Craig Ambrose" />
          <OccupantPreview id="2" name="Tracey Ambrose" />
          <OccupantPreview id="3" name="Jessy Schingler" />
          <OccupantPreview id="4" name="Robbie Schingler" />
          <OccupantPreview id="5" name="Anouk Ruhaak" />
          <OccupantPreview id="6" name="Samy Andary" />
          <OccupantPreview id="7" name="Daniel Gasperz" />
        </ListCarousel>
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
