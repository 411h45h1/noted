const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/Users");
const Note = require("../models/Note");

//Purpose: to allow admin to perform CRUD Ops on to the website via
//         secured route

// @router  GET api/shop
// @desc    Get all content
// @access  Public

router.get("/", async (req, res) => {
  try {
    //notes represents all the items that are stored in the database
    const notes = await Note.find({}).sort({ date: -1 });
    res.json(notes);
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
      check("title", "Title is required").not().isEmpty(),
      check("body", "Body is required").not().isEmpty(),
      check("label", "Label is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    // requesting the data that is sent to the route & validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //input taken
    const { title, body, label } = req.body;
    try {
      const newNote = new Note({
        title,
        body,
        label,
        user: req.user.id,
      });

      //new db entry created and saved
      const note = await newNote.save();

      res.json(note);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @router  PUT api/shop/:id
// @desc    Update  note
// @access  Private (only for admin users)

router.put("/:id", auth, async (req, res) => {
  const { name, colour, price, size, quantity } = req.body;

  // build note object
  const noteFields = {};

  if (title) noteFields.title = title;
  if (body) noteFields.body = body;
  if (label) noteFields.label = label;

  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found" });

    //update function
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: noteFields },
      //if contact doesn't exist make a new one
      { new: true }
    );

    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @router  Delete api/shop/:id
// @desc    Get all note
// @access  Private

router.delete("/:id", auth, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({ msg: "Note not found" });

    await Note.findByIdAndRemove(req.params.id);

    res.json({ msg: "Note Removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
