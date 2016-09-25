// @flow
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import _ from 'lodash'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { BuildDataHandler } from '../generic/data_handler'
import Stays from './stays'

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
