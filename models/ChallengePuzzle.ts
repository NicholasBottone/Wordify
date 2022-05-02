import { Schema, model } from "mongoose";
import IChallengePuzzle from "../types/IChallengePuzzle";

const ChallengePuzzleSchema = new Schema({
    word: {
        type: String,
        required: true,
    },
    attempts: {
        type: Number,
        default: 0,
    },
    wins: {
        type: Number,
        default: 0,
    },
    guessDistribution: {
        type: [Number],
        default: [0, 0, 0, 0, 0, 0],
    },
    averageTimeToWin: {
        type: Number,
        default: 0,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    plays: {
        type: [
            {
                player: {
                    type: Schema.Types.ObjectId,
                    ref: "User",
                    required: true,
                },
                timeSpent: {
                    type: Number,
                    required: true,
                },
                guess: {
                    type: [[Number]],
                    required: true,
                },
            },
        ],
        default: [],
    },
});

export default model<IChallengePuzzle>(
    "ChallengePuzzle",
    ChallengePuzzleSchema
);