const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/Users");
const Content = require("../models/Shop");

//Purpose: to allow admin to perform CRUD Ops on to the website via
//         secured route

// @router  GET api/shop
// @desc    Get all content
// @access  Public

router.get("/", async (req, res) => {
  try {
    //contents represents all the items that are stored in the database
    const contents = await Content.find({}).sort({ date: -1 });
    res.json(contents);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @router  POST api/shop
// @desc    Add new content
// @access  Private

router.post(
  "/",
  [
    auth,
    //uses auth verify if content is valid
    [
      check("name", "Name is required")
        .not()
        .isEmpty(),
      check("colour", "Colour is required")
        .not()
        .isEmpty(),
      check("price", "Price is required")
        .not()
        .isEmpty(),
      check("size", "Size is required")
        .not()
        .isEmpty(),
      check("quantity", "Quantity is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    // requesting the data that is sent to the route & validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //input taken
    const { name, colour, price, size, quantity } = req.body;
    try {
      const newContent = new Content({
        name,
        colour,
        price,
        size,
        quantity,
        user: req.user.id
      });

      //new db entry created and saved
      const content = await newContent.save();

      res.json(content);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @router  PUT api/shop/:id
// @desc    Update  content
// @access  Private (only for admin users)

router.put("/:id", auth, async (req, res) => {
  const { name, colour, price, size, quantity } = req.body;

  // build content object
  const contentFields = {};
  if (name) contentFields.name = name;
  if (colour) contentFields.colour = colour;
  if (price) contentFields.price = price;
  if (size) contentFields.size = size;
  if (quantity) contentFields.quantity = quantity;

  try {
    let content = await Content.findById(req.params.id);
    if (!content) return res.status(404).json({ msg: "Content not found" });

    //update function
    content = await Content.findByIdAndUpdate(
      req.params.id,
      { $set: contentFields },
      //if contact doesn't exist make a new one
      { new: true }
    );

    res.json(content);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @router  Delete api/shop/:id
// @desc    Get all content
// @access  Private

router.delete("/:id", auth, async (req, res) => {
  try {
    let content = await Content.findById(req.params.id);

    if (!content) return res.status(404).json({ msg: "Content not found" });

    await Content.findByIdAndRemove(req.params.id);

    res.json({ msg: "Content Removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
