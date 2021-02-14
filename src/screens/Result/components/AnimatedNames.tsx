import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {PlayerName} from '../../../components/PlayerName';
import {User} from '../../../context/types';
import {navigationTypes} from '../../../navigation/navigationTypes';

interface AnimatedNamesProps extends navigationTypes {
  players: User[];
  isAnimationEnd: boolean;
  setIsAnimationEnd: React.Dispatch<React.SetStateAction<boolean>>;
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

  const PlayerNames: JSX.Element[] = players.map((player, idx) => (
    <PlayerName player={player} key={`player_${idx}`} />
  ));
  return (
    <Animated.View
      style={{opacity: isAnimationEnd ? 1 : (animatedValue as any)}}>
      {players && players.length > 0 && PlayerNames}
    </Animated.View>
  );
};
