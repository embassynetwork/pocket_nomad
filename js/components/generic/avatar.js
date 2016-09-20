// @flow
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { colors } from '../../styles/typography'
import config from '../../config'
import Icon from 'react-native-vector-icons/MaterialIcons';

var Avatar = (props) => {
  if (props.url) {
    const uri = config.imageHost + props.url
    return <Image style={styles.image} source={{uri: uri}} />
  } else {
    return <Icon style={styles.icon} name='person' size={60} color="#555" />
  }
}
export default Avatar

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
