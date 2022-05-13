import passport from "../auth/passport";
import session from "../auth/session";

const auth = [session, passport.initialize(), passport.session()];

export default auth;
