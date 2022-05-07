import { Request, Response } from "../endpoints/express";

/**
 * Middleware to check if the user is logged in.
 * Continues to next middleware if logged in, otherwise responds with 401.
 */
export async function isLoggedIn(
  req: Request,
  res: Response,
  next: () => void
) {
  if (req.user) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}
