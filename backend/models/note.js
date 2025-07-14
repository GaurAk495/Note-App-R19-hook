import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
  },
  { timestamps: true }
);

export const Note = mongoose.model("notes", noteSchema);
