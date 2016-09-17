// @flow
import React, { Component,PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StayLink from './stay_link'

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

export default class StayHeader extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    nextStay: PropTypes.object
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.hello}>Hi, {this.props.userName}.</Text>
          <Text style={styles.youreAt}>{"you're"} at <B>{this.props.name}</B></Text>
          <Text style={styles.youreAt}>for 2 more days</Text>
        </View>
        {this.props.nextStay && <StayLink {...this.props.nextStay} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  welcomeContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  hello: {
    color: '#FFFFFF',
    fontSize: 48,
    marginBottom: 5,
  },
  youreAt: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
