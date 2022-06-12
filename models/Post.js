import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    userId: {
      type: String,
    },
    desc: {
      type: String,
      required: true,
    },
    category: { 
      type: Array,
      required: true},
  },
  { timestamps: true }
);

export default mongoose.models.Post ||
  mongoose.model("Post", PostSchema);