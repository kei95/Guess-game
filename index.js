/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import Navigator from './src/navigation/navigator';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';

function RootNavigator() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => RootNavigator);
