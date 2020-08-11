const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

// Connect Database
connectDB();

//Init Middleware
// allows (req.body) to work in routes/users
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use("/api/users", require("./routes/users"));

// serve react in prod
if (process.env.NODE_ENV === "production") {
  // static assets react builds
  app.use(express.static("client/build"));
  // if route '/' is hit find the index.html
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// looks for an env variable named port during production or port 5k
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
