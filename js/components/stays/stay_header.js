// @flow
import React, { Component,PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

class StayHeader extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.hello}>Hi, {this.props.userName}.</Text>
          <Text style={styles.youreAt}>{"you're"} at <B>{this.props.name}</B></Text>
          <Text style={styles.youreAt}>for 2 more days</Text>
        </View>
        <View style={styles.nextLinkContainer}>
          <View style={styles.nextLink}>
            <View style={styles.nextLinkWords}>
              <Text style={styles.nextHeader}>up next</Text>
              <Text style={[styles.youreAt, styles.nextStay]}>Stourari 17</Text>
            </View>
            <Icon style={styles.arrow} name="chevron-right" />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName : state.auth.userName
  }
};

export default connect(mapStateToProps)(StayHeader);

// export default StayHeader

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
  nextLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  nextLink: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 8,
    paddingLeft: 8,
    width: 160,
  },
  nextLinkWords: {
    flexDirection: 'column',
  },
  nextHeader: {
    color: '#FFFFFF',
  },
  nextStay: {
  },
  arrow: {
    fontSize: 42,
    color: '#FFFFFF',
    padding: 0,
  },
  locationName: {
    fontSize: 32,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#FFFFFF',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
});
