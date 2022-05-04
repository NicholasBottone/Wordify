import { Request, Response } from "../../../lib/endpoints/express";
import nc from "next-connect";
import mongoose from "../../../lib/middlewares/mongoose";
import auth from "../../../lib/middlewares/auth";

const handler = nc<Request, Response>();

handler.use(mongoose, ...auth);

handler.get(async (req, res) => {
  // get the user from the session
  const user = req.user;

  if (!user) {
    // the user is not logged in
    return res.status(401).json({
      message: "you are not logged in",
      success: false,
    });
  } else {
    // the user is logged in, return the user object
    res.status(200).json({
      message: "you are logged in",
      success: true,
      user: user,
    });
  }
});

export default handler;
