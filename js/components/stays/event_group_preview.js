// @flow
import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CardPart from '../generic/card_part'
import EventPreview from './event_preview'
import CardHeader from '../generic/card_header'
import CardButtonFooter from '../generic/card_button_footer'

export default class EventGroupPreview extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired
  }

  renderEventPreviews() {
    return this.props.events.map((event) => {
      return (
        <CardPart key={event.id}>
          <EventPreview event={event} />
        </CardPart>
      )
    })
  }

  render() {
    return (
      <View>
        <CardHeader>
          <Text style={styles.headerText}>upcoming events</Text>
        </CardHeader>
        {this.renderEventPreviews()}
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
