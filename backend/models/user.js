import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      required: true,
    },
    profile: {
      bio: { type: String },
      skills: [{ type: String }], // Fixed incorrect "string" type
      resume: { type: String },
      resumeOriginalName: { type: String }, // Fixed typo
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" }, // Fixed "compony" typo
      profilePhoto: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

