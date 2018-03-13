const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../../config/keys');
const User = require('../models/relations').User;

passport.serializeUser((user, done) => {
    done(null, user.userGoogleID);
});

passport.deserializeUser(async (userGoogleID, done) => {
    const user = await User.getUserByGoogleID(userGoogleID);
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
                    userType: false
                }
            });
            done(null, user[0].dataValues);
        }
    )
);
