/* eslint-disable react/prop-types */
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useIsFocused } from '@react-navigation/native';
import ButtonCommon from '../components/ButtonCommon';
import Dish from '../components/Dish';
import Storage from '../utils/Storage';
import RecipiesContext from '../contexts/RecipiesContext';

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
  },
});

const item = ({ item }) => (
  <Dish
    dishName={item.dishName}
    dishDesc={item.dishDesc}
    isVoterScreen
    imgSrc={item.imagePath}
    item={item}
    user={item.user}
  />
);

const VoteDish = ({ navigation }) => {
  // const [dishesData, setDishesData] = useState(null);
  // const getDishesData = async () => {
  //   console.log('calling getDishesData');
  //   const data = await Storage.getData('recipes');
  //   console.log('data----> ', data);
  // setDishesData(data);
  //   return data;
  // };
  // const isFocused = useIsFocused();
  // console.log(isFocused);
  // if (isFocused && dishesData === null) {
  //   getDishesData();
  //   console.log(dishesData);
  // }
  const { data } = useContext(RecipiesContext);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.dishListContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={item}
          keyExtractor={(item) => item.id}
        />
        {/* <Dish
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
          id='1'
        /> */}
      </View>
      <View>
        <ButtonCommon
          style={styles.buttonStyle}
          content='Submit Vote '
          onPress={() => {
            console.log('Voted');
            navigation.navigate('Login');
          }}
        />
      </View>
    </View>
  );
};

export default VoteDish;
