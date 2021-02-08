import React, {useContext} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {GuessableNumbers} from '../../../context/context';

import {User} from '../../../context/types';
import {GlobalStyles} from '../../../styles/globalStyles';

interface ResultNumberProps {
  outPlayers: User[];
}

export const ResultNumber: React.FC<ResultNumberProps> = ({outPlayers}) => {
  const guessableNumberContext = useContext(GuessableNumbers);
  const resultNumbers: JSX.Element[] = outPlayers.map((player, idx) => (
    <Text key={`outPlayer_${idx}`} style={styles.resultNumber}>
      {player.number}
    </Text>
  ));

  return (
    <View style={styles.textsContainer}>
      <Text style={styles.title}>Winner's number was...</Text>
      <View style={styles.numberContainer}>
        {outPlayers && outPlayers.length > 0 && resultNumbers}
      </View>
      <Text style={styles.descriptionText}>
        The answer is greater than
        <Text style={styles.choosableNumber}>
          {' '}
          {guessableNumberContext?.guessableNumber.smallest}{' '}
        </Text>
        and smaller than
        <Text style={styles.choosableNumber}>
          {' '}
          {guessableNumberContext?.guessableNumber.greatest}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultNumber: {
    fontSize: 70,
    color: GlobalStyles.secondPrimaryColor,
    fontWeight: 'bold',
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  textsContainer: {
    flex: 1,
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
  descriptionText: {
    fontSize: 25,
    color: '#3D405B',
    textAlign: 'left',
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  choosableNumber: {
    fontSize: 25,
    color: '#3D405B',
    fontWeight: 'bold',
    marginTop: 1,
    fontFamily: GlobalStyles.defaultFont,
  } as TextStyle,
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
    paddingBottom: 5,
  },
});
