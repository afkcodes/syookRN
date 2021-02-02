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

const CreateDish = () => {
  const [dishName, setDishName] = useState('');
  const [dishDesc, setdishDesc] = useState('');
  const [imagePath, setImagePath] = useState({});
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
      console.log('Response = ', response);
      if (response.uri) {
        const imageUri = { uri: response.uri };
        setImagePath(imageUri);
      } else if (response.didCancel) {
        console.log('Cancelled by user');
      } else {
        console.log(`${response.errorCode} : ${response.errorMessage}`);
      }
    });
  };

  const launchNativeLibrary = () => {
    launchImageLibrary(imageOptions, (response) => {
      console.log('Response = ', response);
      if (response.uri) {
        const imageUri = { uri: response.uri };
        setImagePath(imageUri);
      } else if (response.didCancel) {
        console.log('Cancelled by user');
      } else {
        console.log(`${response.errorCode} : ${response.errorMessage}`);
      }
    });
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Enter Your 2 Best Dishes </Text>
      </View>
      <View style={styles.dishInputContainer}>
        <InputCommon
          onChange={(nextValue) => setDishName(nextValue)}
          value={dishName}
          placeholder='Dish Name'
        />
        <InputCommon
          onChange={(nextValue) => setdishDesc(nextValue)}
          value={dishDesc}
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
            refRBSheet.current.open();
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
