/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
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
  const [state, setState] = useState('');
  const { onChange, value, isTextArea, placeholder, isPassword } = props;
  onChange(state);
  return (
    <TextInput
      mode='outlined'
      autoCorrect={false}
      theme={{
        roundness: 10,
      }}
      secureTextEntry={isPassword}
      multiline={!isPassword}
      numberOfLines={8}
      style={isTextArea ? styles.textAreaStyle : styles.inputStyle}
      placeholder={placeholder}
      value={state}
      onChangeText={(nextValue) => setState(nextValue)}
    />
  );
};

export default InputCommon;
