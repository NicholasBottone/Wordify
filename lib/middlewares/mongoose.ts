import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (
  _req: NextApiRequest,
  _res: NextApiResponse,
  next: () => void
) => {
  if (mongoose.connections[0].readyState) {
    // already connected
    return next();
  }
  // connect to mongo
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("connected to MongoDB!");
  } catch (e) {
    console.error(e);
  }
  return next();
};
