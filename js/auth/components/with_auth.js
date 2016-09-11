// @flow
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux';
import Login from './login'

class WithAuth extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  }

  render() {
    if (this.props.isAuthenticated) {
      return this.props.children
    } else {
      return <Login />
    }
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated : state.auth.isAuthenticated
});

export default connect(mapStateToProps)(WithAuth);
