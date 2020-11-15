import React from 'react';
import {AnswerNumber, Players, User} from './types';

export const PlayersContext = React.createContext<Players | undefined>(
  undefined,
);

export const AnswerNumberContext = React.createContext<
  AnswerNumber | undefined
>(undefined);

export const defaultPlayers: User[] = [
  {name: 'Player 1', number: 0, isOutOfGame: false} as User,
  {name: 'Player 2', number: 0, isOutOfGame: false} as User,
];

export const defaultAnswerNumber = Math.floor(Math.random() * 101);
