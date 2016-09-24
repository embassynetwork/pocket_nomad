// @flow
import React from 'react'
import { Text } from 'react-native'
import { forEach } from 'lodash'
import moment from 'moment'

export function pluralize(word, number) {
  return number == 1 ? word : word + 's'
}

export function nodesToSentence(nodes) {
  var result = []
  forEach(nodes, (node, index) => {
    if (index > 0) {
      if (index >= nodes.length - 1) {
        result.push(<Text key={index}> and </Text>)
      } else {
        result.push(<Text key={index}>, </Text>)
      }
    }
    result.push(node)
  })
  return result
}

export function momentIfValid(dateString) {
  return dateString ? moment(dateString) : null;
}

export function timeClippedBy(dates) {
  var result = moment()
  if (dates.arrive) {
    startOfArrive = dates.arrive.startOf('day')
    if (result.isBefore(startOfArrive)) result = startOfArrive
  }
  return result;
}
