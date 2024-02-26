import mongoose from "mongoose";

interface Projects {
  name: string;
  git: string;
  live?: string;
  image: string;
  description: string;
}
const myProject = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  git: {
    type: String,
    required: [true, "Git is required"],
  },
  live: {
    type: String,
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
});

export const Project =
  mongoose.models.Project || mongoose.model<Projects>("Project", myProject);
