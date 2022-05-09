import { Request, Response } from "../../../../lib/endpoints/express";
import nc from "next-connect";
import mongoose from "../../../../lib/middlewares/mongoose";
import auth from "../../../../lib/middlewares/auth";
import { isLoggedIn } from "../../../../lib/middlewares/user";
import DailyPuzzle from "../../../../models/DailyPuzzle";

const handler = nc<Request, Response>();

handler.use(mongoose, ...auth, isLoggedIn);

/**
 * Get a specific daily puzzle from x days ago.
 */
handler.get(async (req, res) => {
  // Get daysAgo from the request query params
  const daysAgo = parseInt(req.query.daysAgo as string);
  if (isNaN(daysAgo)) {
    return res.status(400).send("Invalid daysAgo value in request query");
  }
  if (daysAgo < 0) {
    return res.status(400).send("You can't see the future 🔮");
  }

  // Get the puzzle requested
  const puzzle = await DailyPuzzle.findOne({ daysAgo });
  if (!puzzle) {
    return res.status(404).send("No puzzle found");
  }
  return res.status(200).send(puzzle);
});

export default handler;
