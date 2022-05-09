import { Request, Response } from "../../../lib/endpoints/express";
import nc from "next-connect";
import mongoose from "../../../lib/middlewares/mongoose";
import auth from "../../../lib/middlewares/auth";
import passport from "../../../lib/auth/passport";

const handler = nc<Request, Response>();

handler.use(mongoose, ...auth);

handler.get(passport.authenticate("google", { scope: ["profile", "email"] }));

export default handler;
