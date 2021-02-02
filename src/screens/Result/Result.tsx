import React, {useContext, useState} from 'react';
import {StyleSheet, TextStyle, View, ViewStyle} from 'react-native';

import {Button} from '../../components/button';
import DefaultBody from '../../components/defaultBody';
import {CurrentRound, PlayersContext} from '../../context/context';
import {RoundNumber, User} from '../../context/types';
import {navigationTypes} from '../../navigation/navigationTypes';
import {GlobalStyles} from '../../styles/globalStyles';
import {resetPlayers} from '../GamePlay/gameFunctions/gameFunctions';
import {GameOver} from './components/GameOver';
import {OutPlayers} from './components/OutPlayers';
import {ResultNumber} from './components/ResultNumber';
import {RuleDescription} from './components/RuleDescription';

export const Result: React.FC<navigationTypes> = ({navigation, route}) => {
  const [isWinnersSeen, setIsWinnersSeen] = useState<boolean>(false);
  const currentRound: RoundNumber = useContext(CurrentRound)!;
  const outPlayers: User[] = route?.params?.outPlayers;
  const isGameOver: boolean = route?.params?.isGameOver ?? false;
  const playersFromContext = useContext(PlayersContext);

  const onPressButton = () => {
    if (isGameOver) {
      const restoredPlayers: User[] = resetPlayers(playersFromContext!.players);
      navigation.navigate('Landing');
      playersFromContext!.setPlayers(restoredPlayers);
      return;
    }
    isWinnersSeen ? onMoveToRoundInitial() : setIsWinnersSeen(true);
  };

  const onMoveToRoundInitial = () => {
    currentRound.setRoundNumber(currentRound.roundNumber + 1);
    navigation.navigate('RoundInitial');
  };

  return (
    <DefaultBody>
      <View style={styles.contentsWrapper}>
        {isGameOver && <GameOver />}
        {!isGameOver && !isWinnersSeen && (
          <OutPlayers outPlayers={outPlayers} />
        )}
        {!isGameOver && isWinnersSeen && (
          <ResultNumber outPlayers={outPlayers} />
        )}
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
    color: GlobalStyles.secondPrimaryColor,
    fontWeight: 'bold',
    fontFamily: GlobalStyles.defaultFont,
    paddingTop: 10,
  } as TextStyle,
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  } as ViewStyle,
});
