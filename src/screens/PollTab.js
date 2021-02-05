import React, { useEffect, useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CreateDish from './CreateDish';
import VoteDish from './VoteDish';
import Util from '../utils/util';
import UserContext from '../contexts/UserContext';

const Tab = createMaterialTopTabNavigator();
function PollTabNavigator() {
  const userContextvalue = useContext(UserContext);
  const getUserData = async () => {
    await userContextvalue.getUser(userContextvalue.user.currentUser.username);
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
