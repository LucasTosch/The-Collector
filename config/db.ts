import mongoose from "mongoose";
import config from "./config";

export const connectDB = async () => {
  //   let env = process.env["NODE_ENV"];
  //   console.log(env);
  try {
    const conn = await mongoose.connect(config.MONGO_URI, {});
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`MongoDB connection error: ${err}`);
  }
};
