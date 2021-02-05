import React, { useContext, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import PollTab from './src/screens/PollTab';
import Results from './src/screens/Results';
import RecipiesContext from './src/contexts/RecipiesContext';
import Util from './src/utils/util';

const Stack = createStackNavigator();
const App = () => {
  const recipeContext = useContext(RecipiesContext);
  const getInitialData = async () => {
    await recipeContext.getSavedRecipies();
  };
  useEffect(() => {
    getInitialData();
  }, []);
  return (
    <>
      <StatusBar backgroundColor='#F7B7B8' barStyle='dark-content' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
          <Stack.Screen options={{ headerShown: false }} name='Poll' component={PollTab} />
          <Stack.Screen
            options={{
              title: 'Vote Results',
              headerStyle: {
                backgroundColor: '#F7B7B8',
                elevation: 0,
              },
              headerLeft: () => null,
              headerTitleStyle: { alignSelf: 'center' },
            }}
            name='Results'
            component={Results}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
