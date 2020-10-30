import React from 'react';
import {Players, User} from './types';

export const PlayersContext = React.createContext<Players | undefined>(
  undefined,
);

export const defaultPlayers: User[] = [
  {name: '', number: 0, isOutOfGame: false} as User,
  {name: '', number: 0, isOutOfGame: false} as User,
];
