import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import CreateDish from './CreateDish';
import VoteDish from './VoteDish';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({});

function PollTab(navigation) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 14, fontWeight: 'bold' },
        style: { backgroundColor: '#F7B7B8' },
      }}
    >
      <Tab.Screen name='Create Dishes' component={CreateDish} />
      <Tab.Screen
        name='Vote Dishes'
        component={VoteDish}
        listeners={{
          tabPress: (e) => {
            // Prevent default action
            console.log('hello');
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default PollTab;
