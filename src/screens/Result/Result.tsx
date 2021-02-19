import React, {useContext, useState} from 'react';
import {Alert, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';

import {Button} from '../../components/button';
import DefaultBody from '../../components/defaultBody';
import {
  CurrentRound,
  GuessableNumbers,
  PlayersContext,
} from '../../context/context';
import {RoundNumber, User} from '../../context/types';
import {navigationTypes} from '../../navigation/navigationTypes';
import {GlobalStyles} from '../../styles/globalStyles';
import {
  resetPlayers,
  resetGuessAbleNumbersBody,
} from '../GamePlay/gameFunctions/gameFunctions';
import {GameOver} from './components/GameOver';
import {OutPlayers} from './components/OutPlayers';
import {ResultNumber} from './components/ResultNumber';
import {RuleDescription} from './components/RuleDescription';

export const Result: React.FC<navigationTypes> = ({navigation, route}) => {
  const [isWinnersSeen, setIsWinnersSeen] = useState<boolean>(false);
  const [isAnimationEnd, setIsAnimationEnd] = useState<boolean>(false);
  const currentRound: RoundNumber = useContext(CurrentRound)!;
  const outPlayers: User[] = route?.params?.outPlayers;
  const isGameOver: boolean = route?.params?.isGameOver ?? false;
  const guessableNumberContext = useContext(GuessableNumbers);
  const playersFromContext = useContext(PlayersContext);

  const onPressButton = () => {
    if (!isWinnersSeen && !isAnimationEnd) {
      setIsAnimationEnd(true);
      return;
    }
    setIsAnimationEnd(false);
    if (isGameOver && isWinnersSeen) {
      goGameOver();
      return;
    }
    if (!isWinnersSeen && outPlayers) {
      setIsWinnersSeen(true);
      return;
    }
    onMoveToRoundInitial();
  };

  const goGameOver = () => {
    const restoredPlayers: User[] = resetPlayers(playersFromContext!.players);
    Alert.alert('', 'Do you want to return to title screen?', [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          playersFromContext!.setPlayers(restoredPlayers);
          guessableNumberContext!.setGuessableNumber(resetGuessAbleNumbersBody);
          navigation.navigate('Landing');
        },
      },
    ]);
  };

  const onMoveToRoundInitial = () => {
    currentRound.setRoundNumber(currentRound.roundNumber + 1);
    navigation.navigate('RoundInitial');
  };

  return (
    <DefaultBody>
      <View
        style={
          !outPlayers ? styles.contentsWrapperDraw : styles.contentsWrapper
        }>
        {!outPlayers ? (
          <GameOver
            navigation={navigation}
            isAnimationEnd={isAnimationEnd}
            setIsAnimationEnd={setIsAnimationEnd}
            isDraw={true}
          />
        ) : (
          <>
            {isGameOver && (
              <GameOver
                outPlayers={outPlayers}
                navigation={navigation}
                isWinnersSeen={isWinnersSeen}
                isAnimationEnd={isAnimationEnd}
                setIsAnimationEnd={setIsAnimationEnd}
              />
            )}
            {!isGameOver && !isWinnersSeen && (
              <OutPlayers
                outPlayers={outPlayers}
                navigation={navigation}
                isAnimationEnd={isAnimationEnd}
                setIsAnimationEnd={setIsAnimationEnd}
              />
            )}
            {!isGameOver && isWinnersSeen && (
              <ResultNumber outPlayers={outPlayers} />
            )}
          </>
        )}
      </View>
      <View style={styles.buttonWrapper}>
        {!isGameOver && !isWinnersSeen && <RuleDescription />}
        <Button
          title={isWinnersSeen ? 'Back to title' : 'OK'}
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
  contentsWrapperDraw: {
    flex: 5,
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
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
