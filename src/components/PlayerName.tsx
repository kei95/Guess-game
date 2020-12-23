import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {User} from '../context/types';
import {GlobalStyles} from '../styles/globalStyles';

interface PlayerNameProps {
  player: User;
}

export const PlayerName: React.FC<PlayerNameProps> = ({player}) => {
  return <Text style={styles.playerName}>{player.name}</Text>;
};

const styles = StyleSheet.create({
  playerName: {
    fontSize: 40,
    color: GlobalStyles.secondPrimaryColor,
    fontWeight: 'bold',
    fontFamily: GlobalStyles.defaultFont,
    paddingTop: 10,
  } as TextStyle,
});
