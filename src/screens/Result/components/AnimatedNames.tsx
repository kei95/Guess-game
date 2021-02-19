import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, TextStyle} from 'react-native';
import {PlayerName} from '../../../components/PlayerName';
import {User} from '../../../context/types';
import {navigationTypes} from '../../../navigation/navigationTypes';
import {GlobalStyles} from '../../../styles/globalStyles';

interface AnimatedNamesProps extends navigationTypes {
  players?: User[];
  isAnimationEnd: boolean;
  setIsAnimationEnd: React.Dispatch<React.SetStateAction<boolean>>;
  isDraw?: boolean;
}

export const AnimatedNames: React.FC<AnimatedNamesProps> = ({
  players,
  isAnimationEnd,
  setIsAnimationEnd,
  navigation,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start(({finished}) => {
        if (finished) {
          setIsAnimationEnd(true);
        }
      });
    });
    return unsubscribe;
  }, []);

  const PlayerNames: JSX.Element[] | JSX.Element = players ? (
    players.map((player, idx) => (
      <PlayerName player={player} key={`player_${idx}`} />
    ))
  ) : (
    <></>
  );
  return (
    <Animated.View
      style={{opacity: isAnimationEnd ? 1 : (animatedValue as any)}}>
      {!players ? (
        <Text style={styles.playerName}>Draw</Text>
      ) : (
        players && players.length > 0 && PlayerNames
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  playerName: {
    fontSize: 40,
    color: GlobalStyles.secondPrimaryColor,
    fontWeight: 'bold',
    fontFamily: GlobalStyles.defaultFont,
    alignSelf: 'center',
  } as TextStyle,
});
