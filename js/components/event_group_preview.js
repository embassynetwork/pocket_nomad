// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CardPart from './card_part'
import EventPreview from './event_preview'
import CardHeader from './card_header'
import CardButtonFooter from './card_button_footer'

export default class EventGroupPreview extends Component {
  render() {
    return (
      <View>
        <CardHeader>
          <Text style={styles.headerText}>upcoming events</Text>
        </CardHeader>
        <CardPart>
          <EventPreview />
        </CardPart>
        <CardPart>
          <EventPreview />
        </CardPart>
        <CardPart>
          <EventPreview />
        </CardPart>
        <CardButtonFooter>see all</CardButtonFooter>
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
