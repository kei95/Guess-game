import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {User} from '../../../context/types';
import {navigationTypes} from '../../../navigation/navigationTypes';
import {GlobalStyles} from '../../../styles/globalStyles';
import {getCurrentPlayers} from '../../GamePlay/gameFunctions/gameFunctions';
import {AnimatedNames} from '../../Result/components/AnimatedNames';
import {roundNumberString} from './roundNumberString/roundNumberString';

interface PlayerNamesProps extends navigationTypes {
  players: User[];
  currentRound: number;
  isAnimationEnd: boolean;
  setIsAnimationEnd: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PlayerNames: React.FC<PlayerNamesProps> = ({
  players,
  currentRound,
  isAnimationEnd,
  setIsAnimationEnd,
  navigation,
}) => {
  const currentPlayers = getCurrentPlayers(players);
  const currentRoundString: string =
    currentRound < 10 ? roundNumberString[currentRound] : `${currentRound}th`;

  return (
    <View style={styles.contentsWrapper}>
      <Text style={styles.roundText}>{`${currentRoundString} round`}</Text>
      <AnimatedNames
        players={currentPlayers}
        navigation={navigation}
        isAnimationEnd={isAnimationEnd}
        setIsAnimationEnd={setIsAnimationEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentsWrapper: {
    flex: 1,
    flexWrap: 'wrap',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  roundText: {
    paddingTop: '20%',
    fontSize: 40,
    color: '#3D405B',
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
});
