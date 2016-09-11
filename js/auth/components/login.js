// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import TextField from 'react-native-md-textinput';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.header}>
            <Text style={styles.headerText}>a global housing layer for the new world</Text>
          </View>
          <TextField label={'Name'} highlightColor={'#ecf0f1'} />
          <TextField label={'Password'} highlightColor={'#ecf0f1'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0392b",
  },
  body: {
    flex: 1,
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    height: 200,
    // borderWidth: 1,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 40,
    textAlign: 'center',
  }
});
