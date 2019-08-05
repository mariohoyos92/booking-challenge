require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const app = express();

app.use(express.static(`${__dirname}/../build/`));
app.use(json());
app.use(cors());

app.use(require("./routes"));

// Only show stack trace in development
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: process.env.NODE_ENV === "development" ? err : {}
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () =>
  console.log(`
Running on: ${port}`)
);
