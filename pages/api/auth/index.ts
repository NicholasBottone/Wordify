import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";
import nc from "next-connect";
import mongoose from "../../../lib/middlewares/mongoose";
import auth from "../../../lib/middlewares/auth";
import IUser from "../../../types/IUser";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.use(mongoose, ...auth);

handler.get(async (req, res) => {
  // get the user from the session
  // @ts-ignore
  const user = req.user as IUser | undefined;

  if (!user) {
    return res.status(401).send("Not logged in");
  } else {
    res.status(200).send(user);
  }
});

export default handler;
