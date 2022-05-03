import passport from "../auth/passport";
import session from "../auth/session";

export default [session, passport.initialize(), passport.session()];
