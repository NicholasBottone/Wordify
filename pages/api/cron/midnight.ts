import { Request, Response } from "../../../lib/endpoints/express";
import nc from "next-connect";
import mongoose from "../../../lib/middlewares/mongoose";
import DailyPuzzle from "../../../models/DailyPuzzle";
import User from "../../../models/User";

const handler = nc<Request, Response>();

handler.use(mongoose);

handler.post(async (req, res) => {
  // Check for the secret API key
  if (req.headers["x-api-key"] !== process.env.CRON_API_KEY) {
    return res.status(401).send("Invalid API key");
  }

  // Increment daysAgo on all daily puzzles
  await DailyPuzzle.updateMany(
    {},
    {
      $inc: {
        daysAgo: 1,
      },
    }
  );

  // Insert null at index 0 into pastGuesses and pastTimes for all users
  await User.updateMany(
    {},
    {
      $push: {
        pastGuesses: {
          $each: [null],
          $position: 0,
        },
        pastTimes: {
          $each: [null],
          $position: 0,
        },
      },
    }
  );

  res.status(200).send("OK");
});

export default handler;
