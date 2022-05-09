import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import User from "../../models/User";
import IUser from "../../types/IUser";

// Get the user ID from user object
passport.serializeUser((user, done) => {
  done(null, (user as IUser).id);
});

// Get the user object from the user ID
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});

const callbackURL = process.env.VERCEL
  ? `https://wordifygame.vercel.app/api/auth/callback`
  : "http://localhost:3000/api/auth/callback";

// Google OAuth Strategy
passport.use(
  new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      callbackURL: callbackURL,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      // Attempt to find user in database
      const user = await User.findOne({ googleId: profile.id });

      if (user) {
        // Existing user found in database
        return done(null, user);
      }

      // Extract user information from the profile
      const { sub, name, email, picture, given_name, family_name } =
        profile._json;

      // First time sign-in, create new user
      const newUser = await User.create({
        googleId: sub,
        name: name,
        givenName: given_name,
        familyName: family_name,
        email: email,
        profilePicture: picture,
      });
      return done(null, newUser);
    }
  )
);

export default passport;
