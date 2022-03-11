import mongoose from 'mongoose';
export default async () => {
  console.log('loaders/mongoose.js');
  const connection = await mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  return connection.connection.db;
};
