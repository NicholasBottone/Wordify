import IPuzzle from "./IPuzzle";
import IUser from "./IUser";

export default interface IChallengePuzzle extends IPuzzle {
    dateCreated: Date;
    author: string | IUser;
    plays: Play[];
}

type Play = {
    player: string | IUser;
    timeSpent: number;
    guess: number[][];
};