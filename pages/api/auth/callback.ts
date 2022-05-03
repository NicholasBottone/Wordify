import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import mongoose from "../../../lib/middlewares/mongoose";
import auth from "../../../lib/middlewares/auth";
import passport from "../../../lib/auth/passport";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.use(mongoose, ...auth);

handler.get(passport.authenticate("google", { successRedirect: "/" }));

export default handler;
