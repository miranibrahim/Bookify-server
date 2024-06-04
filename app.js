const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bookRoutes = require("./routes/book.route");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use('/', bookRoutes);

app.get("/", (req, res) => {
  res.send("server is running!");
});

module.exports = app;
