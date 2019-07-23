const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
mongoose.connect("mongodb://127.0.0.1:27017/talent-seek")

app.listen(port, () => console.log(`Listening on Port ${port}`));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
