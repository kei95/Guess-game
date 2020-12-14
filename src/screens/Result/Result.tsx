import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';

import {Button} from '../../components/button';
import DefaultBody from '../../components/defaultBody';
import {PlayersContext} from '../../context/context';
import {Players, User} from '../../context/types';
import {navigationTypes} from '../../navigation/navigationTypes';
import {GlobalStyles} from '../../styles/globalStyles';
import {OutPlayers} from './components/OutPlayers';
import {ResultNumber} from './components/ResultNumber';
import {RuleDescription} from './components/RuleDescription';

export const Result: React.FC<navigationTypes> = ({navigation, route}) => {
  const context: Players | undefined = useContext(PlayersContext);
  const [isWinnersSeen, setIsWinnersSeen] = useState<boolean>(false);
  const outPlayers: User[] = route?.params?.outPlayers;

  const onPressButton = () => {
    isWinnersSeen ? navigation.navigate('GameInput') : setIsWinnersSeen(true);
  };

  return (
    <DefaultBody>
      <View style={styles.contentsWrapper}>
        {!isWinnersSeen && <OutPlayers outPlayers={outPlayers} />}
        {isWinnersSeen && <ResultNumber outPlayers={outPlayers} />}
      </View>
      <View style={styles.buttonWrapper}>
        {!isWinnersSeen && <RuleDescription />}
        <Button
          title={isWinnersSeen ? 'Next round' : 'OK'}
          onPress={onPressButton}
        />
      </View>
    </DefaultBody>
  );
};

const styles = StyleSheet.create({
  contentsWrapper: {
    flex: 5,
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
  } as ViewStyle,
  textsContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
  } as ViewStyle,
  title: {
    fontSize: 25,
    color: '#3D405B',
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  playerName: {
    fontSize: 40,
    color: '#81B29A',
    fontWeight: 'bold',
    fontFamily: GlobalStyles.defaultFont,
    paddingTop: 10,
  } as TextStyle,
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  } as ViewStyle,
});
