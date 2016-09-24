// @flow
import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors, fonts } from '../../styles/typography'
import FullWidthCard from '../generic/full_width_card'
import CardHeader from '../generic/card_header'
import CardPart from '../generic/card_part'
import ListCarousel from '../generic/list_carousel'
import OccupantPreview from './occupant_preview'
import { forEach, map } from 'lodash'
import { pluralize, nodesToSentence } from '../../utilities'
import moment from 'moment'

const Num = (props) => <Text style={styles.num}>{props.children}</Text>

export default class OccupantsCard extends Component {
  static propTypes = {
    occupants: PropTypes.array.isRequired
  }

  renderOccupantPreviews() {
    return this.props.occupants.map((occupant) => {
      return <OccupantPreview key={occupant.id} occupant={occupant} yourDates={this.props.yourDates} />
    })
  }

  stateCounts() {
    var result = {}
    forEach(this.props.occupants, (occupant) => {
        result[occupant.type] = result[occupant.type] || 0
        result[occupant.type] += 1
    })
    return result
  }

  statusSummary(status, count) {
    return <Text key={status}><Num>{count}</Num> {pluralize(status, count)}</Text>
  }

  statusSummaries() {
    var totals = this.stateCounts()
    var parts = map(totals, (value, key) => {
      return this.statusSummary(key, value)
    })
    return nodesToSentence(parts)
  }

  stayFinished() {
    const depart = this.props.yourDates.depart
    return !depart || moment().isAfter(depart)
  }

  summary() {
    const prefix = this.stayFinished() ? "There were" : "There will be"

    return (
      <Text>
        {prefix} {this.statusSummaries()} during your stay
      </Text>
    )
  }

  render() {
    return (
      <FullWidthCard>
        <CardHeader>
          {this.summary()}
        </CardHeader>
        <ListCarousel>
          {this.renderOccupantPreviews()}
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
