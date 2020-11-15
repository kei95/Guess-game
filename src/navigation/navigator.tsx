import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from '../../Landing';
import {navigationTypes} from './navigationTypes';
import PlayerSetting from '../screens/PlayersSetting/PlayerSetting';
import {
  AnswerNumberContext,
  defaultAnswerNumber,
  defaultPlayers,
  PlayersContext,
} from '../context/context';
import {User} from '../context/types';
import {GameInput} from '../screens/GamePlay/GameInput';
import {Result} from '../screens/Result/Result';

const Stack = createStackNavigator();

const RootStack: React.FC<navigationTypes> = () => {
  const [players, setPlayers] = useState<User[]>(defaultPlayers);
  const [answerNumber, setAnswerNumber] = useState<number>(defaultAnswerNumber);

  return (
    <>
      <AnswerNumberContext.Provider value={{answerNumber, setAnswerNumber}}>
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
              name="GameInput"
              component={GameInput}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Result"
              component={Result}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
          </Stack.Navigator>
        </PlayersContext.Provider>
      </AnswerNumberContext.Provider>
    </>
  );
};

export default RootStack;
