const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../../config/keys');
const User = require('../models/relations').User;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.getUserByGoogleID(profile.id);
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientId,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            const user = await User.findOrCreate({
                where: { userGoogleID: profile.id },
                defaults: {
                    userFirstName: profile.name.givenName,
                    userSecondName: profile.name.familyName,
                    userEmail: profile.emails[0].value,
                    userType: true
                }
            });
            done(null, user[0]);
        }
    )
);
