// @flow
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './stayHeader'
import Card from './card'

export default class Stay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE'
  }
});
