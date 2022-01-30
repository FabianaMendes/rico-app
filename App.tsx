import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';

import {ThemeProvider} from 'styled-components';
import Routes from './src/navigations';

import themes from './src/themes';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? themes.dark : themes.light;
  console.log(useColorScheme());

  const barStyle = isDarkMode ? 'light-content' : 'dark-content';

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={barStyle} backgroundColor="#020027" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
