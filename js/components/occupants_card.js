// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import FullWidthCard from './generic/full_width_card'
import { colors } from '../styles/typography'

export default class OccupantsCard extends Component {
  render() {
    return (
      <FullWidthCard>
        <Text>
          Hello world
        </Text>
      </FullWidthCard>
    );
  }
}

const styles = StyleSheet.create({
});
