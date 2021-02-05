/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RecipiesContext from '../contexts/RecipiesContext';
import UserContext from '../contexts/UserContext';
import Util from '../utils/util';

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
let points;

const Dish = ({ dishName, dishDesc, user, isVoterScreen, imgSrc, item }) => {
  const showToast = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.TOP);
  };

  const [checked, setChecked] = useState(false);
  const recipiesData = useContext(RecipiesContext);
  const userContextValue = useContext(UserContext);
  const currUser = userContextValue.user;
  const [votedUser, setVotedUser] = useState('');
  useEffect(() => {
    points = currUser.votesPointLeft === null ? Util.points : currUser.votesPointLeft;
    if (item.votedBy.includes(currUser.currentUser.username)) {
      setChecked(!checked);
      setVotedUser(currUser.currentUser.username);
    }
  }, []);

  const updateData = async (currentItem) => {
    if (!checked) {
      if (currUser.votedRecipies.length < 3) {
        console.log(points);
        const point = points.length > 1 ? points.sort().pop() : points.pop();
        currentItem.points = item.points + point;
        currentItem.votes = item.votes + 1;
        currentItem.votedBy.push(currUser.currentUser.username);
        currUser.votedRecipies.push(Object.assign(currentItem, { userPoint: point }));
        currUser.votesPointLeft = [...points];
        setChecked(!checked);
      } else {
        showToast('Not more than 3 votes Allowed');
      }
    }
    if (checked) {
      console.log('cheecked if');
      const removeIndex = currUser.votedRecipies.map((item) => item.id).indexOf(currentItem.id);
      const dish = currUser.votedRecipies.splice(removeIndex, 1);
      const point = dish[0].userPoint;

      currentItem.points = item.points - point;
      currentItem.votes = item.votes - 1;
      currentItem.votedBy.pop(currUser.currentUser.username);
      points.push(dish[0].userPoint);
      currUser.votesPointLeft = [...points];

      setChecked(!checked);
    }
    userContextValue.saveUser();
    recipiesData.updateVotes(currentItem);
  };

  return (
    <TouchableOpacity
      disabled={!isVoterScreen}
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
          {!isVoterScreen && votedUser !== '' ? 'Voted By: You' : ''}
          {isVoterScreen
            ? user === userContextValue.user.currentUser.name
              ? 'Dish By: You'
              : `Dish By: ${user}`
            : ''}
        </Text>
      </View>
      {isVoterScreen ? <Checkbox status={checked ? 'checked' : 'unchecked'} /> : null}
    </TouchableOpacity>
  );
};

export default Dish;
