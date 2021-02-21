import React from 'react';
import {
  AnswerNumber,
  GuessableNumber,
  Players,
  RoundNumber,
  User,
} from './types';

// current players
export const PlayersContext = React.createContext<Players | undefined>(
  undefined,
);

// current answer
export const AnswerNumberContext = React.createContext<
  AnswerNumber | undefined
>(undefined);

// numbers players can choose
export const GuessableNumbers = React.createContext<
  GuessableNumber | undefined
>(undefined);

// current round number
export const CurrentRound = React.createContext<RoundNumber | undefined>(
  undefined,
);

// default players
export const defaultPlayers: User[] = [
  {name: 'Player 1', number: 0, isOutOfGame: false} as User,
  {name: 'Player 2', number: 0, isOutOfGame: false} as User,
];

// default answer
export const defaultAnswerNumber = Math.floor(Math.random() * 100);
