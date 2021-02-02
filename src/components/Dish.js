/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    height: hp('18%'),
    width: wp('95%'),
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  imageConatainer: {
    height: '85%',
    width: '30%',
    backgroundColor: 'yellow',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  metaContainer: {
    height: '85%',
    width: '52%',
    flexDirection: 'column',

    // justifyContent: 'space-evenly',
  },
  dishNameContainer: {
    height: '20%',
    width: '100%',
  },
  nameTextStyle: {
    textAlign: 'justify',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dishDescContainer: {
    height: '65%',
    width: '100%',
    paddingRight: 5,
    paddingVertical: 10,
    alignItems: 'flex-start',
  },
  descTextStyle: {
    textAlign: 'justify',
  },
  userAtrributionText: {
    textAlign: 'justify',
    color: 'grey',
  },
});
const Dish = ({ dishName, dishDesc, id, isVoterScreen, imgSrc }) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        setChecked(!checked);
      }}
      style={styles.mainContainer}
    >
      <View style={styles.imageConatainer}>
        <Image style={styles.imageStyle} resizeMode='cover' source={imgSrc} />
      </View>
      <View
        style={
          isVoterScreen
            ? [styles.metaContainer, { borderRightWidth: 1, borderRightColor: '#d1d1d1' }]
            : styles.metaContainer
        }
      >
        <View style={styles.dishNameContainer}>
          <Text style={styles.nameTextStyle}>{dishName}</Text>
        </View>
        <View style={styles.dishDescContainer}>
          <Text style={styles.descTextStyle}>{dishDesc}</Text>
        </View>
        {isVoterScreen ? <Text style={styles.userAtrributionText}>{id}</Text> : null}
      </View>
      {isVoterScreen ? <Checkbox status={checked ? 'checked' : 'unchecked'} /> : null}
    </TouchableOpacity>
  );
};

export default Dish;
