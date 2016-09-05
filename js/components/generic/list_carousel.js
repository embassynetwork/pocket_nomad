// @flow
import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ListCarouselItemSet from './list_carousel_item_set'
import ListCarouselItem from './list_carousel_item'
import _ from 'lodash'
import Swiper from 'react-native-swiper'

export default class ListCarousel extends Component {
  renderChild(child, key, first = false) {
    return (
      <ListCarouselItem key={key} first={first}>
        {child}
      </ListCarouselItem>
    )
  }

  renderChildPage(children) {
    var contents = _.map(children, (child, index) => {
      return this.renderChild(child, index, index == 0)
    });
    return (
      <ListCarouselItemSet>
        {contents}
      </ListCarouselItemSet>
    )
  }

  renderChildren() {
    var pagedChildren = _.chunk(this.props.children, 4)
    return _.map(pagedChildren, (children, pageIndex) => {
      return (
        <View style={styles.pageSlide} key={pageIndex}>
          {this.renderChildPage(children)}
        </View>
      )
    })
  }

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} height={(76 * 4) + 50}>
        {this.renderChildren()}
      </Swiper>
      // <ListCarouselItemSet>
      //   {this.renderChildren()}
      // </ListCarouselItemSet>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  pageSlide: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
