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
  await mongoose.connect(process.env.MONGODB_URL!);
  return next();
};
