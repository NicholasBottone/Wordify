import mongoose, { Schema, model } from "mongoose";
import IDailyPuzzle from "../types/IDailyPuzzle";

const DailyPuzzleSchema = new Schema({
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
  daysAgo: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.DailyPuzzle ||
  model<IDailyPuzzle>("DailyPuzzle", DailyPuzzleSchema);
