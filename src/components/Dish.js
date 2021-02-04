/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RecipiesContext from '../contexts/RecipiesContext';
import Util from '../utils/util';
import { FIRST_VOTE_POINT, SECOND_VOTE_POINT, THIRD_VOTE_POINT } from '../../res/data/config';

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

const Dish = ({ dishName, dishDesc, user, isVoterScreen, imgSrc, item }) => {
  const [checked, setChecked] = React.useState(false);
  const recipiesData = useContext(RecipiesContext);
  const currUser = Util.user;
  const points = [10, 20, 30];
  const updateData = async (currentItem) => {
    if (!checked) {
      if (currUser.votedRecipies.length < 3) {
        currUser.votedRecipies.push(currentItem);
        currentItem.points = item.points + points.pop();
        currentItem.votes = item.votes + 1;
        currentItem.votedBy.push(Util.user.currentUser.username);
        console.log(currUser.votedRecipies);
        recipiesData.updateVotes(currentItem);
        setChecked(!checked);
      } else {
        console.log('Not more than 3 votes');
      }
    }
    if (checked) {
      currentItem.votes = item.votes - 1;
      currentItem.votedBy.pop(Util.user.currentUser.username);
      currUser.votedRecipies.pop();
      setChecked(!checked);
      console.log(currUser.votedRecipies);
      console.log('voteAttempt.length', currUser.votedRecipies.length);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        updateData(item);
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
          <Text style={styles.nameTextStyle}>{`${dishName} `}</Text>
        </View>
        <View style={styles.dishDescContainer}>
          <Text style={styles.descTextStyle}>{`${dishDesc} `}</Text>
        </View>
        <Text style={styles.userAtrributionText}>
          {user === Util.user.currentUser.name ? 'Dish By: You' : `Dish By: ${user}`}
        </Text>
      </View>
      {isVoterScreen ? <Checkbox status={checked ? 'checked' : 'unchecked'} /> : null}
    </TouchableOpacity>
  );
};

export default Dish;
