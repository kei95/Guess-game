import {User} from '../../../context/types';

export const getWinners = (players: User[], targetNumber: number): User[] => {
  const closestNumberPlayer: User = players.reduce(
    (prevPlayer, currentPlayer) =>
      prevPlayer.number - targetNumber > currentPlayer.number - targetNumber
        ? prevPlayer
        : currentPlayer,
  );
  const closestNumberPlayers: User[] = players.filter(
    (player) => player.number === closestNumberPlayer.number,
  );
  return closestNumberPlayers;
};

export const getUpDatedPlayers = (players: User[], winners: User[]): User[] => {
  return players.map((player) =>
    winners.some((winner) => winner.name === player.name)
      ? {...player, isOutOfGame: true}
      : player,
  );
};

export const getCurrentPlayers = (players: User[]): User[] => {
  return players.filter((player) => player.isOutOfGame === false);
};

export const isGameGoesOn = (players: User[]) => {
  return players.length > 0 ? true : false;
};
