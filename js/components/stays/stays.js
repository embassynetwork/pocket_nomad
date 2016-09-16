// @flow
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Stay from './stay'
import _ from 'lodash'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Spinner from 'react-native-loading-spinner-overlay'

const redvic = {
  location: {
    name: "The Red Victorian",
    headerImageUrl: 'https://embassynetwork.com/media/locations/62b0bb14-3541-4505-af5e-9a5c4a74bc91.jpg'
  },
  events: [
    {id: 1, name: "Bloom Network Launch", startTime: "Friday, 7pm", imageUrl: "https://embassynetwork.com/media/events/886e13aa-ab77-42c2-9c55-1cb2138bcb72.jpg"},
    {id: 2, name: "Silent Reading Salon", startTime: "Saturday, 6:30pm", imageUrl: "https://embassynetwork.com/media/events/886e13aa-ab77-42c2-9c55-1cb2138bcb72.jpg"},
    {id: 3, name: "Lecture Series: Imminent Urbanism", startTime: "Tuesday 5th Sep, 7:30pm", imageUrl: "https://embassynetwork.com/media/events/886e13aa-ab77-42c2-9c55-1cb2138bcb72.jpg"},
  ],
  occupants: [
    {id: 1, name: "Craig Ambrose", status: "guest", duration: 60, avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
    {id: 2, name: "Tracey Ambrose", status: "guest", duration: 60, avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
    {id: 3, name: "William Ambrose", status: "guest", duration: 60, avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
    {id: 4, name: "Jessy Shingler", status: "resident", avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
    {id: 5, name: "Robby Schingler", status: "resident", avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
    {id: 6, name: "Anouk Ruhaak", status: "resident", avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
    {id: 7, name: "Samy Andary", status: "resident", avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
    {id: 8, name: "Daniel Gasperz", status: "resident", avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
    {id: 9, name: "Guesty McGuestalot", status: "guest", avatarUrl: "https://cdn-images-1.medium.com/fit/c/100/100/0*X-jM01LFRRvS8HDT.jpg"},
  ],
  locationDetails: [
    {id: "address", icon: 'location-on', text: "1665 Haight St, San Francisco\nCA 94117 USA"},
    {id: "wifi", icon: 'wifi', text: "Network: Red Vic\nPassword: modernomad"}
  ]
}
// const stays = [
//   redvic
// ]

const MyReservationsQuery = gql`
  {
    myReservations(first: 15, orderBy: "arrive") {
      edges {
        node {
          uuid
          created
          purpose
          comments
          arrive
          location {
            id,
            slug,
            name
          }
        }
      }
    }
  }
`;

class Stays extends Component {
  render() {
    console.log('rendering stays with props', this.props)
    if (this.props.stays) {
      var stay = {...redvic, ...(this.props.stays[0] || {})}
      return <Stay stay={stay} />
    } else {
      return <View><Spinner visible={true} /></View>
    }
  }
}



const StaysWithData = graphql(MyReservationsQuery, {
  // ownProps are the props that are passed into the `ProfileWithData`
  // when it is used by a parent component
  props: ({ ownProps, data: { myReservations } }) => ({
    stays: (myReservations ? _.map(myReservations.edges, 'node') : null),
  }),
})(Stays);

export default StaysWithData
