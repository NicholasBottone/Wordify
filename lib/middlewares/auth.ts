import { passport } from "@/api-lib/auth";
import session from "./session";

const auth = [session, passport.initialize(), passport.session()];

export default auth;
