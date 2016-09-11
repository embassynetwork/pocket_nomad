// @flow
import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import TextField from 'react-native-md-textinput'
import Button from 'react-native-material-button'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.header}>
            <Text style={styles.headerText}>a global housing layer for the new world</Text>
          </View>
          <View style={styles.form}>
            <TextField label={'Name'} highlightColor={'#ecf0f1'} />
            <TextField label={'Password'} highlightColor={'#ecf0f1'} />
            <Button withShadow={true} withRipple={true} rippleColor='rgba(22, 160, 133, 0.5)' onPress={()=>{alert('pressed!')}} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>LOGIN</Text>
            </Button>
          </View>
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
    justifyContent: 'flex-end',
  },
  header: {
    height: 200,
  },
  form: {
    marginBottom: 36,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 40,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#ecf0f1',
    height: 36,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 36,
  },
  submitButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
  }
});
