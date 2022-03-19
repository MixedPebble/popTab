import mongoose from 'mongoose';
export default async () => {
  console.log('loaders/mongoose.js');
  const connection = await mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  return connection.connection.db;
};
