import { Request, Response } from "../../../lib/endpoints/express";
import nc from "next-connect";
import mongoose from "../../../lib/middlewares/mongoose";
import DailyPuzzle from "../../../models/DailyPuzzle";

const handler = nc<Request, Response>();

handler.use(mongoose);

handler.post(async (req, res) => {
  // Check for the secret API key
  if (req.headers["x-api-key"] !== process.env.CRON_API_KEY) {
    return res.status(401).send("Invalid API key");
  }

  // Get the word from the request body
  const word = req.body.word;
  if (!word) {
    return res.status(400).send("No word found in request body");
  }

  // Get the daysAgo from the request body
  const daysAgo = req.body.daysAgo;
  if (!daysAgo) {
    return res.status(400).send("No daysAgo found in request body");
  }

  // Create the daily puzzle
  const puzzle = new DailyPuzzle({
    word,
    daysAgo,
  });
  await puzzle.save();
  return res.status(200).json({
    message: "Daily puzzle created",
    puzzle,
  });
});

export default handler;
