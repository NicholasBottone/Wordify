import { Request, Response } from "../../../lib/endpoints/express";
import nc from "next-connect";
import mongoose from "../../../lib/middlewares/mongoose";
import auth from "../../../lib/middlewares/auth";
import { isLoggedIn } from "../../../lib/middlewares/user";
import DailyPuzzle from "../../../models/DailyPuzzle";
import IUser from "../../../types/IUser";

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
    return res.status(404).send("No puzzle found");
  }

  // TODO: Update the user's profile with the result

  // TODO: Update the puzzle with the result
});

export default handler;
