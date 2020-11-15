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
