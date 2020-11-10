import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from '../../Landing';
import {navigationTypes} from './navigationTypes';
import PlayerSetting from '../screens/PlayersSetting/PlayerSetting';
import {defaultPlayers, PlayersContext} from '../context/context';
import {User} from '../context/types';
import {Number} from '../screens/Number/Number';

const Stack = createStackNavigator();

const RootStack: React.FC<navigationTypes> = () => {
  const [players, setPlayers] = useState<User[]>(defaultPlayers);
  return (
    <>
      <PlayersContext.Provider value={{players, setPlayers}}>
        <Stack.Navigator headerMode={'screen'}>
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PlayerSetting"
            component={PlayerSetting}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Number"
            component={Number}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        </Stack.Navigator>
      </PlayersContext.Provider>
    </>
  );
};

export default RootStack;
