import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CreateDish from './CreateDish';
import VoteDish from './VoteDish';
import Util from '../utils/util';

const Tab = createMaterialTopTabNavigator();
function PollTabNavigator() {
  const getUserData = async () => {
    await Util.getUserData(Util.user.currentUser.username);
    console.log(Util.user);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 14, fontWeight: 'bold' },
        style: { backgroundColor: '#F7B7B8' },
      }}
    >
      <Tab.Screen name='Create Dishes' component={CreateDish} />
      <Tab.Screen name='Vote Dishes' component={VoteDish} />
    </Tab.Navigator>
  );
}
export default PollTabNavigator;
