// @flow
import React, { Component } from 'react';
import StaysContainer from './stays/stays_container'
import { StyleSheet, View, Text } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

class PageOne extends Component {
  render() {
    return (
      <View style={{paddingTop: 100}}>
        <Text>page one</Text>
      </View>
    )
  }
}

class UserProfile extends Component {
  render() {
    return (
        <View style={{paddingTop: 100}}>
          <Text>this is a user profile</Text>
        </View>
    )
  }
}

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="stays" component={StaysContainer} title="Stays" hideNavBar={true} initial={true} />
          <Scene key="pageOne" component={PageOne} title="PageOne" />
          <Scene key="userProfile" component={UserProfile} title="userProfile" hideNavBar={false} />
        </Scene>
      </Router>
    )
    // return <StaysContainer style={styles.container} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE',
  }
});
