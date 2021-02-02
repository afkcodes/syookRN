/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
  },
});
const ButtonCommon = ({ content, onPress, style }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={style}>
    <Text style={styles.textStyle}>{content}</Text>
  </TouchableOpacity>
);

export default ButtonCommon;
