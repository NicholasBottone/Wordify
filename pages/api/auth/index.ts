import { Request, Response } from "../../../lib/endpoints/express";
import nc from "next-connect";
import mongoose from "../../../lib/middlewares/mongoose";
import auth from "../../../lib/middlewares/auth";
import { isLoggedIn } from "../../../lib/middlewares/user";

const handler = nc<Request, Response>();

handler.use(mongoose, ...auth, isLoggedIn);

handler.get(async (req, res) => {
  // get the user from the session
  const user = req.user;

  // send the user object
  return res.status(200).send(user);
});

export default handler;
