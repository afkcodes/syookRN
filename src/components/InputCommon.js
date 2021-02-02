import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  inputStyle: {
    height: hp('6%'),
    width: wp('90%'),
    backgroundColor: 'white',
  },
  textAreaStyle: {
    width: wp('90%'),
    backgroundColor: 'white',
  },
});

const InputCommon = (props) => {
  const { onChange, value, isTextArea, placeholder } = props;
  return (
    <TextInput
      mode='outlined'
      autoCorrect={false}
      theme={{
        roundness: 10,
      }}
      multiline
      numberOfLines={8}
      style={isTextArea ? styles.textAreaStyle : styles.inputStyle}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
    />
  );
};

export default InputCommon;
