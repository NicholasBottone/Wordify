import { Request, Response } from "../../../lib/endpoints/express";
import nc from "next-connect";
import mongoose from "../../../lib/middlewares/mongoose";
import auth from "../../../lib/middlewares/auth";
import { isLoggedIn } from "../../../lib/middlewares/user";
import User from "../../../models/User";
import IUser from "../../../types/IUser";

const handler = nc<Request, Response>();

handler.use(mongoose, ...auth, isLoggedIn);

/**
 * Friends or unfriends another user profile by their id.
 */
handler.post(async (req, res) => {
  // Get the request user
  const user = req.user as IUser;

  // Get id from the request body
  const id = req.body.id;
  if (!id) {
    return res.status(400).send("No id provided in request body");
  }

  // Get the friend boolean from the request body
  const friend = req.body.friend;
  if (friend !== true && friend !== false) {
    return res.status(400).send("No friend boolean provided in request body");
  }

  // Get the user from the database
  const friendProfile = await User.findById(id);
  if (!friendProfile) {
    return res.status(404).send("User not found");
  }

  // Update the user's friend list
  if (friend) {
    User.updateOne({ _id: user.id }, { $push: { friends: id } });
  } else {
    User.updateOne({ _id: user.id }, { $pull: { friends: id } });
  }

  res.status(200).send("Success");
});

/**
 * Gets the list of populated friend users from the user's friend list.
 */
handler.get(async (req, res) => {
  // Get the request user
  const user = req.user as IUser;

  // Get the user's friends (populated but excluding email)
  const userRes = await User.findById(user.id)
    .populate("friends")
    .select("friends");
  if (!userRes) {
    return res.status(404).send("User not found");
  }

  // Remove the email and googleId from each friend
  const friendsList = userRes.friends.map((friend: any) => {
    const friendObj = friend.toObject();
    delete friendObj.email;
    delete friendObj.googleId;
    return friendObj;
  });

  res.status(200).send(friendsList);
});

export default handler;
