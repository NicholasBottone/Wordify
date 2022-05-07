import mongoose from "mongoose";
import { Request, Response } from "../endpoints/express";

export default async (_req: Request, _res: Response, next: () => void) => {
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
