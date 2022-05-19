import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error(error);
  }
};

mongoose.connection.on("server corriendo como los dioses ", () => {
  console.log("Mongodb Esta conectado a ", mongoose.connection.db.databaseName);
});
