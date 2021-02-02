/* eslint-disable react/prop-types */
import React from 'react';
import { Image, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ButtonCommon from '../components/ButtonCommon';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7B7B8',
  },
  headerContainer: {
    flex: 3,
    // backgroundColor: 'green',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  imageContainer: {
    height: '100%',
    width: '100%',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 3,
    backgroundColor: '#F2F2F2',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  loginContainer: {
    flex: 2,
    backgroundColor: 'orange',
    width: '100%',
  },
  inputStyle: {
    height: hp('6%'),
    width: wp('90%'),
    backgroundColor: 'white',
  },
  buttonStyle: {
    height: hp('6%'),
    width: wp('90%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72b3ef',
    // textAlign: 'center',
  },
});

const Login = ({ navigation }) => {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Image
          resizeMode='cover'
          style={styles.imageContainer}
          source={require('../../assets/4955768.jpg')}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.headerText}>Syook Recipe Ranker</Text>
        <TextInput
          mode='outlined'
          autoCorrect={false}
          theme={{
            roundness: 10,
          }}
          style={styles.inputStyle}
          placeholder='Username'
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          theme={{ roundness: 10 }}
          mode='outlined'
          autoCorrect={false}
          secureTextEntry
          style={styles.inputStyle}
          placeholder='Password'
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <ButtonCommon
          style={styles.buttonStyle}
          content='Sign In '
          onPress={() => navigation.push('Poll')}
        />
      </View>
    </View>
  );
};

export default Login;
