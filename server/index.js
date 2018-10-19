require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const PORT = process.env.PORT || 3001;
const { inventory } = require("./controller");

const app = express();
app.use(json());
massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.get("/api/inventory", inventory);
app.listen(PORT, console.log(`listening on port ${PORT}`));
