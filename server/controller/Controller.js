import { gfs } from "../app";
import postSchema from "../model/schema";

const postController = (req, res) => {
  const dBPost = req.body; // distructure
  postSchema.create(dBPost, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};

const imagePostController = (req, res) => {
  res.status(201).send(req.file);
};

const getPostsController = (req, res) => {
  postSchema
    .find()
    .then((data) => {
      data.sort((b, a) => {
        return a.timestamp - b.timestamp;
      });
      res.status(200).send(data);
    })
    .catch((err) => res.status(500).send(err));
};

const getSingleImage = (req, res) => {
  gfs.files.findOne({ filename: req.query.name }, (err, file) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (!file || file.length === 0) {
        res.status(404).json({ err: "file not found" });
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
      }
    }
  });
};

export {
  postController,
  getPostsController,
  imagePostController,
  getSingleImage,
};
