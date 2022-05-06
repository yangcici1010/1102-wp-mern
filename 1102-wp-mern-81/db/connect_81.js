import mongoose from 'mongoose';

const connectDB_81 = (url) => {
  return mongoose.connect(url);
}

export default connectDB_81;