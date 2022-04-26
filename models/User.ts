import { model, Schema } from "mongoose";
import IUser from "../types/IUser";

const UserSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  givenName: {
    type: String,
    required: true,
  },
  familyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: false,
  },
  winStreak: {
    type: Number,
    default: 0,
  },
  longestWinStreak: {
    type: Number,
    default: 0,
  },
  lastWin: {
    type: Date,
    default: null,
  },
  gamesPlayed: {
    type: Number,
    default: 0,
  },
  gamesWon: {
    type: Number,
    default: 0,
  },
  guessDistribution: {
    type: [Number],
    default: [0, 0, 0, 0, 0, 0],
  },
  pastGuesses: {
    type: [[[Number]]],
    default: [null],
  },
  pastTimes: {
    type: [Number],
    default: [null],
  },
  friends: {
    type: [Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
});

export default model<IUser>("User", UserSchema);
