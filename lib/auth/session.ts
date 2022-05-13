import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import NextSession from "next-session";
import { promisifyStore } from "next-session/lib/compat";

export default async function setupSession(
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  const store = promisifyStore(
    new MongoStore({
      client: mongoose.connection.getClient(),
      stringify: false,
    })
  );

  const session = NextSession({
    store,
    touchAfter: 1000 * 60 * 60 * 24 * 7, // 1 week
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      secure: process.env.NODE_ENV === "production",
    },
  });

  await session(req, res);
  next();
}
