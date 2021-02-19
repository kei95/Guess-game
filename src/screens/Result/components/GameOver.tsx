import React, {useContext} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {PlayersContext} from '../../../context/context';
import {User} from '../../../context/types';
import {navigationTypes} from '../../../navigation/navigationTypes';
import {GlobalStyles} from '../../../styles/globalStyles';
import {getCurrentPlayers} from '../../GamePlay/gameFunctions/gameFunctions';
import {AnimatedNames} from './AnimatedNames';

interface GameOverProps extends navigationTypes {
  outPlayers?: User[];
  isAnimationEnd: boolean;
  isWinnersSeen?: boolean;
  setIsAnimationEnd: React.Dispatch<React.SetStateAction<boolean>>;
  isDraw?: boolean;
}

export const GameOver: React.FC<GameOverProps> = ({
  outPlayers,
  navigation,
  isWinnersSeen,
  isAnimationEnd,
  setIsAnimationEnd,
  isDraw,
}) => {
  const playersFromContext = useContext(PlayersContext);
  const lostPlayers: User[] = getCurrentPlayers(playersFromContext!.players);

  return (
    <View style={styles.textsContainer}>
      {!isDraw ? (
        <>
          <Text style={styles.title}>Game set</Text>
          {
            <>
              {!isDraw && (
                <Text style={styles.secondLine}>The closest player was...</Text>
              )}
              <View style={styles.winnerNameWrapper}>
                <AnimatedNames
                  players={outPlayers!}
                  navigation={navigation}
                  isAnimationEnd={isWinnersSeen ? true : isAnimationEnd}
                  setIsAnimationEnd={setIsAnimationEnd}
                  isDraw={isDraw}
                />
              </View>
              <View style={isWinnersSeen ? styles.shown : styles.hidden}>
                <Text style={styles.secondLine}>This game's looser is</Text>
                <AnimatedNames
                  players={lostPlayers}
                  navigation={navigation}
                  isAnimationEnd={true}
                  setIsAnimationEnd={setIsAnimationEnd}
                  isDraw={isDraw}
                />
              </View>
            </>
          }
        </>
      ) : (
        <AnimatedNames
          navigation={navigation}
          isAnimationEnd={isAnimationEnd}
          setIsAnimationEnd={setIsAnimationEnd}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textsContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
  } as ViewStyle,
  title: {
    fontSize: 40,
    color: '#3D405B',
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: GlobalStyles.defaultFont,
    marginBottom: 25,
  } as TextStyle,
  secondLine: {
    fontSize: 25,
    color: '#3D405B',
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  winnerNameWrapper: {
    marginBottom: 20,
  } as ViewStyle,
  hidden: {
    opacity: 0,
  } as ViewStyle,
  shown: {
    opacity: 1,
  } as ViewStyle,
});
