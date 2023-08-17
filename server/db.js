import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log(`connected successfully to database`);
  } catch (error) {
    console.log("error connecting to database", error.message)
  }

}
