import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useIsFocused } from '@react-navigation/native';
import ButtonCommon from '../components/ButtonCommon';
import Dish from '../components/Dish';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonStyle: {
    height: hp('6%'),
    width: wp('90%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72b3ef',
    marginVertical: 10,
  },
  dishListContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
    paddingVertical: 10,
  },
});

const VoteDish = ({ navigation }) => {
  const isFocused = useIsFocused();
  // useEffect(() => {
  //   console.log('hello calling useEffect');
  // }, []);
  console.log(isFocused);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.dishListContainer}>
        <Dish
          dishName='Tandoori Chicken'
          dishDesc='Awesome Tandoori Dish By Ashish Kumar'
          isVoterScreen
        />
        <Dish
          dishName='Tandoori Chicken'
          dishDesc='Awesome Tandoori Dish By Ashish Kumar'
          isVoterScreen
        />
        <Dish
          dishName='Tandoori Chicken'
          dishDesc='Awesome Tandoori Dish By Ashish Kumar'
          isVoterScreen
        />
      </View>
      <View>
        <ButtonCommon
          style={styles.buttonStyle}
          content='Submit Vote '
          onPress={() => {
            console.log('Voted');
          }}
        />
      </View>
    </View>
  );
};

export default VoteDish;
