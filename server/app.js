const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
// mongoDB connction
const dataBase =
  "mongodb+srv://Ar271997:Ar271997@cluster0.blejq.mongodb.net/node-practice?retryWrites=true&w=majority";

// mongoose.connect(dataBase, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connection.on("open", () => {
//   console.log("connected");
// });

// middleware

app.use(cors());

// requests

app.get("/", (req, res) => {
  console.log(req.route);
});

app.listen(PORT, () => {
  console.log(`listening for requests`);
});
