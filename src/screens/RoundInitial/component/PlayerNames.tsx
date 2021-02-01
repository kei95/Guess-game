import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {PlayerName} from '../../../components/PlayerName';
import {User} from '../../../context/types';
import {GlobalStyles} from '../../../styles/globalStyles';
import {roundNumberString} from './roundNumberString/roundNumberString';

interface PlayerNamesProps {
  players: User[];
  currentRound: number;
}

export const PlayerNames: React.FC<PlayerNamesProps> = ({
  players,
  currentRound,
}) => {
  const currentRoundString: string =
    currentRound < 10 ? roundNumberString[currentRound] : `${currentRound}th`;
  const remainedPlayerNames: JSX.Element[] = players.map((player, idx) =>
    !player.isOutOfGame ? (
      <View style={styles.nameWrapper} key={`player_${idx}`}>
        <PlayerName player={player} key={`${player}_${idx}`} />
      </View>
    ) : (
      <React.Fragment key={`noPlayer_${idx}`} />
    ),
  );
  return (
    <View style={styles.contentsWrapper}>
      <Text style={styles.roundText}>{`${currentRoundString} round`}</Text>
      {remainedPlayerNames}
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
  nameWrapper: {
    paddingTop: 10,
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
