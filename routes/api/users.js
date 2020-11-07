const express = require("express");
const router = express.Router();
/** In order to hash our passwords */
const bcrypt = require("bcryptjs");
/** Also used to hash our passwords too */
const jwt = require("jsonwebtoken");
const passport = require("passport");
const key = require("../../config/keys").secret;
const User = require("../../model/User");
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * @route POST api/users/register
 * @desc Register the user
 * @access Public
*/
router.post("/register", (req, res) => {
  let { name, username, email, password, confirm_password } = req.body;

  //  We are just taking out all the variables above from the request object
  if (password !== confirm_password) {
    return res.status(400).json({
      msg: "Password does not match",
    });
  } else if (password.length < 8) {
    return res.status(400).json({
      msg: "Password should be more than eight characters",
    });
  }

  //  Check for the unique username
  User.findOne({ username: username }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: "Sorry, that username is already taken.",
      });
    }
  });

  //  Check for the unique Email
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: "email is already registered. Did you forget your password?",
      });
    }
  });

  //  Validate email
  const valid = emailRegex.test(email);
  //   const parts = email.split("@");
  //   const domainParts = parts[1].split(".");

  if (email.length > 254) {
    return res.status(400).json({
      msg: "Please enter a valid email address",
    });
  } else if (!valid) {
    return res.status(400).json({
      msg: "Please enter a valid email address",
    });
  }

  //  The data is valid and now we can register the user
  let newUser = new User({
    name,
    username,
    password,
    email,
  });

  //  Hash the password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save().then((user) => {
        return res.status(201).json({
          success: true,
          msg: "User is now registered.",
        });
      });
    });
  });
});

/**
 * @route POST api/users/login
 * @desc Signing in the User
 * @access Public
 */
router.post("/login", (req, res) => {
  User.findOne({
    username: req.body.username,
  }).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "Username is not found.",
        success: false,
      });
    }

    //  If there is user we are now going to compare the password
    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        //  User's password is correct and we need to send the JSON token for that user
        const payload = {
          _id: user._id,
          username: user.username,
          name: user.name,
          email: user.email,
        };
        jwt.sign(
          payload,
          key,
          {
            expiresIn: 604800,
          },
          (err, token) => {
            res.status(200).json({
              success: true,
              token: `Bearer ${token}`,
            //   user: user,
              msg: "You are now logged in.",
            });
          }
        );
      } else {
        return res.status(404).json({
          msg: "Incorrect password.",
          success: false,
        });
      }
    });
  });
});

/**
 * @route POST api/users/profile
 * @desc Return the User's Data
 * @access Private
 */
router.get(
  "/home",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.json({
      user: req.user,
    });
  }
);

module.exports = router;
