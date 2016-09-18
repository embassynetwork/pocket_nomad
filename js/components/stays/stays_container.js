// @flow
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import _ from 'lodash'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { BuildDataHandler } from '../generic/data_handler'
import Stays from './stays'

const MyReservationsQuery = gql`
  {
    myReservations(last: 15, orderBy: "arrive") {
      edges {
        node {
          id
          created
          purpose
          arrive
          depart
          occupants {
            id
            name
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
  const stays = _.map(data.myReservations.edges, 'node')
  return <Stays stays={stays} />
})

const StaysWithQuery = graphql(MyReservationsQuery)(StaysDataHandler);

export default StaysWithQuery
