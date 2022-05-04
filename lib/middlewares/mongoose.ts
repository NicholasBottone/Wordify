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
  console.log("Connecting to MongoDB...");
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("Connected to MongoDB!");
  } catch (e) {
    console.error(e);
  }
  return next();
};
