import React, {useContext, useState} from 'react';
import {StyleSheet, TextStyle, View, ViewStyle} from 'react-native';

import {Button} from '../../components/button';
import DefaultBody from '../../components/defaultBody';
import {CurrentRound} from '../../context/context';
import {RoundNumber, User} from '../../context/types';
import {navigationTypes} from '../../navigation/navigationTypes';
import {GlobalStyles} from '../../styles/globalStyles';
import {OutPlayers} from './components/OutPlayers';
import {ResultNumber} from './components/ResultNumber';
import {RuleDescription} from './components/RuleDescription';

export const Result: React.FC<navigationTypes> = ({navigation, route}) => {
  const [isWinnersSeen, setIsWinnersSeen] = useState<boolean>(false);
  const currentRound: RoundNumber = useContext(CurrentRound)!;
  const outPlayers: User[] = route?.params?.outPlayers;

  const onPressButton = () => {
    isWinnersSeen ? onMoveToRoundInitial() : setIsWinnersSeen(true);
  };

  const onMoveToRoundInitial = () => {
    currentRound.setRoundNumber(currentRound.roundNumber + 1);
    navigation.navigate('RoundInitial');
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
