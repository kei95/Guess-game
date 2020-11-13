import React, {useContext, useState} from 'react';
import {PlayersContext} from '../../context/context';
import {User} from '../../context/types';
import {navigationTypes} from '../../navigation/navigationTypes';
import {NumberPicker} from './component/NumberPicker';
import {Preparation} from './component/Preparation';

interface NumberProps extends navigationTypes {}
// TODO: Disable android's back button
export const GameInput: React.FC<NumberProps> = ({navigation}) => {
  const context = useContext(PlayersContext);
  const remainedPlayers: User[] | undefined = context?.players.filter(
    (player) => player.isOutOfGame === false,
  );

  const [isReadyToPic, setIsReadyToPic] = useState<boolean>(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
  const [currentPlayers, setCurrentPlayers] = useState<User[] | undefined>(
    remainedPlayers,
  );

  const onDecideNumber = (number: number): void => {
    const players = currentPlayers;
    players![currentPlayerIndex].number = number;
    setCurrentPlayers(players);
    setCurrentPlayerIndex(currentPlayerIndex + 1);
    players!.length > currentPlayerIndex + 1
      ? setIsReadyToPic(false)
      : goToResult(); // move to next screen
  };

  const goToResult = () => {
    setCurrentPlayerIndex(0);
    navigation.navigate('Result');
  };

  return isReadyToPic ? (
    <NumberPicker onPressButton={onDecideNumber} />
  ) : (
    <Preparation
      playerName={currentPlayers![currentPlayerIndex].name}
      onPressButton={setIsReadyToPic}
    />
  );
};
