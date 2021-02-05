import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {};

Storage.setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.warn('{Storage.setItem } Error: while saving value', key, value);
  }
};
Storage.getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.warn('{Storage.getItem} Error: while getting value', key);
    return { err: e };
  }
};

Storage.setData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.warn('{error} Error: while saving data', key, value);
  }
};

Storage.getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('{Storage.getData} Error: while reading data', key);
    return { err: e };
  }
};

export default Storage;
