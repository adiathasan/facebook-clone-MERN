import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    user: String,
    imgUrl: String,
    text: String,
    avatar: String,
  },
  { timestamps: true }
);

export default mongoose.model("post", postSchema);
