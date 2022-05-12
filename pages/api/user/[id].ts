import { Request, Response } from "../../../lib/endpoints/express";
import nc from "next-connect";
import mongoose from "../../../lib/middlewares/mongoose";
import auth from "../../../lib/middlewares/auth";
import { isLoggedIn } from "../../../lib/middlewares/user";
import User from "../../../models/User";

const handler = nc<Request, Response>();

handler.use(mongoose, ...auth, isLoggedIn);

/**
 * Get another user's profile information by their user ID.
 */
handler.get(async (req, res) => {
  // Get id from the request query params
  const id = parseInt(req.query.id as string);
  if (!id) {
    return res.status(400).send("Invalid user ID provided.");
  }

  // Get the user from the database
  const user = await User.findById(id).select("-email -googleId");
  if (!user) {
    return res.status(404).send("User not found.");
  }

  // Send the user's profile information
  res.status(200).send(user);
});

export default handler;
