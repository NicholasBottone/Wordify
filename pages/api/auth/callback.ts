import { Request, Response } from "../../../lib/endpoints/express";
import nc from "next-connect";
import mongoose from "../../../lib/middlewares/mongoose";
import auth from "../../../lib/middlewares/auth";
import passport from "../../../lib/auth/passport";

const handler = nc<Request, Response>();

handler.use(mongoose, ...auth);

// after successful authentication, redirect to the home page
handler.get(passport.authenticate("google", { successRedirect: "/" }));

export default handler;
