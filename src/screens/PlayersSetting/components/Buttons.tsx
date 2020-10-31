import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Button} from '../../../components/button';
import {User} from '../../../context/types';
import {GlobalStyles} from '../../../styles/globalStyles';

interface ButtonsProps {
  players: User[];
  setPlayers: (value: React.SetStateAction<User[]>) => void;
}

export const Buttons: React.FC<ButtonsProps> = ({players, setPlayers}) => {
  const handleAddPlayer = () => {
    setPlayers([
      ...players,
      {
        name: `Player ${players.length + 1}`,
        number: 0,
        isOutOfGame: false,
      } as User,
    ]);
  };

  const handleReducePlayer = () => {
    const returnArray = players.slice(0, -1);
    setPlayers(returnArray);
  };

  return (
    <View style={styles.addReduceButtonWrapper}>
      {players.length > 2 ? (
        <Button
          title="-"
          color={'#E07A5F'}
          onPress={handleReducePlayer}
          style={styles.addReduceButton}
          textStyle={styles.addReduceButtonText}
        />
      ) : (
        <View style={styles.addReduceButton} />
      )}
      <Button
        title="+"
        color={'#81B29A'}
        onPress={handleAddPlayer}
        style={styles.addReduceButton}
        textStyle={styles.addReduceButtonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addReduceButtonWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
  } as ViewStyle,
  addReduceButton: {
    width: '45%',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  } as ViewStyle,
  addReduceButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: GlobalStyles.defaultFont,
  } as ViewStyle,
});
