import React, {useContext} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {PlayerName} from '../../../components/PlayerName';
import {PlayersContext} from '../../../context/context';
import {User} from '../../../context/types';
import {navigationTypes} from '../../../navigation/navigationTypes';
import {GlobalStyles} from '../../../styles/globalStyles';
import {getCurrentPlayers} from '../../GamePlay/gameFunctions/gameFunctions';
import {AnimatedNames} from './AnimatedNames';

interface GameOverProps extends navigationTypes {
  isAnimationEnd: boolean;
  setIsAnimationEnd: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GameOver: React.FC<GameOverProps> = ({
  navigation,
  isAnimationEnd,
  setIsAnimationEnd,
}) => {
  const playersFromContext = useContext(PlayersContext);
  const lostPlayers: User[] = getCurrentPlayers(playersFromContext!.players);

  return (
    <View style={styles.textsContainer}>
      <Text style={styles.title}>This games loser is...</Text>
      <AnimatedNames
        players={lostPlayers}
        navigation={navigation}
        isAnimationEnd={isAnimationEnd}
        setIsAnimationEnd={setIsAnimationEnd}
      />
    </View>
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
