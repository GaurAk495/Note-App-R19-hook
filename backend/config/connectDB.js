import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongo DB connected");
  } catch (error) {
    console.error("mongo db connection failed", error);
    process.exit(1);
  }
}
