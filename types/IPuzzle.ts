export default interface IPuzzle {
  _id: string;
  word: string;
  attempts: number;
  wins: number;
  guessDistribution: number[];
  averageTimeToWin: number;
}
