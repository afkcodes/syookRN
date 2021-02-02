import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CreateDish from './CreateDish';

const Tab = createMaterialTopTabNavigator();

const SettingsScreen = () => (
  <View>
    <Text>Home</Text>
  </View>
);
const styles = StyleSheet.create({});

function PollTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 14, fontWeight: 'bold' },
        style: { backgroundColor: '#F7B7B8' },
      }}
    >
      <Tab.Screen name='Create Dishes' component={CreateDish} />
      <Tab.Screen name='Vote Dishes' component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default PollTab;
