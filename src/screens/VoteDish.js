/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ButtonCommon from '../components/ButtonCommon';
import Dish from '../components/Dish';
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

const Item = ({ item }) => (
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
  const { data } = useContext(RecipiesContext);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.dishListContainer}>
        {data.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={Item}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text> Enter some recipies to vote them. </Text>
        )}
      </View>
      <View>
        <ButtonCommon
          style={styles.buttonStyle}
          content='Show Results '
          onPress={() => {
            navigation.navigate('Results');
          }}
        />
      </View>
    </View>
  );
};

export default VoteDish;
