import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from '../../Landing';
import PlayersSetting from '../screens/PlayersSetting';
import NameSetting from '../screens/NameSetting';
import {GlobalStyles} from '../styles/globalStyles';
import {HeaderBackButton} from '../components/headerBackButton';
import {navigationTypes} from './navigationTypes';
import PlayerSetting from '../screens/PlayerSetting';

const Stack = createStackNavigator();

const RootStack: React.FC<navigationTypes> = () => {
  return (
    <>
      <Stack.Navigator headerMode={'screen'}>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PlayersSetting"
          component={PlayersSetting}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: GlobalStyles.backgroundColor,
              shadowColor: 'transparent',
            },
            // TODO: Install icon to iOS
            headerLeft: () => <HeaderBackButton navigation={navigation} />,
            title: '',
          })}
        />
        <Stack.Screen
          name="NameSetting"
          component={NameSetting}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: GlobalStyles.backgroundColor,
              shadowColor: 'transparent',
            },
            // TODO: Install icon to iOS
            headerLeft: () => <HeaderBackButton navigation={navigation} />,
            title: '',
          })}
        />
        <Stack.Screen
          name="PlayerSetting"
          component={PlayerSetting}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default RootStack;
