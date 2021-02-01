import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Input} from '../../../components/textInput';
import {User} from '../../../context/types';

interface PlayerNameInputProps {
  player: User;
  index: number;
  handleInput: (text: string, index: number) => void;
}

export const PlayerNameInput: React.FC<PlayerNameInputProps> = ({
  player,
  index,
  handleInput,
}) => {
  const onChangeText = (e: string) => {
    handleInput(e, index);
  };

  return (
    <View style={styles.nameInputContainer}>
      <Input
        label={`Player ${index + 1}`}
        value={player.name}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nameInputContainer: {
    width: '100%',
    paddingTop: 20,
  } as ViewStyle,
});
