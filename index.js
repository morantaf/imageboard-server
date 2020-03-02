const express = require("express");
const app = express();
const imageRouter = require("./images/router");

const jsonParser = express.json();
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(jsonParser);
app.use(imageRouter);
