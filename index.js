const express = require("express");
const app = express();
const db = require("./db.js");

const jsonParser = express.json();
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));
