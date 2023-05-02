import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    // console.log(`connected to mongodb database ${mongoose.connection.host}`);
  } catch (error) {
    // console.log(`mongodb  ${error}`);
  }
};

export default connectDB;
