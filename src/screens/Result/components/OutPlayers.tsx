import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';

import {User} from '../../../context/types';
import {GlobalStyles} from '../../../styles/globalStyles';

interface OutPlayersProps {
  outPlayers: User[];
}

export const OutPlayers: React.FC<OutPlayersProps> = ({outPlayers}) => {
  const outPlayerNames: JSX.Element[] = outPlayers.map((player, idx) => (
    <Text key={`outPlayer_${idx}`} style={styles.playerName}>
      {player.name}
    </Text>
  ));
  return (
    <View style={styles.textsContainer}>
      <Text style={styles.title}>The closest player was...</Text>
      {outPlayers && outPlayers.length > 0 && outPlayerNames}
    </View>
  );
};

const styles = StyleSheet.create({
  playerName: {
    fontSize: 40,
    color: '#81B29A',
    fontWeight: 'bold',
    fontFamily: GlobalStyles.defaultFont,
    paddingTop: 10,
  } as TextStyle,
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
