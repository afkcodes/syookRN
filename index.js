import * as React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { RecipiesProvider } from './src/contexts/RecipiesContext';
import { UserProvider } from './src/contexts/UserContext';
import { name as appName } from './app.json';
import App from './App';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#72b3ef',
    accent: '#F7B7B8',
  },
};
export default function Main() {
  return (
    <RecipiesProvider>
      <UserProvider>
        <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
      </UserProvider>
    </RecipiesProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
