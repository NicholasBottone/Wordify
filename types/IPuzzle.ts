export default interface IPuzzle {
    id: string;
    word: string;
    attempts: number;
    wins: number;
    guessDistribution: number[];
    averageTimeToWin: number;
}