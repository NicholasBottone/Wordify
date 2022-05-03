// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import User from "../../models/User";
import nc from "next-connect";
import mongoose from "../../lib/middlewares/mongoose";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.use(mongoose);

type Data = {
  name: string;
};

handler.get(async (req, res) => {
  await User.create({
    googleId: "sdilfsk",
    name: "bob",
    givenName: "bobert",
    familyName: "rob",
    email: "blob@gmail.com",
    profilePicture: "x",
  });
  const users = await User.find();
  res.status(200).send(users);
});

export default handler;
