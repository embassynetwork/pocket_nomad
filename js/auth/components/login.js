// @flow
import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux';
import {loginUser} from '../actions';

import TextField from 'react-native-md-textinput'
import Button from 'react-native-material-button'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  submitLogin() {
    this.props.loginUser(this.state.email, this.state.password)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.header}>
            <Text style={styles.headerText}>a global housing layer for the new world</Text>
          </View>
          <View style={styles.form}>
            <TextField
              label={'Email'}
              highlightColor={buttonHighlight}
              value={this.state.email}
              onChangeText={(email) => this.setState({email})} />
            <TextField
              label={'Password'}
              highlightColor={buttonHighlight}
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(password) => this.setState({password})} />
            <Button
              withShadow={true}
              withRipple={true}
              rippleColor='rgba(22, 160, 133, 0.5)'
              onPressOut={this.submitLogin.bind(this)}
              style={styles.submitButton}>
              <Text style={styles.submitButtonText}>LOGIN</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const buttonHighlight = '#ecf0f1'
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

const mapStateToProps = (state) => (
  // {
  //   isAuthenticating   : state.auth.isAuthenticating,
  //   statusText         : state.auth.statusText
  // }
  {}
);

function bindActions(dispatch){
  return {
    loginUser:(email, password)=>dispatch(loginUser(email, password))
  }
}

export default connect(mapStateToProps, bindActions)(Login);
