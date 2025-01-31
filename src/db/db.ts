import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("Connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("Error", (error) => {
      console.log("MongoDB connection error" + error);
      process.exit();
    });
  } catch (error) {
    console.log(`Something went wrong! Error: ${error}`);
  }
}
