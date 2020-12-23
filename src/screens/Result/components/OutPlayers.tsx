import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {PlayerName} from '../../../components/PlayerName';

import {User} from '../../../context/types';
import {GlobalStyles} from '../../../styles/globalStyles';

interface OutPlayersProps {
  outPlayers: User[];
}

export const OutPlayers: React.FC<OutPlayersProps> = ({outPlayers}) => {
  const outPlayerNames: JSX.Element[] = outPlayers.map((player, idx) => (
    <PlayerName player={player} key={`outPlayer_${idx}`} />
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
    color: GlobalStyles.secondPrimaryColor,
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
