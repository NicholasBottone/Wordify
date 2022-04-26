export default interface IUser {
  id: string;
  name: string;
  givenName: string;
  familyName: string;
  email: string;
  profilePicture: string;
  bio?: string;
  winStreak: number;
  longestWinStreak: number;
  lastWin?: Date;
  gamesPlayed: number;
  gamesWon: number;
  guessDistribution: number[];
  pastGuesses: (number[][] | null)[];
  pastTimes: (number | null)[];
  friends: string[] | IUser[];
}
