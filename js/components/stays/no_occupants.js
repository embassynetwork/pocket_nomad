import React, { Component } from 'react';
import CardHeader from '../generic/card_header'
import CardPart from '../generic/card_part'
import Card from '../generic/card'
import { StyleSheet, Text } from 'react-native';

function NoOccupants(props) {
  return (
    <Card>
      <CardHeader>
        <Text style={styles.headerText}>There's no one else here</Text>
      </CardHeader>
      <CardPart>
        <Text>It's just you, I guess pants are officially optional</Text>
      </CardPart>
    </Card>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold'
  }
});


export default NoOccupants
