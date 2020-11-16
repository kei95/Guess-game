import React, {useContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {
  AnswerNumberContext,
  defaultPlayers,
  PlayersContext,
} from '../../context/context';
import {User} from '../../context/types';
import {navigationTypes} from '../../navigation/navigationTypes';
import {NumberPicker} from './component/NumberPicker';
import {Preparation} from './component/Preparation';
import {
  getWinners,
  getUpDatedPlayers,
  getCurrentPlayers,
} from './gameFunctions/gameFunctions';

interface NumberProps extends navigationTypes {}
// TODO: Disable android's back button
export const GameInput: React.FC<NumberProps> = ({navigation}) => {
  const context = useContext(PlayersContext);
  const numberContext = useContext(AnswerNumberContext);
  const [isReadyToPic, setIsReadyToPic] = useState<boolean>(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
  const [currentPlayers, setCurrentPlayers] = useState<User[] | undefined>(
    defaultPlayers,
  );

  useEffect(() => {
    let isMounted: boolean = false;
    if (!isMounted) {
      const remainedPlayers: User[] | undefined = getCurrentPlayers(
        context!.players,
      );
      setCurrentPlayers(remainedPlayers);
      isMounted = true;
    }
  }, []);

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
    const players: User[] = currentPlayers!;
    const winners = getWinners(players, numberContext!.answerNumber);
    const updatedPlayers = getUpDatedPlayers(players, winners);
    const updatedCurrentPlayers = getCurrentPlayers(updatedPlayers);
    context!.setPlayers(updatedPlayers);
    setCurrentPlayerIndex(0);
    if (updatedCurrentPlayers.length === 0) {
      // Navigate to the end of the game screen
      Alert.alert('Game Over');
    } else {
      // setCurrentPlayerIndex(0);
      setCurrentPlayers(updatedCurrentPlayers);
      setIsReadyToPic(false);
      navigation.navigate('Result', {outPlayers: winners});
    }
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
