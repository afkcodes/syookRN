/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react';
import { Image, StyleSheet, View, ToastAndroid } from 'react-native';
import { Text } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useIsFocused } from '@react-navigation/native';
import ButtonCommon from '../components/ButtonCommon';
import InputCommon from '../components/InputCommon';
import Util from '../utils/util';
import UserContext from '../contexts/UserContext';
import { MAX_DISH, MAX_VOTE } from '../../res/data/config';

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
  const isFocused = useIsFocused();
  const userContextValue = useContext(UserContext);
  useEffect(() => {
    if (isFocused) {
      userContextValue.updateUserData({
        currentUser: {},
        votedRecipies: [],
        maxDishAllowed: 0,
        maxVoteAllowed: 0,
      });
    }
  }, [isFocused]);

  let userName,
    password = '';
  const getUserName = (uName) => {
    userName = uName;
  };
  const getPassword = (pass) => {
    password = pass;
  };
  const showToast = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.TOP);
  };

  const checkLogin = async () => {
    if (userName.length === 0 || password.length === 0) {
      showToast('Username or Password Empty');
      return;
    }
    const credentials = { userName, password };
    const { status, currentUser } = Util.checkLogin(credentials);
    if (status) {
      const user = {
        currentUser,
        votedRecipies: [],
        maxDishAllowed: MAX_DISH,
        maxVoteAllowed: MAX_VOTE,
        votesPointLeft: null,
      };
      userContextValue.updateUserData(user);
      Util.points = [10, 20, 30];
      navigation.navigate('Poll');
    } else {
      showToast('Wrong Username or Password Entered');
    }
  };

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
        <InputCommon onChange={getUserName} value={null} placeholder='Username' />
        <InputCommon onChange={getPassword} value={null} placeholder='Password' isPassword />
        <ButtonCommon
          style={styles.buttonStyle}
          content='Sign In '
          onPress={() => {
            checkLogin();
          }}
        />
      </View>
    </View>
  );
};

export default Login;
