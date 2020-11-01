import React from 'react';
import {User, Players} from '../../../context/types';
import {PlayerNameInput} from './PlayerNameInput';

interface PlayersProps {
  playersContext: Players | undefined;
}

export const PlayersInputs: React.FC<PlayersProps> = ({playersContext}) => {
  const handleInput = (e: string, index: number) => {
    const changedPlayers = playersContext!.players;
    changedPlayers[index].name = e;
    playersContext!.setPlayers([...changedPlayers]);
  };

  const playerInputs: Element[] = playersContext!.players.map(
    (player: User, index: number) => (
      <PlayerNameInput
        player={player}
        index={index}
        key={`player_${index}`}
        handleInput={handleInput}
      />
    ),
  );
  return <>{playerInputs}</>;
};
