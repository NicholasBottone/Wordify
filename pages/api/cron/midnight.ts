import { Request, Response } from "../../../lib/endpoints/express";
import nc from "next-connect";
import mongoose from "../../../lib/middlewares/mongoose";
import DailyPuzzle from "../../../models/DailyPuzzle";
import User from "../../../models/User";

const handler = nc<Request, Response>();

handler.use(mongoose);

/**
 * Cron job that runs daily at midnight.
 * It will reset the daily puzzle for the next day and handle breaking streaks.
 * This is a secure endpoint that can only be accessed by using the secret token.
 */
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

  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);

  // Reset the streaks for users that didn't solve the daily puzzle today
  await User.updateMany(
    {
      $and: [{ lastWin: { $lt: yesterday } }, { winStreak: { $gt: 0 } }],
    },
    {
      winStreak: 0,
    }
  );

  res.status(200).send("OK");
});

export default handler;
