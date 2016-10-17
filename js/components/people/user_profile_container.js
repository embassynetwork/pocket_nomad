import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import UserProfile from './user_profile'
import { BuildDataHandler } from '../generic/data_handler'

const userForIdQuery = gql`
query userForId($userId: ID!) {
  allUsers(id: $userId) {
    edges {
      node {
        id
        name
        email
        userprofile {
          image
        }
      }
    }
  }
}
`;


class UserProfileContainer extends Component {
  render() {
    return <UserProfile />
  }
}

const UserProfileDataHandler = BuildDataHandler((data) => {
  const edge = data.allUsers.edges[0]
  const user = edge ? edge.node : null
  return <UserProfile user={user} />
})

export default graphql(userForIdQuery, {
  options: (props) => {
    return {
      variables: {
        userId: props.user.id
      }
    }
  }
})(UserProfileDataHandler)
