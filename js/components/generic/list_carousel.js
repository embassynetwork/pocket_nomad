// @flow
import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ListCarouselItemSet from './list_carousel_item_set'
import ListCarouselItem from './list_carousel_item'
import _ from 'lodash'

export default class ListCarousel extends Component {
  renderChild(child, key, first = false) {
    return (
      <ListCarouselItem key={key} first={first}>
        {child}
      </ListCarouselItem>
    )
  }

  renderChildren() {
    return _.map(this.props.children, (child, index) => {
      return this.renderChild(child, index, index == 0);
    });
  }

  render() {
    return (
      <ListCarouselItemSet>
        {this.renderChildren()}
      </ListCarouselItemSet>
    );
  }
}

const styles = StyleSheet.create({
});
