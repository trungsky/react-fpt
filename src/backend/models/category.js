import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxLength: 32,
    },
  },
  { timestamps: true, versionKey: false }
);
module.exports = mongoose.model("Category", categorySchema);
