import { Request, Response } from "../../../../lib/endpoints/express";
import nc from "next-connect";
import mongoose from "../../../../lib/middlewares/mongoose";
import auth from "../../../../lib/middlewares/auth";
import { isLoggedIn } from "../../../../lib/middlewares/user";
import DailyPuzzle from "../../../../models/DailyPuzzle";
import IUser from "../../../../types/IUser";
import User from "../../../../models/User";

const handler = nc<Request, Response>();

handler.use(mongoose, ...auth, isLoggedIn);

/**
 * Get today's daily puzzle
 */
handler.get(async (_req, res) => {
  // Get today's puzzle
  const puzzle = await DailyPuzzle.findOne({ daysAgo: 0 });
  if (!puzzle) {
    return res.status(404).send("No puzzle found");
  }
  return res.status(200).send(puzzle);
});

/**
 * Submit a result for today's daily puzzle
 */
handler.post(async (req, res) => {
  // Get the user
  const user = req.user as IUser;

  // Check if the user has already submitted a result
  if (user.pastGuesses[0]) {
    return res.status(400).send("You have already submitted a result today");
  }

  // Get today's puzzle
  const puzzle = await DailyPuzzle.findOne({ daysAgo: 0 });
  if (!puzzle) {
    return res.status(404).send("No puzzle found for today");
  }

  // Get the resultBoard from the request body
  const resultBoard = req.body.resultBoard;
  if (!resultBoard) {
    return res.status(400).send("No resultBoard found in request body");
  }

  // Check if the resultBoard is a valid 2d array with dimensions of 6x5
  if (
    !Array.isArray(resultBoard) ||
    resultBoard.length > 6 ||
    resultBoard.length < 1 ||
    resultBoard[0].length !== 5
  ) {
    return res.status(400).send("Invalid resultBoard value in request body");
  }

  // Check if the resultBoard is a valid 2d array of numbers 0-2
  for (const row of resultBoard) {
    for (const cell of row) {
      if (cell < 0 || cell > 2) {
        return res
          .status(400)
          .send("Invalid resultBoard value in request body!");
      }
    }
  }

  // Get win from the request body
  const win = req.body.win;
  if (win !== false && win !== true) {
    return res.status(400).send("No win found in request body");
  }

  // Get the timeSpent from the request body
  const timeSpent = req.body.timeSpent;
  if (!timeSpent) {
    return res.status(400).send("No timeSpent found in request body");
  }

  // Check if the timeSpent is a valid number
  if (typeof timeSpent !== "number") {
    return res.status(400).send("Invalid timeSpent value in request body");
  }

  // Update guess distribution
  const numberOfGuesses = resultBoard.length;
  const userGuessDistribution = user.guessDistribution;
  if (win) userGuessDistribution[numberOfGuesses - 1]++;

  const puzzleGuessDistribution = puzzle.guessDistribution;
  if (win) puzzleGuessDistribution[numberOfGuesses - 1]++;

  // Update the user's profile with the result
  await User.updateOne(
    { _id: user.id },
    {
      // Set the user's pastGuesses at index 0 to the resultBoard
      "pastGuesses.0": resultBoard,
      $inc: {
        // Increment gamesPlayed
        gamesPlayed: 1,
        // If the user won, increment winStreak and gamesWon
        winStreak: win ? 1 : 0,
        gamesWon: win ? 1 : 0,
      },
      // If the user won, update lastWin, guessDistribution, and pastTimes
      lastWin: win ? new Date() : user.lastWin,
      guessDistribution: userGuessDistribution,
      "pastTimes.0": win ? timeSpent : null,
    }
  );

  const averageTimeToWin =
    (puzzle.averageTimeToWin * puzzle.wins + timeSpent) / (puzzle.wins + 1);

  // Update the puzzle with the result
  await DailyPuzzle.updateOne(
    { _id: puzzle.id },
    {
      $inc: {
        // Increment attempts
        attempts: 1,
        // If the user won, increment wins
        wins: win ? 1 : 0,
      },
      // If the user won, update guessDistribution and averageTimeToWin
      guessDistribution: puzzleGuessDistribution,
      averageTimeToWin: win ? averageTimeToWin : puzzle.averageTimeToWin,
    }
  );

  res.status(200).send("Success");
});

export default handler;
