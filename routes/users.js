const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/Users");

// @router  POST api/users
// @desc    register a user
// @access  Public

// ('/') is a ref to api/users
router.post(
  "/",
  // Validating the info given
  [
    check("name", "Please add a name")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    // requesting the data that is sent to the route
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      //looks for users by the email from input
      let user = await User.findOne({ email });

      if (user) {
        //returns bad request if user already exists
        return res.status(400).json({ msg: "User already exists" });
      }
      //creates a new user
      user = new User({
        name,
        email,
        password
      });

      //  salt is generated
      const salt = await bcrypt.genSalt(10);
      //  salt is applied to password
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        // set to 3600 when in production
        {
          expiresIn: 3600000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
