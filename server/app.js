import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import GridFsStorage from "multer-gridfs-storage";
import Grid from "gridfs-stream";
import bodyParser from "body-parser";
import path from "path";
import pusher from "pusher";
import { router } from "./routes/apiRoutes";

const app = express();
const PORT = process.env.PORT || 4000;

// mongoDB connction
const dataBase =
  "mongodb+srv://Ar271997:Ar271997@cluster0.blejq.mongodb.net/node-practice?retryWrites=true&w=majority";

const conn = mongoose.createConnection(dataBase, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let gfs;

conn.once("open", () => {
  console.log("connected to DB");
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("images");
});

const storage = new GridFsStorage({
  url: dataBase,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = `image-${Data.now()}${path.extname(file.originalname)}`;
      const fileInfo = {
        filename,
        bucketName: "images",
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

// middleware

app.use(bodyParser.json());
app.use(cors());

// requests

app.get("/", (req, res) => {
  res.status(200).send("OK Body. Good to go//");
});

// routes

app.use("/api", router);

// listen

app.listen(PORT, () => {
  console.log(`listening for requests`);
});

export { gfs };
