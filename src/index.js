const express = require("express");
require("./db/mongoose"); //ensures mongoose runs and connects to our database
const app = express();
app.listen(3000, () => {
  console.log("server up on 3000");
});
