import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ButtonCommon from '../components/ButtonCommon';
import InputCommon from '../components/InputCommon';
import Storage from '../utils/Storage';
import Util from '../utils/util';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
  dishInputContainer: {
    flex: 5,
    width: wp('100%'),
    alignItems: 'center',
    paddingVertical: 10,
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
});
const dishes = [];
const CreateDish = () => {
  console.log('rebuilding --->', dishes);
  let dishName,
    dishDesc = '';
  const getDishName = (name) => {
    dishName = name;
  };
  const getdishDesc = (desc) => {
    dishDesc = desc;
  };
  let imagePath = {};
  const imageOptions = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 400,
    maxWidth: 400,
    saveToPhotos: true,
  };
  const refRBSheet = useRef();

  const launchNativeCamera = () => {
    launchCamera(imageOptions, (response) => {
      // console.log('Response = ', response);
      if (response.uri) {
        const imageUri = { uri: response.uri };
        imagePath = imageUri;
        refRBSheet.current.close();
      } else if (response.didCancel) {
        console.log('Cancelled by user');
      } else {
        console.log(`${response.errorCode} : ${response.errorMessage}`);
      }
    });
  };

  const launchNativeLibrary = () => {
    launchImageLibrary(imageOptions, (response) => {
      // console.log('Response = ', response);
      if (response.uri) {
        const imageUri = { uri: response.uri };
        imagePath = imageUri;
        refRBSheet.current.close();
      } else if (response.didCancel) {
        console.log('Cancelled by user');
      } else {
        console.log(`${response.errorCode} : ${response.errorMessage}`);
      }
    });
  };

  const onSubmit = async () => {
    const currentDish = {
      id: Util.createUID(),
      dishName,
      dishDesc,
      imagePath,
    };
    dishes.push(currentDish);
    console.log('onSubmit called');
    if (dishes.length === 5) {
      await Storage.setData('recipes', dishes);
    }
  };
  // TODO FIX VALUE & CLEAR INPUT
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Enter Your 2 Best Dishes </Text>
      </View>
      <View style={styles.dishInputContainer}>
        <InputCommon onChange={getDishName} value={null} placeholder='Dish Name' />
        <InputCommon
          onChange={getdishDesc}
          value={null}
          isTextArea
          placeholder='Dish Description'
        />
        <ButtonCommon
          style={styles.buttonStyle}
          content='Upload Image '
          onPress={() => {
            refRBSheet.current.open();
          }}
        />
        <ButtonCommon
          style={styles.buttonStyle}
          content='Submit '
          onPress={() => {
            onSubmit();
          }}
        />
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#00303f',
            },
            container: {
              backgroundColor: '#e6e6e6',
              alignItems: 'center',
              borderTopStartRadius: 15,
              borderTopEndRadius: 15,
            },
          }}
        >
          <ButtonCommon
            style={styles.buttonStyle}
            content='Capture Image '
            onPress={() => {
              launchNativeCamera();
            }}
          />
          <ButtonCommon
            style={styles.buttonStyle}
            content='Pick from Gallery '
            onPress={() => {
              launchNativeLibrary();
            }}
          />
          <ButtonCommon
            style={styles.buttonStyle}
            content='Cancel'
            onPress={() => {
              refRBSheet.current.close();
            }}
          />
        </RBSheet>
      </View>
    </View>
  );
};

export default CreateDish;
