// @flow
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import _ from 'lodash'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { BuildDataHandler } from '../generic/data_handler'
import Stays from './stays'

const myBookingsQuery = gql`
  {
    myBookings(last: 15, orderBy: "arrive") {
      edges {
        node {
          id
          arrive
          depart
          occupants {
            id
            name
            status
            userprofile {
              imageThumb
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
  const stays = _.map(data.myBookings.edges, 'node')
  return <Stays stays={stays} />
})

const StaysWithQuery = graphql(myBookingsQuery)(StaysDataHandler);

export default StaysWithQuery
