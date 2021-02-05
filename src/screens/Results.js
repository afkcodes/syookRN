/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RecipiesContext from '../contexts/RecipiesContext';
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
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
const Item = ({ item }) => (
  <Dish
    dishName={item.dishName}
    dishDesc={item.dishDesc}
    imgSrc={item.imagePath}
    item={item}
    user={item.user}
  />
);
const Results = () => {
  const { data } = useContext(RecipiesContext);
  return (
    <View style={styles.dishListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.sort((a, b) => a.points - b.points).reverse()}
        renderItem={Item}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Results;
