import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';

import {User} from '../../../context/types';
import {navigationTypes} from '../../../navigation/navigationTypes';
import {GlobalStyles} from '../../../styles/globalStyles';
import {AnimatedNames} from './AnimatedNames';

interface OutPlayersProps extends navigationTypes {
  outPlayers: User[];
  isAnimationEnd: boolean;
  setIsAnimationEnd: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OutPlayers: React.FC<OutPlayersProps> = ({
  outPlayers,
  navigation,
  isAnimationEnd,
  setIsAnimationEnd,
}) => {
  return (
    <View style={styles.textsContainer}>
      <Text style={styles.title}>The closest player was...</Text>
      {outPlayers && outPlayers.length > 0 && (
        <AnimatedNames
          players={outPlayers}
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
    fontSize: 25,
    color: '#3D405B',
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
});
