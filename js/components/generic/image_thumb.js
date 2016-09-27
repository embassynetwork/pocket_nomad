// @flow
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { colors } from '../../styles/typography'
import config from '../../config'
import Icon from 'react-native-vector-icons/MaterialIcons';

var ImageThumb = (props) => {
  if (props.url) {
    const uri = config.imageHost + props.url
    var styleGroups = [styles.image]
    if (props.style) {
      styleGroups.push(props.style)
    }
    return <Image style={styleGroups} source={{uri: uri}} />
  } else {
    return null;
  }
}
export default ImageThumb

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    backgroundColor: colors.cardBorder,
    marginRight: 10,
  },
  icon: {
    width: 60,
    height: 60,
    backgroundColor: colors.cardBorder,
    marginRight: 10
  }
});
