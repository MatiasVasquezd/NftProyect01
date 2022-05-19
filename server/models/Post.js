import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      public_id: String,
      url: String,
    },
    comments: {
      type: Array
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Post", postSchema);
