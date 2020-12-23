export interface User {
  name: string;
  number: number;
  isOutOfGame: boolean;
}
export interface Players {
  players: User[];
  setPlayers: React.Dispatch<React.SetStateAction<User[]>>;
}

export interface AnswerNumber {
  answerNumber: number;
  setAnswerNumber: React.Dispatch<React.SetStateAction<number>>;
}

export interface GuessableNumber {
  guessableNumber: guessableNumberType;
  setGuessableNumber: React.Dispatch<React.SetStateAction<guessableNumberType>>;
}

export interface guessableNumberType {
  smallest: number;
  greatest: number;
}

export interface RoundNumber {
  roundNumber: number;
  setRoundNumber: React.Dispatch<React.SetStateAction<number>>;
}
