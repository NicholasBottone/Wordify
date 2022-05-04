import { NextApiRequest, NextApiResponse } from "next";
import IUser from "../../types/IUser";

export interface Request extends NextApiRequest {
  user: IUser | undefined;
  logout: () => Promise<void>;
}

export interface Response extends NextApiResponse {}
