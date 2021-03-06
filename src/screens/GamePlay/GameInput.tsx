import React, {useContext, useEffect, useState} from 'react';
import {
  AnswerNumberContext,
  CurrentRound,
  defaultPlayers,
  GuessableNumbers,
  PlayersContext,
} from '../../context/context';
import {User} from '../../context/types';
import {navigationTypes} from '../../navigation/navigationTypes';
import {FinishInputPrompt} from './component/FinishInputPrompt';
import {NumberPicker} from './component/NumberPicker';
import {Preparation} from './component/Preparation';
import {
  getWinners,
  getUpDatedPlayers,
  getCurrentPlayers,
} from './gameFunctions/gameFunctions';

interface NumberProps extends navigationTypes {}
// TODO: Disable android's back button
// TODO: Create a function when the game is finished (or draw)
export const GameInput: React.FC<NumberProps> = ({navigation}) => {
  const playersFromContext = useContext(PlayersContext);
  const numberContext = useContext(AnswerNumberContext);
  const guessableNumberContext = useContext(GuessableNumbers);
  const currentRoundContext = useContext(CurrentRound!);
  const [isReadyToPic, setIsReadyToPic] = useState<boolean>(false);
  const [isEveryoneDone, setIsEveryoneDone] = useState<boolean>(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
  const [currentPlayers, setCurrentPlayers] = useState<User[] | undefined>(
    defaultPlayers,
  );

  useEffect(() => {
    let isMounted: boolean = false;
    if (!isMounted) {
      const remainedPlayers: User[] | undefined = getCurrentPlayers(
        playersFromContext!.players,
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
      : setIsEveryoneDone(true);
  };

  const goToResult = (): void => {
    const allPlayers: User[] = playersFromContext!.players;
    const players: User[] = currentPlayers!;
    const winners = getWinners(players, numberContext!.answerNumber);
    const updatedPlayers = getUpDatedPlayers(allPlayers, winners);
    const updatedCurrentPlayers = getCurrentPlayers(updatedPlayers);
    setCurrentPlayerIndex(0);
    // needs to be 1 to finish the game
    if (updatedCurrentPlayers.length === 1) {
      // Navigate to the end of the game screen
      playersFromContext!.setPlayers(updatedPlayers);
      currentRoundContext!.setRoundNumber(1);
      navigation.navigate('Result', {outPlayers: winners, isGameOver: true});
    } else if (updatedCurrentPlayers.length === 0) {
      setIsReadyToPic(false);
      navigation.navigate('Result');
    } else {
      playersFromContext!.setPlayers(updatedPlayers);
      updateGuessableNumber(winners);
      setCurrentPlayers(updatedCurrentPlayers);
      setIsReadyToPic(false);
      navigation.navigate('Result', {outPlayers: winners});
    }
  };

  const updateGuessableNumber = (winners: User[]) => {
    const winnersGuess = winners[0].number;
    const answerNumber = numberContext!.answerNumber;
    if (winnersGuess > answerNumber) {
      guessableNumberContext!.setGuessableNumber({
        ...guessableNumberContext!.guessableNumber,
        greatest: winnersGuess,
      });
    } else if (winnersGuess < answerNumber) {
      guessableNumberContext!.setGuessableNumber({
        ...guessableNumberContext!.guessableNumber,
        smallest: winnersGuess,
      });
    }
  };

  return isEveryoneDone ? (
    // When everyone is done picking a number
    <FinishInputPrompt onPressButton={goToResult} />
  ) : isReadyToPic ? (
    // When a user is picking a number
    <NumberPicker onPressButton={onDecideNumber} />
  ) : (
    // Every time a user picks number
    <Preparation
      playerName={currentPlayers![currentPlayerIndex].name}
      onPressButton={setIsReadyToPic}
    />
  );
};
