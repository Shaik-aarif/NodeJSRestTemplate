import mongoose from "mongoose";
import colors from "colors"; // For colorful console logs, if using
import { logError, logInfo } from "../utils";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

      logInfo(`MongoDB Connected: ${connection.connection.host}`.cyan.bold, {});
  } catch (error) {
      logError(`Error connecting to MongoDB: ${error.message}`.red, error);
    process.exit(1); 
  }
};

export default connectDB;
