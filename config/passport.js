const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../model/User');
const key = require('./keys').secret;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//  This method is simply going to extract all the token from the header as a bearer because we have already sent the token from users.js in Bearer ${token} and this is the one that extracts the token and decode it.
opts.secretOrKey = key;

//  We are preparing the token
module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload._id).then(user => {
                if (user) return done(null, user);
                return done(null, false);
            }).catch(err => {
                console.log(err);
            });
        })
    );
};