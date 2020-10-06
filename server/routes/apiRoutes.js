import {
  postController,
  getPostsController,
  imagePostController,
  getSingleImage,
} from "../controller/Controller";

import express from "express";

const router = express.Router();

router.post("/upload/image", upload.single("file"), imagePostController);

router.post("/upload/post", postController);

router.get("/retrive/post", getPostsController);

router.get("/retrive/images/image", getSingleImage);

export { router };
