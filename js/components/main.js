// @flow
import React, { Component } from 'react'
import StaysContainer from './stays/stays_container'
import { StyleSheet } from 'react-native'
import { Router, Scene, Actions } from 'react-native-router-flux'
import UserProfileContainer from './people/user_profile_container'

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" navigationBarStyle={styles.navBar} titleStyle={styles.titleStyle}>
          <Scene key="stays" component={StaysContainer} title="Stays" hideNavBar={true} initial={true} />
          <Scene key="userProfile" component={UserProfileContainer} title="userProfile" hideNavBar={false} />
        </Scene>
      </Router>
    )
    // return <StaysContainer style={styles.container} />
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#c0392b'
  },
  titleStyle: {
    color: "#FFFFFF"
  }
});
