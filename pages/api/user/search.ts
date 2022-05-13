import { Request, Response } from "../../../lib/endpoints/express";
import nc from "next-connect";
import mongoose from "../../../lib/middlewares/mongoose";
import auth from "../../../lib/middlewares/auth";
import { isLoggedIn } from "../../../lib/middlewares/user";
import User from "../../../models/User";

const handler = nc<Request, Response>();

handler.use(mongoose, ...auth, isLoggedIn);

/**
 * Find up to 10 users that are a partial name match for the given query string
 */
handler.get(async (req, res) => {
  // get the query string
  const query = req.query.q;

  if (!query || query.length < 2) {
    return res
      .status(400)
      .send("Query too short! Please provide a query of length at least 2.");
  }

  // find all users whose name contain the query string
  const userMatches = await User.find({
    name: { $regex: query, $options: "i" },
  })
    .limit(10)
    .select("-email -googleId");

  res.status(200).send(userMatches);
});

export default handler;
