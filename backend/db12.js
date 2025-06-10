import mongoose from "mongoose";

const DB12Connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log("DB Connected:", process.env.MONGO_URI);
  } catch (err) {
    console.error("Connection error:", err);
  }
};

export default DB12Connect;
