// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Card from './card'

export default class NotificationCard extends Component {
  render() {
    const imageUrl = "https://embassynetwork.com/media/events/886e13aa-ab77-42c2-9c55-1cb2138bcb72.jpg"
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

    return (
      <Card style={styles.container}>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <View style={styles.details}>
          <Text>
            <B>Craig Ambrose</B>, <B>Tracey Ambrose</B> and <B>3 others</B> arrive today.
          </Text>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  details: {
    margin: 10,
    flexWrap: 'wrap',
    flex: 1
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: '#660000'
  }
});
