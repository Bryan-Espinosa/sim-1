const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const PORT = process.env.PORT || 3001;

const app = express();
app.use(json());
massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);
app.listen(PORT, console.log(`listening on port ${PORT}`));
