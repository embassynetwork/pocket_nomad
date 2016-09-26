// @flow
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import _ from 'lodash'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { BuildDataHandler } from '../generic/data_handler'
import Stays from './stays'

// const redvic = {
//   events: [
//     {id: 1, name: "Bloom Network Launch", startTime: "Friday, 7pm", imageUrl: "https://embassynetwork.com/media/events/886e13aa-ab77-42c2-9c55-1cb2138bcb72.jpg"},
//     {id: 2, name: "Silent Reading Salon", startTime: "Saturday, 6:30pm", imageUrl: "https://embassynetwork.com/media/events/886e13aa-ab77-42c2-9c55-1cb2138bcb72.jpg"},
//     {id: 3, name: "Lecture Series: Imminent Urbanism", startTime: "Tuesday 5th Sep, 7:30pm", imageUrl: "https://embassynetwork.com/media/events/886e13aa-ab77-42c2-9c55-1cb2138bcb72.jpg"},
//   ],
//   locationDetails: [
//     {id: "address", icon: 'location-on', text: "1665 Haight St, San Francisco\nCA 94117 USA"},
//     {id: "wifi", icon: 'wifi', text: "Network: Red Vic\nPassword: modernomad"}
//   ]
// }


const myOccupanciesQuery = gql`
{
  myCurrentOccupancies(orderBy: "arrive") {
    edges {
      node {
        id
        arrive
        depart
        purpose
        occupantsDuring {
          id
          arrive
          depart
          type
          user {
            name
            url
            userprofile {
              imageThumb
            }
          }
        }
        user {
          firstName
        }
        location {
          id
          name
          image
        }
      }
    }
  }
}
`;


const StaysDataHandler = BuildDataHandler((data) => {
  const stays = _.map(data.myCurrentOccupancies.edges, 'node')
  return <Stays stays={stays} style={{flex: 1}} />
})

const StaysWithQuery = graphql(myOccupanciesQuery)(StaysDataHandler);

export default StaysWithQuery
