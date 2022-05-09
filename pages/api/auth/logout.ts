import { Request, Response } from "../../../lib/endpoints/express";
import nc from "next-connect";
import mongoose from "../../../lib/middlewares/mongoose";
import auth from "../../../lib/middlewares/auth";

const handler = nc<Request, Response>();

handler.use(mongoose, ...auth);

handler.get(async (req, res) => {
  await req.logout();
  res.status(200).json({ message: "logged out" });
});

export default handler;
