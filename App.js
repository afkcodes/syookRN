import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import PollTab from './src/screens/PollTab';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // justifyContent: 'center',
  },
});
const Stack = createStackNavigator();
const App = () => (
  <>
    <StatusBar backgroundColor='#F7B7B8' barStyle='dark-content' />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        <Stack.Screen options={{ headerShown: false }} name='Poll' component={PollTab} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);
export default App;
